import React, { useState } from "react";
import { Modal, NextUIProvider, Text } from "@nextui-org/react";
import axios from "axios";
import "./App.css";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import CoinsList from "./components/CoinsList/CoinsList";
import Header from "./components/Header/Header";
import AirdropButton from "./AirdropButton/AirdropButton";
import AccountButtons from "./components/AccountButtons/AccountButtons";

function App() {
  const [errorModalVisible, seterrorVisible] = React.useState(false);
  const showerrorModalHandler = () => {
    seterrorVisible(true);
  };
  const closeerrorModalHandler = () => seterrorVisible(false);

  const [balance, setbalance] = useState(0);
  const [showBalance, setshowBalance] = useState(true);
  const [coinData, setcoinData] = useState([]);
  const setCoinsData = async () => {
    console.log("Main App Mounted");
    const coinsJson = await axios.get("https://api.coinpaprika.com/v1/coins");
    const pricesJson = await axios.get(
      "https://api.coinpaprika.com/v1/tickers"
    );
    const paprikaCoins = coinsJson.data.slice(0, 10).map((coin) => {
      const coinPrice = pricesJson.data.find(
        (coinPriceData) => coinPriceData.symbol === coin.symbol
      ).quotes.USD.price;
      return {
        key: coin.id,
        rank: coin.rank,
        name: coin.name,
        ticker: coin.symbol,
        price: Number(coinPrice.toFixed(4)),
        balance: 0,
      };
    });
    setcoinData(paprikaCoins);
  };
  React.useEffect(() => {
    if (coinData.length === 0) {
      setCoinsData();
    }
  });
  const toggleBalance = () => {
    setshowBalance(!showBalance);
    console.log(coinData);
  };
  const airdropMoney = () => {
    console.log("airdrop request");
    setbalance(balance + 1000);
    // let x = [...coinData];

    // x = x.map((coins) => {
    //   coins.balance += 1;
    // });
  };
  const handleCoinRefresh = async (ticker) => {
    const found = coinData.find((element) => element.ticker === ticker);
    const freshCoinDataPrice = await axios.get(
      `https://api.coinpaprika.com/v1/tickers/${found.key}`
    );
    const newPrice = freshCoinDataPrice.data.quotes.USD.price;
    console.log(newPrice);
    let newCoinData = coinData.map(function (coin) {
      let newCoin = coin;
      if (ticker === coin.ticker) {
        newCoin.price = Number(newPrice.toFixed(4));
      }
      return newCoin;
    });
    setcoinData(newCoinData);
  };
  const handleCoinTrade = (ticker, direction, amount) => {
    if (direction === "+") {
      let newCoinData = coinData.map((coin) => {
        let newCoin = coin;
        if (coin.ticker === ticker) {
          newCoin.balance = parseFloat(newCoin.balance + amount);
          setbalance(balance + coin.price * amount);
        }
        console.log(newCoin);

        return newCoin;
      });
      setcoinData(newCoinData);
    }

    if (direction === "-") {
      let newCoinData = coinData.map((coin) => {
        let newCoin = coin;
        if (coin.ticker === ticker) {
          if (coin.balance >= amount) {
            console.log(amount);
            newCoin.balance = parseFloat(newCoin.balance - amount);
            setbalance(balance - coin.price * amount);
          } else {
            showerrorModalHandler();
          }
        }
        console.log(newCoin);

        return newCoin;
      });
      setcoinData(newCoinData);
    }
  };
  return (
    <NextUIProvider>
      <div className="App">
        <Header />
        <Modal
          aria-labelledby="modal-title"
          open={errorModalVisible}
          onClose={closeerrorModalHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Not enough coins to sell
            </Text>
          </Modal.Header>
        </Modal>
        <AccountBalance
          amount={balance}
          toggleBalance={toggleBalance}
          showBalance={showBalance}
          airdropMoney={airdropMoney}
        />
        <CoinsList
          coins={coinData}
          handleCoinRefresh={handleCoinRefresh}
          handleCoinTrade={handleCoinTrade}
          showBalance={showBalance}
        />
      </div>
    </NextUIProvider>
  );
}

export default App;
