import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import RozetkaLogo from "../../components/Logo-rozetka";
import ProductDescription from "../../components/Product-detailed-descript";
import { useParams } from "react-router-dom";
import "./styles.css";

const DetailPreview = () => {
  const [prodData, setprodData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { CurrentProd } = useParams();

  useEffect(() => {
    if (!isLoaded) {
      getProduct();
    }
  }, [isLoaded]);

  const getProduct = async () => {
    const response = await fetch(`${API_URL}/products/${CurrentProd}`);
    const data = await response.json();
    setprodData(data);
    setIsLoaded(true);
  };

  return (
    <>
      <div className="logo-description">
        <RozetkaLogo />
      </div>

      <ProductDescription product={prodData} />
    </>
  );
};

export default DetailPreview;
