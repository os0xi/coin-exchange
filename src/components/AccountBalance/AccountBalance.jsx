import PropTypes from "prop-types";
import React from "react";
import { Button } from "@nextui-org/react";
import styled from "styled-components";

const Section = styled.section`
  color: white;
  font-size: 2rem;
  text-align: left;
  padding: 1.5rem 0 1.5rem 5rem;
  display: flex;
  flex-direction: column;
`;
const ButtonsDiv = styled.div`
  display: flex;
`;
export default function AccountBalance(props) {
  const buttonText = props.showBalance ? "Hide balance" : "Show balance";
  const balance = props.showBalance ? props.amount : "*****";
  const toggleBalance = () => {
    props.toggleBalance();
  };
  const airdropMoney = () => {
    props.airdropMoney();
  };
  return (
    <Section>
      Balance: ${balance}
      <ButtonsDiv>
        <Button
          shadow
          onPress={toggleBalance}
          css={{
            background: "#000000",
            marginTop: "2rem",
          }}
        >
          {buttonText}
        </Button>
        <Button
          shadow
          onPress={airdropMoney}
          bordered
          css={{
            // background: "#00FFA3",
            color: "$white",
            marginLeft: "2rem",
            marginTop: "2rem",
            fontWeight: "lighter",
          }}
        >
          💥 Airdrop 🚁
        </Button>
      </ButtonsDiv>
    </Section>
  );
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};
