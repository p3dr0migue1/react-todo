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
});
