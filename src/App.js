import React, { Component } from 'react';

import s from './App.module.css';

import getData from './services/pixabayAPI';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton';
import Preloader from './components/Preloader/Preloader';
import Modal from './components/Modal/Modal';

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

  componentDidUpdate(prevProps, prevState) {}

  onSearch = async query => {
    this.setState({
      query: query,
      pageNumber: 1,
      isLoading: true,
      error: false,
    });
    try {
      const data = await getData(query, 1);
      this.setState({
        images: data.hits,
        isLoading: false,
        totalPages: Math.ceil(data.totalHits / 12),
      });
    } catch (error) {
      this.setState({
        error: true,
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
    const {
      dataset: { url },
    } = event.target;
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
    const { images, pageNumber, totalPages, isLoading, modalSrc } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSearch={this.onSearch} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.onImageClick} />
        )}
        {isLoading && <Preloader />}
        {pageNumber < totalPages && (
          <LoadMoreButton onClickHandler={this.loadMore} />
        )}
        {modalSrc && (
          <Modal onCloseModal={this.onCloseModal}>
            <img src={modalSrc} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
