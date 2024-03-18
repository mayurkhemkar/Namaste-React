// const heading = React.createElement('h1', { id: 'heading' }, "Hello world from React!");
const heading = React.createElement('div', { id: 'grand-parent' }, [React.createElement('div', { id: 'parent' },React.createElement('div', { id: 'child' },React.createElement('h1', { id: 'child' }, React.createElement('h1', { id: 'heading' },"Heading" )) ) )]);



console.log(heading) // gives output  as Object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
