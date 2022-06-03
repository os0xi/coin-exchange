import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  color: white;
  font-size: 2rem;
  text-align: left;
  padding: 1.5rem 0 1.5rem 5rem;
`;
export default function AccountBalance(props) {
  const buttonText = props.showBalance ? "Hide balance" : "Show balance";
  const balance = props.showBalance ? props.amount : "*****";
  const toggleBalance = () => {
    props.toggleBalance();
  };
  return (
    <Section>
      Balance: ${balance}
      <button onClick={toggleBalance}>{buttonText}</button>
    </Section>
  );
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};
