import React, { Component, PropTypes } from 'react';

export default class Content extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
  };
  render () {
    const { post } = this.props.params;
    const { name } = this.props.route;
    const pageTitle = post || name;
    return (
      <div className='content'>
        <h1>{pageTitle}</h1>
      </div>
    );
  }
}
