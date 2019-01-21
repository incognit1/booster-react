import React, { Component } from 'react';
import './filter.css'

export default class Filter extends Component {
    render() {
        return (
            <div className='filter'>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-light">Все</button>
                    <button type="button" className="btn btn-light">Невыполненные</button>
                    <button type="button" className="btn btn-light">Важне</button>
                </div>
            </div>
        );
    }
}
