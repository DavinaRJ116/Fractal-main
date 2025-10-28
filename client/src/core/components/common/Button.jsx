import React from "react";
import { Button as MuiButton } from "@mui/material";

const CommonButton = ({
  children,
  label,
  onClick,
  color = "primary",
  variant = "contained",
  sx = {},
  ...rest
}) => {
  return (
    <MuiButton
      {...rest} // spread first so type, disabled, etc., are preserved
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 600,
        px: 3,
        py: 1,
        ...sx, // allow page-level overrides
      }}
    >
      {label || children}
    </MuiButton>
  );
};

export default CommonButton;
