import React from "react";
import AccountBalance from "../AccountBalance/AccountBalance";
import AirdropButton from "../../AirdropButton/AirdropButton";

export default function AccountButtons(props) {
  return (
    <>
      <AccountBalance
        amount={props.balance}
        toggleBalance={props.toggleBalance}
        showBalance={props.showBalance}
      />
    </>
  );
}
