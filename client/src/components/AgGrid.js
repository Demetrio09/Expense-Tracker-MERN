import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

// ag-grid
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import "ag-grid-enterprise";

function AgGrid() {
  const { transactions, getTransactions } = useContext(GlobalContext);

  const columnDefs = [
    {
      headerName: "Transaction",
      field: "transaction",
      sortable: true,
      filter: true,
      rowGroup: true,
    },
    { headerName: "Amount", field: "amount", sortable: true, filter: true },
  ];

  const rowData = transactions.map((item) => ({
    transaction: item.text,
    amount: item.amount,
  }));

  const autoGroupDef = {
    headerName: "Transaction",
    field: "transaction",
    cellRendererParams: {
      checkbox: true,
    },
  };

  //   console.log(rowData);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className='ag-theme-balham'
      style={{
        width: 600,
        height: 600,
      }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection='multiple'
        autoGroupColumnDef={autoGroupDef}
        groupSelectsChildren={true}
      />
    </div>
  );
}

export default AgGrid;
