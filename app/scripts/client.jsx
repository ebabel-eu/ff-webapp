import config from '../config/default';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout.jsx';
import Content from './components/Content.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

require('../styles/main.css');

const routes = config.navSections.map((item, index) => {
  return (
    <Route key={index} path={item.url} name={item.name} component={Content}/>
  );
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute name='Index' component={Content}/>
        {routes}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
