import React, { Component } from 'react';
import s from './App.module.css';

import getData from './services/pixabayAPI';

import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  static defaultProps = {
    query: '',
    pageNumber: 1,
    isLoading: false,
    error: false,
    images: [],
  };

  constructor(props) {
    super(props);
    this.state = { ...this.props };
    this.onSearch = this.onSearch.bind(this);
  }

  async onSearch(query) {
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
      });
    }
  }

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSearch={this.onSearch} />
      </div>
    );
  }
}

export default App;
