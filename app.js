// TODO
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList />
  </div>
);

var TodoList = () => (
  <div><ul>
    <Drip />
    <Swag />
    </ul>
    </div>
);

var Drip = () => (
  <li>Drip</li>
);

var Swag = () => (
  <li>Swag</li>
);

ReactDOM.render(<App />, document.getElementById("app"));