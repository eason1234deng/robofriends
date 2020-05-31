import React from 'react';

const SearchBox = ({ onSearchFieldChange }) =>
    <div className='pa2'>
        <input
            className="pa3 ba b--green bg-lightest-blue"
            type='search'
            placeholder="search robots"
            onChange={onSearchFieldChange}
            />
    </div>

export default SearchBox;