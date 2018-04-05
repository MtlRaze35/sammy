import React, { Component } from "react";
import styled from "styled-components";

const ActsContainer = styled.div`
  border-style: dashed;
  border: black;
`;

const ActButton = styled.button`
  color: blue;
`;

class Acts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ActsContainer>
        Acts!
        <ActButton>Russian Craddle</ActButton>
        <ActButton>Hand to Hand</ActButton>
      </ActsContainer>
    );
  }
}

export default Acts;
