import React from 'react';

const List = (props) => {
    return (<p>{props.tasks.join(', ')}</p>)
}

class ToDo extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        return (<div>
            <h1>To Do Lists</h1>
            <h2>Today</h2>
            <List tasks={["Reading a book", "Make happy"]}/>
            <h2>Tomorrow</h2>
            <List tasks={["Play the game", "Do a Big things", "Reading a book"]}/>
        </div>)
    }

}

export default <ToDo/>
