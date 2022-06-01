import React from "react";
import "./App.css";
import Coin from "./components/Coins/Coins";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <img
          src="https://imgs.search.brave.com/-rLo6GB3uMWXa_2Wwn_2V-zPN1WKzvbBDUs8JfIF6Iw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jcnlw/dG9sb2dvcy5jYy9s/b2dvcy9zb2xhbmEt/c29sLWxvZ28ucG5n"
          className="App-logo"
          alt=""
        />
        <h1 className="app-title">Coin Exchange</h1>
      </header>
      <table className="coin-prices">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={30000.0} />
          <Coin name="Ethereum" ticker="ETH" price={2000} />
          <Coin name="Tether" ticker="USDT" price={1.0} />
          <Coin name="Ripple" ticker="XRP" price={0.4} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
