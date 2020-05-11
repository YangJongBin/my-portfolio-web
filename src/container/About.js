import React, { Component } from 'react';

export default class about extends Component {
  render() {
    const { innerHeight } = window;

    return <div style={{ height: innerHeight }}></div>;
  }
}
