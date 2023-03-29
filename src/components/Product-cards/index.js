import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import basket from "../../assets/basket.svg";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function ProductsCards({ id, product }) {
  const [CurrentProd, setCurrentProd] = useState(id);
  const navigate = useNavigate();

  function handleCurrentProd() {
    setCurrentProd(product.id);
    navigate(`/preview/${CurrentProd}`);
  }

  return (
    <div className="preview_card-size">
      <Card
        sx={{ pl: 3, pr: 3, mt: 1.6, display: "flex", flexDirection: "column" }}
      >
        <CardContent
          sx={{
            pb: 0,
          }}
        >
          <img className="preview_img" src={product.url} />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 20,
              lineHeight: "19px",
              fontWeight: 500,
              fontStyle: "normal",
              paddingTop: 1,
            }}
            color="#000000"
            variant="h5"
            component="div"
          >
            {product.name}
          </Typography>
          <Typography
            className="preview_price"
            sx={{
              mb: 1.5,
              float: "left",
              pt: 2,
              fontSize: 24,
              lineHeight: "29px",
              fontWeight: 500,
              fontStyle: "normal",
            }}
            color="#FC5B00"
          >
            {`${product.price} ₴`}
          </Typography>
          <Typography
            sx={{
              float: "right",
              pt: 2,
              fontSize: 15,
              lineHeight: "18px",
              fontWeight: 500,
              fontStyle: "normal",
            }}
            color="#000000"
            variant="body2"
          >
            {`Кількість: ${product.quantity}`}
          </Typography>
        </CardContent>
        <CardActions
          className="preview_btn"
          sx={{ display: "block", whiteSpace: "nowrap" }}
        >
          <Button
            onClick={() => handleCurrentProd(id)}
            size="small"
            color="success"
            sx={{
              fontSize: 15,
              lineHeight: "18px",
              fontWeight: 500,
              fontStyle: "normal",
            }}
          >
            <img className="logo_basket" src={basket}></img> Готовий до
            відправки
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductsCards;
