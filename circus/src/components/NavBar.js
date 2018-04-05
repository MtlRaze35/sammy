import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Button = styled.button``;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    console.log("hi");
  }

  render() {
    return (
      <Container>
        <Button>Home</Button>
        <Button> About </Button>
        <Button> Our Duo </Button>
        <Button> Videos </Button>
        <Button onClick={this.handleClick}> Contact </Button>
      </Container>
    );
  }
}

export default NavBar;
