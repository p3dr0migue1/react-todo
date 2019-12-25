import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import sinon from 'sinon';
import { assert, expect } from 'chai';

// local imports
import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  afterEach(() => {
    // restore the default sandbox here
    sinon.restore();
  });

  it('should exist', () => {
    expect(AddTodo).to.exist;
  });

  it('should call onAddTodo prop with valid data', () => {
    const todoText = 'Christmas shopping';
    const spy = sinon.spy();
    const addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    assert(spy.calledWith(todoText));
  });

  it('should not call onAddTodo prop when invalid input', () => {
    const todoText = '';
    const spy = sinon.spy();
    const addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    assert(spy.notCalled);
  });
});
