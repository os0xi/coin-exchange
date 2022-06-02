import React, { Component } from "react";
import styled from "styled-components";

export default class Header extends Component {
  render() {
    return (
      <CoinExchangeHeader>
        <SpinningLogoImg src={logoURL} alt="" />
        <AppTitle>Coin Exchange</AppTitle>
      </CoinExchangeHeader>
    );
  }
}
const CoinExchangeHeader = styled.header`
  background-color: black;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const SpinningLogoImg = styled.img`
  height: 8rem;
  width: 8rem;
  pointer-events: none;
  margin: 1rem 3rem;
  animation: App-logo-spin infinite 20s linear;
`;
const AppTitle = styled.h1`
  font-size: 4rem;
`;
const logoURL =
  "https://imgs.search.brave.com/-rLo6GB3uMWXa_2Wwn_2V-zPN1WKzvbBDUs8JfIF6Iw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jcnlw/dG9sb2dvcy5jYy9s/b2dvcy9zb2xhbmEt/c29sLWxvZ28ucG5n";
