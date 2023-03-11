import { React, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./styles.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@mui/material";
import FormPropsTextFields from "../Form-add_products";
import { RxCross2 } from "react-icons/rx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 430,
  hight: 532,
  bgcolor: "#D9D9D9",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

export default function BasicModal({
  text,
  text1,
  name,
  setName,
  addProduct,
  Cathegory,
  setCathegory,
  Quantity,
  setQuantity,
  Price,
  setPrice,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="modal__btn">
      <FaRegUser className="btn-user-icon" />
      <Button sx={style_btn} size="large">
        {text}
      </Button>
      <div className="modal__products-btn">
        <AiOutlinePlus className="btn-plus-icon" fontSize={24} />
        <Button sx={style_btn} size="large" onClick={handleOpen}>
          {text1}
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Add product</h1>
          <RxCross2 className="close-cross" onClick={handleClose} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <FormPropsTextFields
              Cathegory={Cathegory}
              setCathegory={setCathegory}
              Quantity={Quantity}
              setQuantity={setQuantity}
              Price={Price}
              setPrice={setPrice}
              name={name}
              setName={setName}
            />
          </Typography>

          <Typography id="modal-modal-description" sx={{ ml: 2, mt: 3 }}>
            <Button
              onClick={handleClose}
              sx={{ ml: 17, mr: 3 }}
              variant="outlined"
              color="error"
            >
              Cancel
            </Button>
            <Button
              onClick={addProduct}
              type="submit"
              variant="contained"
              color="success"
            >
              Submit
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
