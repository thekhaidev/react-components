// TODO
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList list={['Cds', 'Merch', 'Bagels']}/>
  </div>
);



// Refactoring GroceryListItem
// Using ES6 Class Declaration
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props); // This is same as React.component.call(this, props) in ES5
  }

  // Class must have render method
// Stateless functional components are basically just this
render() {
  // Must use return due to curly brackets
  // Using this.props instead of props
  return (
    <li>{this.props.list}</li>
  );
}

}
// Updated TodoList to use TodoListItemsComponents
var GroceryList = (props) => (
  <ul>
    {props.list.map(list =>
      <GroceryListItem list={list} />
    )}
  </ul>
);



ReactDOM.render(<App />, document.getElementById("app"));