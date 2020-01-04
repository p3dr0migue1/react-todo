import React from 'react';

// local imports
import Todo from 'Todo';

class TodoList extends React.Component {
  render() {
    const { onToggle, todos } = this.props;

    if (todos.length === 0) {
      return (
        <p className="container__message">Nothing to do</p>
      );
    }

    const renderTodos = () => {
      return todos.map((todo) => {
        return (<Todo key={todo.id} {...todo} onToggle={onToggle} />);
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
