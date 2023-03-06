import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import "./styles.css";

import TextareaAutosize from "@mui/base/TextareaAutosize";

function EmptyTextarea() {
  return (
    <TextareaAutosize
      aria-label="empty textarea"
      label="Description"
      style={{ width: 361, height: 117 }}
    />
  );
}

function FormPropsTextFields() {
  const styles = (theme) => ({
    tr: {
      borderColor: "#f1f1f1",
      "&:hover": {
        background: "#44B26F",
      },
    },
  });

  return (
    <Box
      className="form__add-products"
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: 360,
          backgroundColor: "#FFFFFF",
          borderRadius: 1,
        },
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="outlined-required" label="Cathegory" />

        <TextField required id="outlined-required" label="Name" />
        <TextField id="outlined-number" label="Quantity" type="number" shrink />
        <TextField id="outlined-number" label="Price(₴)" type="number" shrink />
        <FormControl sx={{ ml: 1 }}>
          <FormLabel>Description</FormLabel>
          <EmptyTextarea label="Description" />
        </FormControl>
      </div>
    </Box>
  );
}

export default FormPropsTextFields;
