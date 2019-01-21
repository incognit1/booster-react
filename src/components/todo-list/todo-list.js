import React, {Component} from 'react';
import TodoListItem from "../todo-list-item";

import './todo-list.css';
import AddItem from "../add-item/add-item";

export default class TodoList extends Component {

    render() {
        const {
            todoData,
            onDeleted,
            onAddItem,
            onToggleImportant,
            onToggleDone,
        } = this.props;

        const elements = todoData.map(({id, ...props}) => {
            return (
                <li key={id} className='list-group-item'>
                    <TodoListItem
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleDone={() => onToggleDone(id)}
                        onDeleted={() => onDeleted(id)}
                        {...props} />
                </li>
            )
        });

        return (
            <div>
                <ul className='list-group todo-list'>
                    {elements}
                </ul>
                <AddItem onAddItem={onAddItem}/>
            </div>
        );
    }
}


