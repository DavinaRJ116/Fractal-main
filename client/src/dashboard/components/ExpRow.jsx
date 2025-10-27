// ExpRow.jsx
import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";

const ExpRow = ({ exp }) => (
  <TableRow>
    <TableCell sx={{ color: "white" }}>{exp.company}</TableCell>
    <TableCell sx={{ color: "white" }}>{exp.title}</TableCell>
    <TableCell sx={{ color: "white" }}>
      {new Date(exp.from).toLocaleDateString()} -{" "}
      {exp.current ? "Now" : new Date(exp.to).toLocaleDateString()}
    </TableCell>
    <TableCell>
      <Button variant="contained" color="error" size="small">
        Delete
      </Button>
    </TableCell>
  </TableRow>
);

export default ExpRow;
