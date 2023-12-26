"use client";

import MuiModal, { type ModalProps } from "@mui/material/Modal";

export function Modal(props: ModalProps) {
  return (
    <MuiModal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
      {...props}
    >
      <div className="bg-white p-4 flex-1 max-w-96 rounded-md h-fit">
        {props.children}
      </div>
    </MuiModal>
  );
}
