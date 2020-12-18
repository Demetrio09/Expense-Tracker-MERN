import C from "./constants";

export default (state, action) => {
  switch (action.type) {
    case C.GET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case C.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case C.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case C.TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
