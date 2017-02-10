import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId} from './lib/todoHelpers';

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {id: 1, name: 'Learn React', isComplete: false},
                {id: 2, name: 'Build something cool', isComplete: false},
                {id: 3, name: 'Learn a bit of testing', isComplete: false}
            ],
            currentTodo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const newTodo = {id: generateId(), name: this.state.currentTodo, isComplete: false};
        const updatedTodos = addTodo(this.state.todos, newTodo);

        this.setState({
            todos: updatedTodos,
            currentTodo: ''
        });
    }

    handleChange(event) {
        this.setState({
            currentTodo: event.target.value
        });
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To do app</h2>
        </div>
        <div className="Todo-App">
            <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} currentTodo={this.state.currentTodo}/>
            <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
