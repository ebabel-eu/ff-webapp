import config from '../../config/default';
import React, { Component, PropTypes } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { connect } from 'react-redux';

class Layout extends Component {
  static defaultProps = {
    appName: config.appName
  };
  static propTypes = {
    appName: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
    history: PropTypes.object
  };
  render () {
    console.log(this.props);
    const { children, appName, history } = this.props;
    return (
      <div>
        <Header appName={appName} history={history}/>
        <div className='container'>
          {children}
        </div>
        <Footer appName={appName}/>
      </div>
    );
  }
}

export default connect(state => ({
  main: state.main
}))(Layout);
