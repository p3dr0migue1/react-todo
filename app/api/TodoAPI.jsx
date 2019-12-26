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
  filterTodos: function (todos, showCompleted, searchText) {
    // filter by completed tasks
    let filteredTodos = todos;
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by text

    // sort todos with non-completed tasks first
    return filteredTodos;
  },
};
