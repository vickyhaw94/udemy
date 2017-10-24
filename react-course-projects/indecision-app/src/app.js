console.log('App.js is running!');

// JSX - JavaScript XML
let app = {
    title: 'Indecision App',
    subtitle: 'Information',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        renderTemplate();
        e.target.elements.option.value = '';
    }
};

// create 'remove all' button above list
// onclick -> wipe the array -> rerender

const removeAll = () => {
    app.options = [];
    renderTemplate();
};

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>remove</button>
            <ol>
                <li>One</li>
                <li>Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
// Create render function that renders the new jsx
// Call it right away
// Call it after options array added to

renderTemplate();