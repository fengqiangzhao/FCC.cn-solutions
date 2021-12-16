import React from "react";
import * as ReactDOMServer from "react-dom/server";

//为了更方便的被爬虫索引

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div />
    }
}

export default <App />
