import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.section`
  color: white;
  font-size: 2rem;
  text-align: left;
  padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
  constructor(props) {
    super(props);
    this.toggleBalance = this.toggleBalance.bind(this);
  }
  toggleBalance() {
    this.props.toggleBalance();
  }

  render() {
    const buttonText = this.props.showBalance ? "Hide balance" : "Show balance";
    const balance = this.props.showBalance ? this.props.amount : "*****";
    return (
      <Section>
        Balance: ${balance}
        <button onClick={this.toggleBalance}>{buttonText}</button>
      </Section>
    );
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};
