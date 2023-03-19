import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import basket from "../../assets/basket.svg";
import "./styles.css";

function ProductsCards({ product }) {
  return (
    <div className="preview_card-size">
      <Card sx={{ pl: 3, pr: 3, mt: 1.5, display: "block" }}>
        <CardContent>
          <img className="preview_img" src={product.url} />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 20,
              lineHeight: "19px",
              fontWeight: 500,
              fontStyle: "normal",
              paddingTop: 3,
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
              pt: 3,
              fontSize: 24,
              lineHeight: "29px",
              fontWeight: 500,
              fontStyle: "normal",
            }}
            color="#FC5B00"
          >
            {product.price + " " + "₴"}
          </Typography>
          <Typography
            sx={{
              float: "right",
              pt: 3,
              fontSize: 15,
              lineHeight: "18px",
              fontWeight: 500,
              fontStyle: "normal",
            }}
            color="#000000"
            variant="body2"
          >
            {"Кількість: " + product.quantity}
          </Typography>
        </CardContent>
        <CardActions
          className="preview_btn"
          sx={{ display: "block", whiteSpace: "nowrap", pt: 5 }}
        >
          <Button
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
