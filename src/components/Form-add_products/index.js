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

function FormPropsTextFields({
  name,
  setName,
  Cathegory,
  setCathegory,
  Quantity,
  setQuantity,
  Price,
  setPrice,
}) {
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
      <TextField
        required
        id="outlined-required"
        label="Cathegory"
        value={Cathegory}
        onChange={(event) => setCathegory(event.target.value)}
      />

      <TextField
        required
        id="outlined-required"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-number"
        label="Quantity"
        type="number"
        value={Quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <TextField
        id="outlined-number"
        label="Price(₴)"
        type="number"
        value={Price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <FormControl sx={{ ml: 1 }}>
        <FormLabel>Description</FormLabel>
        <EmptyTextarea label="Description" />
      </FormControl>
    </Box>
  );
}

export default FormPropsTextFields;
