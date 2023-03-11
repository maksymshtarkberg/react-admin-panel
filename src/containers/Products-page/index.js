import React, { useEffect, useState } from "react";
import DataTable from "../../components/Products-table";
import BasicModal from "../../components/Modal-form";
import logo from "../../assets/logo.svg";
import "./styles.css";
import { API_URL } from "../../constants";

function ProductsPage() {
  const [tableData, setTableData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState("");
  const [Cathegory, setCathegory] = useState("");
  const [Quantity, setQuantity] = useState([]);
  const [Price, setPrice] = useState([]);

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

  const addItem = async (event) => {
    event.preventDefault();
    await fetch(`${API_URL}/products`, {
      method: "POST",
      body: JSON.stringify({ name, Cathegory, Quantity, Price, done: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsLoaded(false);
    setName("");
    setCathegory("");
    setQuantity("");
    setPrice("");
  };

  const prodEdit = () => {};

  return (
    <div>
      <div className="login__sing-posit">
        <img src={logo} className="login__logo"></img>
        <span className="login__text-sign">ROZETKA</span>
      </div>
      <BasicModal
        name={name}
        setName={setName}
        Cathegory={Cathegory}
        setCathegory={setCathegory}
        Quantity={Quantity}
        setQuantity={setQuantity}
        Price={Price}
        setPrice={setPrice}
        addProduct={addItem}
        text="Prewiew"
        text1="Add Products"
      />
      <DataTable tableData={tableData} />
    </div>
  );
}

export default ProductsPage;
