import React from 'react';
import './search.css';

const Search = () => {
    const placeholder = 'Search to do';

    return (
        <div className='search'>
            <input type="text" className="form-control" placeholder={ placeholder }/>
        </div>
    )
};

export default Search;
