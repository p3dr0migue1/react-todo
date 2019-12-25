import React from 'react';
import uuid from 'node-uuid';

// local imports
import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          'id': uuid(),
          'text': 'Walk the dog',
        },
        {
          'id': uuid(),
          'text': 'Clean the yard',
        },
        {
          'id': uuid(),
          'text': 'Do react course',
        },
        {
          'id': uuid(),
          'text': 'Do laundry',
        }
      ]
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,  // we want to include all old todos
        {
          id: uuid(),
          text: text,
        },
      ],
    });
  };

  handleSearch(searchText, showCompleted) {
    this.setState({
      searchText: searchText.toLowerCase(),
      showCompleted: showCompleted,
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
};

export default TodoApp;
