import React, { Component } from "react";
import Coin from "../Coins/Coins";

export default class CoinsList extends Component {
  render() {
    return (
      <table className="coin-prices">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.coins.map(({ name, ticker, price }) => (
            <Coin key={ticker} name={name} ticker={ticker} price={price} />
          ))}
        </tbody>
      </table>
    );
  }
}
