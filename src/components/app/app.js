import React, { Component } from 'react';
import Header from './../../components/header';
import Search from './../../components/search';
import TodoList from './../../components/todo-list';
import Filter from './../../components/filter';

export default class App extends Component {
    state = {
        todoData: [
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
        ],
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex(item => item.id === id);

            const newArray = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ];

            return {
                todoData: newArray,
            }
        });
    };

    onAddItem = (text) => {
        const newItem = {
            id: this.state.todoData.length,
            label: text,
            important: false,
            done: false,
        };

        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem],
            }
        })
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex(item => item.id === id);

            const newItem = {
                ...todoData[index],
                important: !todoData[index].important
            };

            // TODO
            const newArray = []

            return {
                todoData: newArray,
            }
        });
        console.log('id', id);
    };

    onToggleDone = (id) => {
        console.log('id', id);
    }

    render() {
        return (
            <div>
                <Header/>
                <Filter/>
                <Search/>
                <TodoList
                    onDeleted={this.deleteItem}
                    onAddItem={this.onAddItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    todoData={ this.state.todoData }/>
            </div>
        )
    }
}