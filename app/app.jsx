import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// local imports
import TodoApp from 'TodoApp';

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
// $(document).foundation();

// App CSS
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
