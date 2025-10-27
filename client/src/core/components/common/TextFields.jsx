import React from "react";
import { TextField } from "@mui/material";

const CommonTextFields = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  variant = "outlined",
  fullWidth = true,
  required = false,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      variant={variant}
      fullWidth={fullWidth}
      required={required}
      sx={{
        my: 1.5,
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
        },
      
      }}
      {...rest}
    />
  );
};

export default CommonTextFields;
