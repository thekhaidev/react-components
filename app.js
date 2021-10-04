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

var TodoList = (props) => (
  <div><ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
    </ul>
    </div>
);


ReactDOM.render(<App />, document.getElementById("app"));