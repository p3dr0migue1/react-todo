import $ from 'jquery';

export default {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (error) {
      console.log(error);
    }

    return $.isArray(todos) ? todos : []; 
  },
};
