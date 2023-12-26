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
      <div className="bg-white p-4 flex-1 max-w-lg rounded-md h-fit md:py-10 md:px-14">
        {props.children}
      </div>
    </MuiModal>
  );
}
