import React, {Component} from 'react';

export default class AddItem extends Component {

    render() {
        const { onAddItem } = this.props;

        const newItem = 'Say hello world';

        return (
            <div>
                <input type="text" placeholder='Text for new item'/>
                <button onClick={() => {onAddItem(newItem)}}>Добавить</button>
            </div>
        );
    }
};