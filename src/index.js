import React from "react";
import ReactDom from "react-dom/client";

const name = 'Trần Thế Khiêm';
const myName = React.createElement('h1', {
    style: {
        textAlign: "center"
    }
}, name);
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(myName);