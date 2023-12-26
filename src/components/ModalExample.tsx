"use client";

import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Button } from "./ui/Button";

export function ModalExample() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <div className="bg-white p-4 flex-1 max-w-96 rounded-md h-fit">
          <p className="">aaa</p>
        </div>
      </Modal>
    </div>
  );
}
