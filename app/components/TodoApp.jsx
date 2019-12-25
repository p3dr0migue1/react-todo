import React from 'react';

// local imports
import AddTodo from 'AddTodo';
import TodoList from 'TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(text) {
    alert(`new todo: ${text}`);
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
};

export default TodoApp;
