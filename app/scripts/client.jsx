import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';
import Content from './components/Content.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, {
  main: {
    demo: 'lecuyp'
  }
});

console.log('getState', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute name='Index' component={Content}/>
        <Route path='articles(/:post)' name='Articles' component={Content}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
