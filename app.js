// TODO
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Find drip', 'Find swag', 'Repeat']}/>
  </div>
);

// Version 1 no Props
// var TodoList = () => (
//   <div><ul>
//     <Drip />
//     <Swag />
//     </ul>
//     </div>
// );

// var Drip = () => (
//   <li>Drip</li>
// );

// var Swag = () => (
//   <li>Swag</li>
// );

// Version 2 using props

// var TodoList = (props) => (
//   <div><ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//     </ul>
//     </div>
// );

// Handling Events

var TodoList = (props) => {

  // This function will be called when the first `<li>` below is clicked on
  // Notice that event handling functions receive an `event` object
  // We want to define it where it has access to `props`

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  // Because we used curly braces with this arrow function
  // we have to write an explicit `return` statement
  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
}


ReactDOM.render(<App />, document.getElementById("app"));