import * as React from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const MuiModal = ({ opne, setOpen, itemsList, handleInputElements }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title "
        aria-describedby="modal-modal-description"
        className="rounded-full"
      >
        <Box sx={style}>
          <h2>Preview Form</h2>
          <Box className="grid grid-cols-1 lg:grid-cols-2">
            {itemsList?.map((item, i) => handleInputElements(item))}
          </Box>
          <div className="flex justify-end px-4">
            <Button
              variant="contained"
              color="success"
              onClick={() => handleClose()}
            >
              Ok
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
