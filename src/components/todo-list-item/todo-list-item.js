import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        const style = {
            fontWeight: important ? 'bold' : 'normal',
            color: important ? 'tomato' : 'black',
        };

        return (
            <span className={classNames}>
            <span
                style={style}>{ label }</span>
            <div className="item-btn">
                <button
                    onClick={ onToggleDone }>Выполнено</button>
                <button className='important'
                        onClick={ onToggleImportant }>Важное</button>
                <button className='important'
                        onClick={ onDeleted }>Удалить</button>
            </div>
        </span>
        );
    }
}