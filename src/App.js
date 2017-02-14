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
                {id: generateId(), name: 'Build something cool', isComplete: false},
                {id: generateId(), name: 'Learn a bit of testing', isComplete: false}
            ],
            currentTodo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
    }

    handleEmptySubmit(event) {
        event.preventDefault();
        this.setState({
            errorMessage: 'Please insert a vaild '
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const newTodo = {id: generateId(), name: this.state.currentTodo, isComplete: false};
        const updatedTodos = addTodo(this.state.todos, newTodo);

        this.setState({
            todos: updatedTodos,
            currentTodo: '',
            errorMessage: ''
        });
    }

    handleChange(event) {
        this.setState({
            currentTodo: event.target.value
        });
    }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To do app</h2>
        </div>
        <div className="Todo-App">
            <span className="error">{this.state.errorMessage}</span>
            <TodoForm handleSubmit={submitHandler} handleChange={this.handleChange} currentTodo={this.state.currentTodo}/>
            <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
