import React from 'react';
import './index.scss';

const SearchBar = ({ onSearch }) => {
  function searchTerm(e){
    e.preventDefault();
    onSearch(e.target.term.value);
  }

  return (
    <div className="search-bar ui segment">
      <form className="search-form ui form" onSubmit={searchTerm}>
        <div className="ui icon input">
          <input type="text" name="term" placeholder="Search..."/>
          <i className="search icon" />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;