import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { assert, expect } from 'chai';
import sinon from 'sinon';
import $ from 'jquery';

// local imports
import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
  afterEach(() => {
    // restore the default sandbox here
    sinon.restore()
  });

  it('should exist', () => {
    expect(TodoSearch).to.exist;
  });

  it('should call onSearch with entered input text', () => {
    const searchText = 'Email';
    const spy = sinon.spy();
    const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    const $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.searchText.value = searchText;
    ReactTestUtils.Simulate.change(todoSearch.refs.searchText);

    assert(spy.calledWith(searchText, false));
  });

  it('should call onSearch with proper checked value', () => {
    const spy = sinon.spy();
    const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    const $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.showCompleted.checked = true;
    ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted);

    assert(spy.calledWith('', true));
  });
});
