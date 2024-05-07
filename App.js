import React from 'react';
import ReactDOM from 'react-dom/client';

/*
const heading = React.createElement("h1", {}, "Hello World with ReactJS!!!!")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

const heading = React.createElement(
    "h1",
    {id : "attributeOfTheTag", xyz:"abc"}, 
    "Hello World with ReactJS!!!!");
console.log(heading); //object 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading); //converts heading object to h1 html tag

/*
‹div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </ div>
    <div id="child2"›
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    ‹/div>
</div›
ReactElement (Object) = HTML (Browser Understands)
*/
const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div", 
        {id: "child1" }, 
        [React. createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")]
    ),
    React.createElement(
        "div", 
        {id: "child2" }, 
        [React. createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")]
    )]
);
console. log(parent); // object
root. render (parent); // it will replace root div with parent