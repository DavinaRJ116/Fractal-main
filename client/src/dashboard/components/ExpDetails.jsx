// ExpDetails.jsx
import React from "react";
import ExpRow from "./ExpRow";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ExpDetails = ({ experience }) => {
  if (!experience.length) return <p>No experience added yet.</p>;

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#1f2937" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Company</TableCell>
            <TableCell sx={{ color: "white" }}>Title</TableCell>
            <TableCell sx={{ color: "white" }}>Years</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {experience.map((exp) => (
            <ExpRow key={exp._id} exp={exp} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpDetails;
