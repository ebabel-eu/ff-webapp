import React, { Component, PropTypes } from 'react';

export default class Content extends Component {
  render() {
    const { post } = this.props.params;
    const { name } = this.props.route;
    const pageTitle = post || name;
    return (
      <div className="content">
        <h1 className="page-title">{pageTitle}</h1>
      </div>
    );
  }
}

Content.propTypes = {
  route: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};
