import React, { useEffect, useState } from "react";
import Example from "../../components/Products-table";
import logo from "../../assets/logo.svg";
import "./styles.css";
import { API_URL } from "../../constants";

function ProductsPage() {
  const [tableData, setTableData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState("");
  const [Cathegory, setCathegory] = useState("");
  const [Quantity, setQuantity] = useState(null);
  const [Price, setPrice] = useState(null);

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
    console.log(product);
  };

  return (
    <div>
      <div className="login__sing-posit">
        <img src={logo} alt={"loading..."} className="login__logo"></img>
        <span className="login__text-sign">ROZETKA</span>
      </div>
      <Example
        setName={setName}
        setCathegory={setCathegory}
        setQuantity={setQuantity}
        setPrice={setPrice}
        name={name}
        Cathegory={Cathegory}
        Quantity={Quantity}
        Price={Price}
        // addProduct={addProduct}
        // addItem={addItem}

        tableData={tableData}
        setTableData={setTableData}
        editPoduct={editPoduct}
        setIsLoaded={setIsLoaded}
      />
    </div>
  );
}

export default ProductsPage;
