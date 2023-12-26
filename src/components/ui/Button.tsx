import MuiButton, { type ButtonProps } from "@mui/material/Button";

export function Button(props: ButtonProps) {
  const style = styles[props.variant || "contained"];
  return (
    <MuiButton
      sx={{
        boxShadow: "none",
        borderRadius: 2,
        ...style,
      }}
      {...props}
    />
  );
}

const styles = {
  contained: {
    "&:hover": { boxShadow: "none", backgroundColor: "primary.A100" },
    "&:active": { backgroundColor: "primary.A200" },
    "&:focus-visible": {
      boxShadow: "none",
      outline: 2,
      outlineColor: "#B78F00",
      outlineOffset: 1,
    },
  },
  outlined: {
    "&:hover": { boxShadow: "none", backgroundColor: "primary.200" },
    "&:active": { backgroundColor: "primary.300" },
    "&:focus-visible": {
      outline: 2,
      outlineColor: "#B78F00",
      outlineOffset: 1,
    },
  },
  text: {
    "&:hover": { boxShadow: "none", backgroundColor: "primary.200" },
    "&:active": { backgroundColor: "primary.300" },
    "&:focus-visible": {
      outline: 2,
      outlineColor: "#B78F00",
      outlineOffset: 1,
    },
  },
};
