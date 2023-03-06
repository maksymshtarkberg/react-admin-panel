import React from "react";
import DataTable from "../../components/Products-table";
import BasicModal from "../../components/Modal-form";
import logo from "../../assets/logo.svg";
import "./styles.css";

function ProductsPage() {
  return (
    <div>
      <div className="login__sing-posit">
        <img src={logo} className="login__logo"></img>
        <span className="login__text-sign">ROZETKA</span>
      </div>
      <BasicModal text="Prewiew" text1={"Add Products"} />
      <DataTable />
    </div>
  );
}

export default ProductsPage;
