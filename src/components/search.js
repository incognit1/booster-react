import React from 'react';

const Search = () => {
    const placeholder = 'Search to do';
    const searchStyle = {
        fontSize: '20px',
    };

    return (
        <input type="text" style={ searchStyle } placeholder={ placeholder }/>
    )
};

export default Search;
