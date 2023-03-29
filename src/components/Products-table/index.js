import "./styles.css";
import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  TextareaAutosize,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import BasicModal from "../Modal-form";
import { API_URL } from "../../constants";
import DeleteConfirmationModal from "../Modal-delete";

const DataProductsTable = ({ tableData, setTableData, editPoduct }) => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleCreateNewRow = async (values) => {
    tableData.push(values);
    setTableData([...tableData]);
    await fetch(`${API_URL}/products`, {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        quantity: +values.quantity,
        cathegory: values.cathegory,
        price: +values.price,
        description: values.description,
        done: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      //send/receive api updates here, then refetch or update local table data for re-render
      await editPoduct({
        id: +row.original.id,
        name: values.name,
        cathegory: values.cathegory,
        quantity: +values.quantity,
        price: +values.price,
        done: true,
        description: values.description,
      });
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(async (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  }, []);

  const handleConfirmDelete = async () => {
    if (selectedRow) {
      const productId = tableData[selectedRow.index].id;
      await fetch(`${API_URL}/products/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Remove the deleted product from the local state
      const updatedTableData = [...tableData];
      updatedTableData.splice(selectedRow.index, 1);
      setTableData(updatedTableData);
      setSelectedRow(null);
    }
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setSelectedRow(null);
    setIsModalOpen(false);
  };

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid = true;
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false,
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: "cathegory",
        header: "Cathegory",
        enableColumnOrdering: false,
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),

          placeholder: "Cathegory",
        }),
      },
      {
        accessorKey: "name",
        header: "Name",
        enableColumnOrdering: false,
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),

          placeholder: "Name",
        }),
      },

      {
        accessorKey: "price",
        header: "Price (₴)",
        enableColumnOrdering: false,
        size: 80,

        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),

          type: "number",
          placeholder: "Price (₴)",
        }),
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        enableColumnOrdering: false,
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),

          type: "number",
          placeholder: "Quantity",
        }),
      },
      {
        accessorKey: "description",
        header: "Description",
        enableColumnOrdering: false,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <BasicModal
        text="Prewiew"
        text1="Add Products"
        setCreateModalOpen={setCreateModalOpen}
      />
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        productName={selectedRow ? selectedRow.getValue("name") : ""}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        initialState={{ columnVisibility: { description: false } }}
        editingMode="modal" //default
        enableColumnOrdering
        enableGlobalFilter={false}
        enableFilterMatchHighlighting={false}
        enableEditing
        enableColumnActions={false}
        enableTopToolbar={true}
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      />

      <CreateNewProduct
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewProduct = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce(
      (acc, column) => {
        acc[column.accessorKey ?? ""] = "";
        return acc;
      },
      { description: "" }
    )
  );

  const handleSubmit = () => {
    //put your validation logic here

    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ mb: 4 }} textAlign="center">
        Add New Product
      </DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <CloseIcon
            sx={{
              cursor: "pointer",
              position: "absolute",
              left: "400px",
              top: "20px",
            }}
            onClick={onClose}
          />
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "400px", sm: "360px", md: "400px" },
              gap: "1rem",
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(event) =>
                  setValues({
                    ...values,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            ))}
            {/* Description
            <TextareaAutosize
              value={values.description}
              minRows={6}
              onChange={(event) =>
                setValues({
                  ...values,
                  description: event.target.value,
                })
              }
            /> */}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button color="success" onClick={handleSubmit} variant="contained">
          Add New Product
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DataProductsTable;
