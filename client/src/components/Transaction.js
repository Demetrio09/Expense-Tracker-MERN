import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function ({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li
      className={transaction.amount < 0 ? "minus" : "plus"}
      key={transaction.id}
    >
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className='delete-btn'
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
}