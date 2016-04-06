import React from 'react';
import { Component } from 'react';

export default class App extends Component {
	//need this.props.children to render the nested routes.
  render() {
    return (
      <div>
      	{this.props.children}
      </div>

    );
  }
}
