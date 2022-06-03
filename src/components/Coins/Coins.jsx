import React from "react";
import { Button } from "@nextui-org/react";
import styled from "styled-components";
import PropTypes from "prop-types";
const TD = styled.td`
  width: 25vh;
  padding: 1rem;
`;

const TR = styled.tr`
  border: 1px solid red;
`;
export default function Coins(props) {
  const handleClick = (event) => {
    props.handleCoinRefresh(props.ticker);
  };
  return (
    <TR>
      <TD>{props.name}</TD>
      <TD>{props.ticker}</TD>
      <TD>${props.price}</TD>
      <TD>
        <form action="#" method="GET">
          <Button
            shadow
            onPress={handleClick}
            css={{
              background: "#DC1FFF",
              "&:hover": {
                background: "#03E1FF",
              },
            }}
          >
            Refresh
          </Button>
        </form>
      </TD>
      <TD>${props.balance}</TD>
    </TR>
  );
}

Coins.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
