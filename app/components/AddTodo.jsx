import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const todoText = this.refs.todoText.value;

    // // -> regular expressions start and end with a forward slash
    // [0-9] -> any characters from 0 through 9
    // * -> 0 through 9 can show as many times as the users want
    // ^ -> match the start character that's either 0 through 9
    // $ -> match the end character that's either 0 through 9

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form className="addtodo-form" ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};

export default AddTodo;
