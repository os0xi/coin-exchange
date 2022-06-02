import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const TD = styled.td`
  border: 1px solid white;
  width: 25vh;
`;

export default class Coins extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {}
  render() {
    return (
      <tr>
        <TD>{this.props.name}</TD>
        <TD>{this.props.ticker}</TD>
        <TD>${this.state.price}</TD>
        <TD>
          <form action="#" method="GET">
            <button onClick={this.handleClick}>Refresh</button>
          </form>
        </TD>
      </tr>
    );
  }
}
Coins.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
