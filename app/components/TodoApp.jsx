import React from 'react';

// local imports
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
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
};

export default TodoApp;
