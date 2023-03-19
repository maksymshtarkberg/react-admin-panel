import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function DeleteConfirmationModal({
  productName,
  isOpen,
  onConfirm,
  onCancel,
}) {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onCancel}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle color="error">{"Delete product"}</DialogTitle>
        <CloseIcon
          sx={{
            cursor: "pointer",
            position: "absolute",
            left: "560px",
            top: "10px",
          }}
          onClick={onCancel}
        />
        <DialogContent>
          <DialogContentText
            sx={{ fontSize: 18 }}
            id="alert-dialog-slide-description"
          >
            Do you want to delete {productName} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ mr: 4 }} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            sx={{ mr: 4 }}
            onClick={onConfirm}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
