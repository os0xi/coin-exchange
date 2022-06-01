import React, { Component } from "react";
import "./Coins.css";
import PropTypes from "prop-types";

export default class Coins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    console.log("refresh pressed");
    const randomPercentage = 0.994 + Math.random() * 0.01;
    this.setState((oldState) => ({ price: oldState.price * randomPercentage }));
  }
  render() {
    return (
      <tr className="coin-row">
        <td>{this.props.name}</td>
        <td>{this.props.ticker}</td>
        <td>${this.state.price}</td>
        <td>
          <form action="#" method="GET">
            <button onClick={this.handleClick}>Refresh</button>
          </form>
        </td>
      </tr>
    );
  }
}
Coins.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
