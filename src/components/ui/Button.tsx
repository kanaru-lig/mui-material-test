import MuiButton, { type ButtonProps } from "@mui/material/Button";

export function Button(props: ButtonProps) {
  const eventStyle = eventStyles[props.variant || "contained"];
  const sizeStyle = sizeStyles[props.size || "medium"];
  return (
    <MuiButton
      sx={{
        boxShadow: "none",
        fontWeight: 700,
        ...eventStyle,
        ...sizeStyle,
      }}
      size="medium"
      {...props}
    />
  );
}

const sizeStyles = {
  large: {
    borderRadius: 2,
    py: 1,
    px: 4,
  },
  medium: {
    borderRadius: 2,
    py: 0.75,
    px: 2,
  },
  small: {
    borderRadius: 1.5,
    py: 0.5,
    px: 1,
  },
};

const eventStyles = {
  contained: {
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "primary.A100",
      textDecorationColor: "#fff",
      textDecorationLine: "underline",
    },
    "&:active": {
      backgroundColor: "primary.A200",
      textDecorationColor: "#fff",
      textDecorationLine: "underline",
    },
    "&:focus-visible": {
      boxShadow: "none",
      outline: 2,
      outlineColor: "#B78F00",
      outlineOffset: 1,
      textDecorationColor: "#fff",
      textDecorationLine: "underline",
    },
    "&:disabled": {
      backgroundColor: "#AEAEB0",
    },
  },
  outlined: {
    color: "primary.A100",
    borderColor: "primary.A100",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "primary.200",
      textDecorationColor: "primary.A100",
      textDecorationLine: "underline",
    },
    "&:active": {
      backgroundColor: "primary.300",
      textDecorationColor: "primary.A100",
      textDecorationLine: "underline",
    },
    "&:focus-visible": {
      outline: 2,
      outlineColor: "#B78F00",
      outlineOffset: 1,
      textDecorationColor: "primary.A100",
      textDecorationLine: "underline",
    },
  },
  text: {
    color: "primary.A100",
    textDecorationColor: "primary.A100",
    textDecorationLine: "underline",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "primary.200",
      textDecorationColor: "primary.A100",
      textDecorationLine: "underline",
    },
    "&:active": {
      backgroundColor: "primary.300",
      textDecorationColor: "primary.A100",
      textDecorationLine: "underline",
    },
    "&:focus-visible": {
      outline: 2,
      outlineColor: "#B78F00",
      outlineOffset: 1,
      textDecorationColor: "primary.A100",
      textDecorationLine: "underline",
    },
  },
};
