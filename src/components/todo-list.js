import React from 'react';
import TodoListItem from "./todo-list-item";

const TodoList = ({ todoData }) => {

    const elements = todoData.map(({id, ...props}) => {
        return (<li key={id}><TodoListItem {...props} /></li>)
    });

    return (
        <ul className='list-group'>
            { elements }
        </ul>
    );
};

export default TodoList;
