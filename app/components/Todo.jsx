import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
  render() {
    const { completed, completedAt, createdAt, id, text } = this.props;
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
      <div onClick={() => { this.props.onToggle(id) }}>
        <input type='checkbox' checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
};

export default Todo;
