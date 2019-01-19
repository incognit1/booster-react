import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Search from './components/search';
import TodoList from './components/todo-list';


const App = () => {
    const todoData = [
        {
            label: 'Drink coffee',
            important: false,
            id: 0,
        },
        {
            label: 'Buy bread',
            important: false,
            id: 1,
        },
        {
            label: 'Create React app',
            important: true,
            id: 2,
        }
    ];

    return (
        <div>
            <Header/>
            <Search/>
            <TodoList todoData={ todoData }/>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
