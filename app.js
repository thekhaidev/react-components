// TODO
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList />
  </div>
);

var TodoList = () => (
  <div><ul>
    <li>Potato</li>
    <li>Salad</li>
    </ul>
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));