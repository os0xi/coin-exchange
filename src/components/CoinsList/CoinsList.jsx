import React from "react";
import Coin from "../Coins/Coins";
export default function CoinsList(props) {
  return (
    <table className="coin-prices">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Trade</th>
          <th>Balance</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.coins.map(({ name, ticker, price, balance }) => {
          const balanceToggled = props.showBalance ? balance : "*****";
          return (
            <Coin
              key={ticker}
              name={name}
              ticker={ticker}
              price={price}
              balance={balanceToggled}
              handleCoinRefresh={props.handleCoinRefresh}
              handleCoinTrade={props.handleCoinTrade}
            />
          );
        })}
      </tbody>
    </table>
  );
}
