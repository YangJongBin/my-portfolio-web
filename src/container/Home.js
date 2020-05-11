import React, { Component } from 'react';
import { Container, Button } from '@material-ui/core';

export default class Home extends Component {
  render() {
    const { innerHeight } = window;

    return <Container maxWidth style={{ height: innerHeight }}></Container>;
  }
}
