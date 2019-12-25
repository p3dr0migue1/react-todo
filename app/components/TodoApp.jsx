import React from 'react';

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
          'id': 1,
          'text': 'Walk the dog',
        },
        {
          'id': 2,
          'text': 'Clean the yard',
        },
        {
          'id': 3,
          'text': 'Do react course',
        },
        {
          'id': 4,
          'text': 'Do laundry',
        }
      ]
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddTodo(text) {
    alert(`new todo: ${text}`);
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
