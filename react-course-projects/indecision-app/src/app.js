console.log('App.js is running!');

// JSX - JavaScript XML

var template = <p>This is live update from app.js!</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);