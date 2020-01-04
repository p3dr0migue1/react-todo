import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import expect from 'expect';

import Todo from 'Todo';
import TodoList from 'TodoList';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toBeTruthy();
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'Do something',
      },
      {
        id: 2,
        text: 'Check email',
      },
    ];
    const todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const todosComponent = ReactTestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponent.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    const todos = [];
    const todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.length).toBe(1);
  });
});
