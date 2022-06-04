import React, { useState } from "react";
import { Button, Text, Modal, Input, Container } from "@nextui-org/react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Twitter from "../Twitter/Twitter";

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
  const [tradeVisible, settradeVisible] = useState(false);
  const [coinAmount, setcoinAmount] = useState(0);

  const openTradeHandler = () => {
    settradeVisible(true);
  };
  const closeTradeHandler = () => {
    settradeVisible(false);
  };
  const handleClick = (event) => {
    props.handleCoinRefresh(props.ticker);
    console.log(coinAmount);
  };
  const handleCoinTrade = (direction) => {
    props.handleCoinTrade(props.ticker, direction, coinAmount);
  };
  const handleCoinBuy = () => {
    props.handleCoinBuy(props.ticker);
  };
  return (
    <TR>
      <TD>
        {props.name}
        <Twitter id={props.id} />
      </TD>
      <TD>{props.ticker}</TD>
      <TD>${props.price}</TD>
      <TD>
        <Button
          onClick={openTradeHandler}
          bordered
          shadow
          size="xl"
          css={{
            border: "1px solid #00FFA3",
            background: "transparent",
            color: "white",
            "&:hover": {
              background: "#03E1FF",
            },
          }}
        >
          <Text color="white">Buy / Sell</Text>
        </Button>
        <Modal
          aria-labelledby="modal-title"
          open={tradeVisible}
          onClose={closeTradeHandler}
          // css={{
          //   background: "#03E1FF",
          // }}
        >
          <Modal.Header>
            <Input
              fullWidth
              size="xl"
              aria-label="Close"
              bordered
              labelRight={props.ticker}
              placeholder="Amount"
              onChange={(e) => {
                setcoinAmount(e.target.value);
                console.log(coinAmount);
              }}
              css={{
                background: "$white",
              }}
            />
          </Modal.Header>
          <Modal.Body>
            <Button
              size="xl"
              shadow
              css={{ background: "#00FFA3" }}
              onPress={(e) => {
                handleCoinTrade("+", coinAmount);
                closeTradeHandler();
              }}
            >
              <Text weight="light" color="red">
                Buy
              </Text>
            </Button>
            <Button
              size="xl"
              shadow
              css={{ background: "#DC1FFF" }}
              onPress={(e) => {
                handleCoinTrade("-", coinAmount);
                closeTradeHandler();
              }}
            >
              <Text weight="light" color="$white">
                Sell
              </Text>
            </Button>
          </Modal.Body>
        </Modal>
      </TD>
      <TD>
        <Container>
          <Text size="2rem " color="white">
            {props.balance}
          </Text>
          <Text color="white" size="0.7rem">
            {props.ticker}
          </Text>
        </Container>
      </TD>
      <TD>
        <Buttons>
          <form action="#" method="GET">
            <Button
              onPress={handleClick}
              size="xs"
              css={{
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
