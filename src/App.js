import React from "react";
import axios from "axios";
import "./App.css";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import CoinsList from "./components/CoinsList/CoinsList";
import Header from "./components/Header/Header";

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      // {
      //   name: "Bitcoin",
      //   ticker: "BTC",
      //   price: 30000,
      //   balance: 1,
      // },
      // {
      //   name: "Tether",
      //   ticker: "USDC",
      //   price: 1,
      //   balance: 10000,
      // },
      // {
      //   name: "Ethereum",
      //   ticker: "ETH",
      //   price: 2000,
      //   balance: 1,
      // },
      // {
      //   name: "Ripple",
      //   ticker: "XRP",
      //   price: 0.4,
      //   balance: 10,
      // },
      // {
      //   name: "Binance Coin",
      //   ticker: "BNB",
      //   price: 300,
      //   balance: 10,
      // },
    ],
  };
  async componentDidMount() {
    console.log("Main App Mounted");
    let coinsJson = await axios.get("https://api.coinpaprika.com/v1/coins");
    let paprikaCoins = coinsJson.data.slice(0, 10).map((coin) => ({
      key: coin.id,
      name: coin.name,
      ticker: coin.symbol,
      price: 0,
      balance: 0,
    }));
    this.setState({ coinData: paprikaCoins });
  }

  toggleBalance = () => {
    this.setState({ showBalance: !this.state.showBalance });
  };

  handleCoinRefresh = (ticker) => {
    const found = this.state.coinData.find(
      (element) => element.ticker === ticker
    );
    let newCoinData = this.state.coinData.map(function (values) {
      let newValues = { ...values };
      if (found.ticker === values.ticker) {
        const randomPercentage = 0.994 + Math.random() * 0.01;

        newValues.price += randomPercentage;
        console.log(newValues.price);
      }
      return newValues;
    });
    this.setState({ coinData: newCoinData });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <AccountBalance
          amount={this.state.balance}
          toggleBalance={this.toggleBalance}
          showBalance={this.state.showBalance}
        />
        <CoinsList
          coins={this.state.coinData}
          handleCoinRefresh={this.handleCoinRefresh}
          showBalance={this.state.showBalance}
        />
      </div>
    );
  }
}

export default App;
