import { React } from "react";
import "./styles.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@mui/material";

const style_btn = {
  width: 200,
  bgcolor: "background.paper",
  color: "#05BC52",
  border: 0.5,
  borderColor: "#000000",
  pl: 4,
  "&:hover": {
    backgroundColor: "#D9D9D9",
  },
};

export default function BasicModal({ text, text1, setCreateModalOpen }) {
  return (
    <div className="modal__btn">
      <FaRegUser className="btn-user-icon" />
      <Button sx={style_btn} size="large">
        {text}
      </Button>
      <div className="modal__products-btn">
        <AiOutlinePlus className="btn-plus-icon" fontSize={24} />
        <Button
          sx={style_btn}
          size="large"
          onClick={() => setCreateModalOpen(true)}
        >
          {text1}
        </Button>
      </div>
    </div>
  );
}
