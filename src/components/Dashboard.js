import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const gridStyles = {
  width: "40vw",
  height: "70vh",
};

export const Dashboard = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch(
      "https://rmimgblob.blob.core.windows.net/interviewdata/SampleRockData.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRowData(data);
      });
  }, []);

  return (
    <div className="ag-theme-balham" style={gridStyles}>
      <AgGridReact rowData={rowData} rowSelection="multiple">
        <AgGridColumn
          field="date"
          filter={true}
          // checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn field="city" filter={true}></AgGridColumn>
        <AgGridColumn field="value" filter={true}></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
