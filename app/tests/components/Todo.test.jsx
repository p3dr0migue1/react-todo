import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import sinon from 'sinon';
import { assert, expect } from 'chai';

import Todo from 'Todo';

describe('Todo', () => {
  afterEach(() => {
    // restore the default sandbox here
    sinon.restore();
  });

  it('should exist', () => {
    expect(Todo).to.exist;
  });

  it('should call onToggle prop with id on click', () => {
    const todoData = {
      'id': 199,
      'text': 'Process accounting receipts',
      'completed': true,
    };
    const spy = sinon.spy();
    const todo = ReactTestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
    const $el = $(ReactDOM.findDOMNode(todo));

    ReactTestUtils.Simulate.click($el[0]);
    assert(spy.calledWith(todoData.id));
  });
});
