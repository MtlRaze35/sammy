import React, { Component } from "react";
import styled from "styled-components";

const ImgContainer = styled.div``;
const Text = styled.h3``;

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ImgContainer>All the pics Here</ImgContainer>
        <Text> Blurb</Text>
      </div>
    );
  }
}

export default Media;
