import React, { useEffect, useState } from "react";
import DataProductsTable from "../../components/Products-table";
import logo from "../../assets/logo.svg";
import "./styles.css";
import { API_URL } from "../../constants";

function ProductsPage() {
  const [tableData, setTableData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      getProducts();
    }
  }, [isLoaded]);

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    setTableData(data);
    setIsLoaded(true);
  };

  const editPoduct = async (product) => {
    await fetch(`${API_URL}/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsLoaded(false);
  };

  return (
    <div>
      <div className="login__sing-posit">
        <img src={logo} alt={"loading..."} className="login__logo"></img>
        <span className="login__text-sign">ROZETKA</span>
      </div>
      <DataProductsTable
        tableData={tableData}
        setTableData={setTableData}
        editPoduct={editPoduct}
      />
    </div>
  );
}

export default ProductsPage;
