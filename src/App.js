import React, { Component } from 'react';
import s from './App.module.css';

import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  static defaultProps = {
    query: '',
    pageNumber: 1,
  };

  constructor(props) {
    super(props);
    this.state = { ...this.props };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(query) {
    this.setState({
      query: query,
      pageNumber: 1,
    });
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
