import React from "react";
import "./App.css";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import CoinsList from "./components/CoinsList/CoinsList";
import Header from "./components/Header/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 30000,
        },
        {
          name: "Tether",
          ticker: "USDC",
          price: 1,
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 2000,
        },
        {
          name: "Ripple",
          ticker: "XRP",
          price: 0.4,
        },
        {
          name: "Binance Coin",
          ticker: "BNB",
          price: 300,
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AccountBalance amount={this.state.balance} />
        <CoinsList coins={this.state.coinData} />
      </div>
    );
  }
}

export default App;
