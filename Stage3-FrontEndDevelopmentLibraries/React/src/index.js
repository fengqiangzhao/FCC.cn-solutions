import ReactDOM from "react-dom";
import App from "./solutions/47";
import * as ReactDOMServer from "react-dom/server";

// ========================================
// ReactDOM.render(
//     JSX,
//     document.getElementById("root"));

console.log(ReactDOMServer.renderToString(App))

ReactDOM.render(App, document.getElementById("root"));
