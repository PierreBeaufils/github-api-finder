import React, { useState } from 'react';
import './searchbar.scss';
import PropTypes from 'prop-types';
import { Form, Segment } from 'semantic-ui-react';

const SearchBar = ({ search }) => {
  const [searchInputValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    search(searchInputValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="searchbar">
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            icon="search"
            iconPosition="left"
            placeholder="Rechercher un repo ..."
            value={searchInputValue}
            onChange={handleChange}
          />
        </Form>
      </Segment>
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
