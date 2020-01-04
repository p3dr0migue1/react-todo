import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
  render() {
    const { completed, completedAt, createdAt, id, text } = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed';
        timestamp = completedAt;
      }
      return `${message} ${moment.unix(timestamp).format('MM Do YYYY @ h:mma')}`;
    }

    return (
      <div className={todoClassName} onClick={() => { this.props.onToggle(id) }}>
        <div>
          <input type='checkbox' checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
};

export default Todo;
