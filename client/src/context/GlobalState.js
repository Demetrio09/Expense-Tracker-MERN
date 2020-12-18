import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";
import axios from "axios";
import C from "./constants";

// Setting the initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: C.GET_TRANSACTIONS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: C.TRANSACTION_ERROR,
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: C.DELETE_TRANSACTION,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: C.TRANSACTION_ERROR,
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("api/v1/transactions", transaction, config);

      dispatch({
        type: C.ADD_TRANSACTION,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: C.TRANSACTION_ERROR,
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        error: state.error,
        loading: state.loading,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
