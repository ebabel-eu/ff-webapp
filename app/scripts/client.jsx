import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout.jsx';
import Content from './components/Content.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute name='Index' component={Content}/>
        <Route path='inventory' name='Inventory' component={Content}/>
        <Route path='character' name='Character' component={Content}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
