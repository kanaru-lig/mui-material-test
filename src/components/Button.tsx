import MuiButton, { type ButtonProps } from "@mui/material/Button";

export function Button(props: ButtonProps) {
  return <MuiButton sx={{ boxShadow: "none", borderRadius: 2 }} {...props} />;
}
