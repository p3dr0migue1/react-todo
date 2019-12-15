import React from 'react';

// local imports
import Todo from 'Todo';

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    const renderTodos = () => {
      return todos.map((todo) => {
        return (<Todo key={todo.id} {...todo} />);
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
};

export default TodoList;
