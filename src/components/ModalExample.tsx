"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";

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
      >
        <div>
          <p className="py-4">aaa</p>
          <div className="space-y-2">
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{ width: "100%" }}
            >
              OK
            </Button>
            <Button onClick={handleClose} variant="text" sx={{ width: "100%" }}>
              キャンセル
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
