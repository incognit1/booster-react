import React from 'react';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        fontWeight: important ? 'bold' : 'normal',
        color: important ? 'tomato' : 'black',
    };

    return (<span className="list-group" style={style}>{ label }</span>);
};

export default TodoListItem;
