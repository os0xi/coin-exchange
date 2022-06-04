import React from "react";
import { Button, Text } from "@nextui-org/react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TD = styled.td`
  width: 25vh;
  padding: 1rem;
`;
const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;
const TR = styled.tr`
  border: 1px solid red;
`;

export default function Coins(props) {
  const handleClick = (event) => {
    props.handleCoinRefresh(props.ticker);
  };
  const handleCoinTrade = (direction) => {
    props.handleCoinTrade(props.ticker, direction);
  };
  const handleCoinBuy = () => {
    props.handleCoinBuy(props.ticker);
  };
  return (
    <TR>
      <TD>{props.name}</TD>
      <TD>{props.ticker}</TD>
      <TD>${props.price}</TD>
      <TD>
        <Buttons>
          <Button
            size="xs"
            css={{ background: "#00FFA3" }}
            onPress={(e) => {
              handleCoinTrade("+");
            }}
          >
            <Text weight="bold" color="red">
              +
            </Text>
          </Button>
          <Button
            size="xs"
            css={{ background: "#DC1FFF" }}
            onPress={(e) => {
              handleCoinTrade("-");
            }}
          >
            <Text weight="bold" color="$white">
              -
            </Text>
          </Button>
        </Buttons>
      </TD>
      <TD>${props.balance}</TD>
      <TD>
        <Buttons>
          <form action="#" method="GET">
            <Button
              bordered
              onPress={handleClick}
              css={{
                background: "transparent",
                color: "white",
                "&:hover": {
                  background: "#03E1FF",
                },
              }}
            >
              Refresh
            </Button>
          </form>
        </Buttons>
      </TD>
    </TR>
  );
}

Coins.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
