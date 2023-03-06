import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import FormPropsTextFields from "../Form-add_products";

function ModalEdit() {
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Edit product</h1>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <FormPropsTextFields />
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
            <Button variant="contained" color="success">
              Submit
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalEdit;
