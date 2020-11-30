import React, { Component } from 'react';

import s from './Searchbar.module.css';

class SearchBar extends Component {
  static defaultProps = {
    query: '',
  };

  constructor(props) {
    super(props);
    this.state = { ...this.props };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSearch, query } = this.state;
    onSearch(query);
  }

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
