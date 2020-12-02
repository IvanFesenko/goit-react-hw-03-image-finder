import React, { Component } from 'react';

import s from './App.module.css';

import getData from './services/pixabayAPI';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton';
import Preloader from './components/Preloader/Preloader';

class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    isLoading: false,
    error: false,
    images: [],
    totalPages: 0,
    modalSrc: '',
  };

  onSearch = async query => {
    this.setState({
      query: query,
      pageNumber: 1,
      isLoading: true,
      error: false,
    });
    const data = await getData(query, 1);
    if (data.hasOwnProperty('error')) {
      this.setState({
        error: true,
      });
    } else {
      console.log(data);
      this.setState({
        images: data.hits,
        isLoading: false,
        totalPages: Math.ceil(data.totalHits / 12),
      });
    }
  };

  loadMore = async () => {
    const { query, pageNumber } = this.state;
    const cords = document.documentElement.scrollHeight - 170;
    this.setState({
      isLoading: true,
    });
    const data = await getData(query, pageNumber + 1);
    this.setState(prevState => ({
      images: prevState.images.concat(data.hits),
      pageNumber: prevState.pageNumber + 1,
      isLoading: false,
    }));
    window.scrollTo({
      top: cords,
      behavior: 'smooth',
    });
  };

  onImageClick = event => {
    event.preventDefault();
    const {
      dataset: { url },
    } = event;
    this.setState({
      modalSrc: url,
    });
  };

  onCloseModal = () => {
    this.setState({
      modalSrc: '',
    });
  };

  render() {
    const { images, pageNumber, totalPages, isLoading } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSearch={this.onSearch} />
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Preloader />}
        {pageNumber < totalPages && (
          <LoadMoreButton onClickHandler={this.loadMore} />
        )}
      </div>
    );
  }
}

export default App;
