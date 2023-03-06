import { React, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalDelete() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <BsFillPencilFill
        style={{
          marginLeft: 30,
          marginRight: 40,
          cursor: "pointer",
          fontSize: 24,
        }}
        onClick={handleOpen}
      >
        Open modal
      </BsFillPencilFill>
      <AiFillDelete
        style={{ cursor: "pointer", fontSize: 24 }}
        onClick={handleOpen}
      >
        Open modal
      </AiFillDelete>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are u sure you want to delete this product?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button
              onClick={handleClose}
              sx={{ ml: 17, mr: 3 }}
              variant="outlined"
              color="error"
            >
              Cancel
            </Button>
            <Button variant="contained" color="success">
              Delete
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}