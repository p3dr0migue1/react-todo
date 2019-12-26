import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import sinon from 'sinon';
import { assert, expect } from 'chai';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).to.exist;
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [{
        'id': 23,
        'text': 'Test all files',
        'completed': false,
      }];
      TodoAPI.setTodos(todos);
      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).to.deep.equal(todos);
    });

    it('should not set invalid todos array', () => {
      const badTodos = { 'a': 'b' };
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).to.be.null;
    })
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).to.deep.equal([]);
    });

    it('should return todos if valid array in localStorage', () => {
      const todos = [{
        'id': 23,
        'text': 'Test all files',
        'completed': false,
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).to.deep.equal(todos);
    });
  });
});
