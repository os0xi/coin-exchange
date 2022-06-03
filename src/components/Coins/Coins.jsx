import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const TD = styled.td`
  border: 1px solid white;
  width: 25vh;
`;

export default function Coins(props) {
  const handleClick = (event) => {
    event.preventDefault();
    props.handleCoinRefresh(props.ticker);
  };
  return (
    <tr>
      <TD>{props.name}</TD>
      <TD>{props.ticker}</TD>
      <TD>${props.price}</TD>
      <TD>
        <form action="#" method="GET">
          <button onClick={handleClick}>Refresh</button>
        </form>
      </TD>
      <TD>${props.balance}</TD>
    </tr>
  );
}

Coins.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
