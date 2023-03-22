import Typography from "@mui/material/Typography";
import check from "../../assets/PatchCheck.svg";
import arrow from "../../assets/Arrow.svg";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ProductDescription = ({ product }) => {
  const descriptionSentences =
    product && product.description ? product.description.split(". ") : [];
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="product_description">
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 32,
            lineHeight: "39px",
          }}
        >
          <img
            onClick={goBack}
            className="product_description-arrow"
            src={arrow}
          />
          {product.name}
        </Typography>

        <div className="product_description-box">
          <img className="preview_img-description" src={product.url} />
          <div className="product_description-availab">
            <div className="product_description-icon">
              <img src={check} />
              <Typography>Є в наявності</Typography>
            </div>
            <Typography
              sx={{
                ml: 5,
                mb: 2,
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
                ml: 5,
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 24,
                lineHeight: "29px",
              }}
            >
              {`Кількість: ${product.quantity}`}
            </Typography>
          </div>
        </div>
        <div className="product_description-text">
          <div className="product_description-sing">
            <Typography
              sx={{
                mr: 2,
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 32,
                lineHeight: "39px",
              }}
            >
              Опис
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 32,
                lineHeight: "39px",
              }}
              color="gray"
            >
              {product.name}
            </Typography>
          </div>
          {descriptionSentences.length &&
            descriptionSentences.map((sentence, index) => (
              <Typography
                key={index}
                sx={{
                  fontWeight: 500,
                  fontSize: 18,
                  color: index % 2 === 0 ? "black" : "gray",
                  mb: index % 2 !== 0 ? 2 : 0,
                }}
              >
                {sentence}
              </Typography>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
