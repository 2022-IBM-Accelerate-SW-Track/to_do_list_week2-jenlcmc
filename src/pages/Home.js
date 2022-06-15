import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "../pages/Home.css";

class Home extends Component {
  // Create a default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    // In React, keys or ids in a list help identify which items have changed, been added or removed. Keys
    // should not share duplicate values.
    // To avoid having dup values, we use the Math.random() function to generate a random value for a todo id.
    // This solution works for a small application but a more complex hashing function should be used when
    // dealing with a larger data sensitive project.
    todo.id = Math.random();

    //this will check for if the todo already in the to do list or not
    //if it alredy in the list, it will not add it again and return
    //otherwise, add it into the array and update the state

    if (this.state.todos.find((t) => t.content === todo.content)) {
      return;
    } else {
      this.setState((prevState) => ({
        todos: [...prevState.todos, todo],
      }));
    }
  };

  // the deleteTodo function is passed into the Todos component
  //and is used to remove a todo from the list by using filter function.
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="Home">
        <h1>Todo's </h1>
        {/* When passing the AddTodo component, addTodo is a prop that is used in the 
        AddTodo.js file when handling the submit */}
        <AddTodo addTodo={this.addTodo} />
        {/* When returning the Todos component, todos is a prop passed to the todos.js file
         to format and render the current todo list state */}
        <hr></hr>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Home;
