import React, { Fragment, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./styles.css";
import ModalDelete from "../Modal-delete";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Cathegory",
    headerName: "Cathegory",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Name",
    headerName: "Name",
    width: 130,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Quantity",
    headerName: "Quantity",
    type: "number",
    width: 140,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "fullName",
    headerName: "Price (₴)",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 160,
    headerClassName: "super-app-theme--header",

    valueGetter: (params) =>
      `${params.row.Cathegory || ""} ${params.row.Name || ""}`,
  },
  {
    field: "",
    headerName: "",
    width: 160,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "super-app-theme--header",

    renderCell: (params) => {
      return (
        <Fragment>
          <div style={{ display: "flex" }}>
            <ModalDelete />
          </div>
        </Fragment>
      );
    },
  },
];

const rows = [
  {
    id: 0,
    Name: "Snow",
    Cathegory: "Jon",
    Quantity: 35,
  },
  { id: 1, Name: "Lannister", Cathegory: "Cersei", Quantity: 42 },
  { id: 2, Name: "Lannister", Cathegory: "Jaime", Quantity: 45 },
  { id: 3, Name: "Stark", Cathegory: "Arya", Quantity: 16 },
  { id: 4, Name: "Targaryen", Cathegory: "Daenerys", Quantity: null },
  { id: 5, Name: "Melisandre", Cathegory: null, Quantity: 150 },
  { id: 6, Name: "Clifford", Cathegory: "Ferrara", Quantity: 44 },
  { id: 7, Name: "Frances", Cathegory: "Rossini", Quantity: 36 },
  { id: 8, Name: "Roxie", Cathegory: "Harvey", Quantity: 65 },
];

export default function DataTable() {
  return (
    <div className="products__table" style={{ height: 470, width: 832 }}>
      <h1 className="products__sign">Products</h1>
      <DataGrid
        hideFooterSelectedRowCount
        sx={{
          ".MuiDataGrid-columnHeader--moving": {
            backgroundColor: "#44b26f",
          },
          "& .super-app-theme--header": {
            backgroundColor: "rgba(14, 200, 111, 1)",
          },
        }}
        rows={rows}
        columns={columns}
        pageSize={4}
        getRowClassName={(param) => {
          return param.indexRelativeToCurrentPage % 2 === 0
            ? "stripe"
            : "stripe-hover";
        }}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
