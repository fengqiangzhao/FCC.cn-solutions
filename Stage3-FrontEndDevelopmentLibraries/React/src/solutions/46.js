import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [{
                username: 'Jeff', online: true
            }, {
                username: 'Alan', online: false
            }, {
                username: 'Mary', online: true
            }, {
                username: 'Jim', online: false
            }, {
                username: 'Sara', online: true
            }, {
                username: 'Laura', online: true
            },]
        }
    }

    render() {
        const usersOnline = this.state.users.filter(item => item.online)
        const renderOnline = usersOnline.map((item, index) => <li key={index}>{item.username}</li>)
        return (<div>
            <h1>Current Online Users:</h1>
            <ul>{renderOnline}</ul>
        </div>)
    }
}

export default <MyComponent/>
