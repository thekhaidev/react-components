// TODO
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList groceryItems={['Cds', 'Merch', 'Bagels']}/>
  </div>
);



// Refactoring GroceryListItem
// Using ES6 Class Declaration
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props); // This is same as React.component.call(this, props) in ES5

      // `state` is just an object literal
      // current state of item is not bought
      this.state = {
        bought: false
      };
  }

    // When a list item is clicked, we will toggle the `bought`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      bought: !this.state.bought
    });
  }

  // Class must have render method
// Stateless functional components are basically just this
render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.bought ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItems}</li>
    );
  }
}


// Updated TodoList to use TodoListItemsComponents
var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItems =>
      <GroceryListItem groceryItems={groceryItems} />
    )}
  </ul>
);



ReactDOM.render(<App />, document.getElementById("app"));