import React, { Fragment } from "react";
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
    field: "name",
    headerName: "Name",
    width: 130,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Quantity",
    headerName: "Quantity",
    width: 140,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Price",
    headerName: "Price (₴)",
    sortable: true,

    width: 160,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "",
    headerName: "",
    width: 160,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "super-app-theme--header",

    renderCell: (tableData) => {
      return (
        <Fragment>
          <div style={{ display: "flex" }}>
            <ModalDelete tableData={tableData} />
          </div>
        </Fragment>
      );
    },
  },
];

const DataTable = ({ tableData }) => {
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
        rows={tableData}
        columns={columns}
        pageSize={4}
        getRowClassName={(param) => {
          return param.indexRelativeToCurrentPage % 2 === 0
            ? "stripe"
            : "stripe-hover";
        }}
        rowsPerPageOptions={[3]}
        // checkboxSelection
      />
    </div>
  );
};

export default DataTable;
