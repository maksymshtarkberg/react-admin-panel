import React, { useState, useEffect } from "react";
import ProductsCards from "../../components/Product-cards";
import { API_URL } from "../../constants";
import "./styles.css";
import RozetkaLogo from "../../components/Logo-rozetka";

const style = {};

function PreviewPage() {
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
  return (
    <div className="container_preview" style={style}>
      <RozetkaLogo />
      <div className="preview_cards">
        {tableData.map((product) => (
          <ProductsCards id={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default PreviewPage;
