import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).to.exist;
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    const todoText = 'Book concert tickets';
    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({ todos: [] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).to.equal(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    const todoData = {
      'id': 11,
      'text': 'Test features',
      'completed': false,
    };
    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ 'todos': [todoData] });

    expect(todoApp.state.todos[0].completed).to.be.false;

    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).to.be.true;
  });
});
