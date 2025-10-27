// AddEdu.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEducationAction } from "../../redux/action/profile.action";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  FormControlLabel,
  Checkbox,
  Box
} from "@mui/material";

const AddEdu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [edu, setEdu] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEdu((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addEducationAction(edu)).unwrap();
      console.log("Education added successfully");
      navigate("/dashboard");
    } catch (err) {
      console.error("Failed to add education:", err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Add Your Education
      </Typography>
      <Typography variant="body1" gutterBottom>
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, or college you have attended
      </Typography>
      <Typography variant="body2" gutterBottom>* = required field</Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Stack spacing={2}>
          <TextField
            label="* School or Bootcamp"
            name="school"
            value={edu.school}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="* Degree or Certificate"
            name="degree"
            value={edu.degree}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Field Of Study"
            name="fieldofstudy"
            value={edu.fieldofstudy}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="From Date"
            name="from"
            type="date"
            value={edu.from}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={edu.current}
                onChange={handleChange}
                name="current"
              />
            }
            label="Current School or Bootcamp"
          />

          <TextField
            label="To Date"
            name="to"
            type="date"
            value={edu.to}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            disabled={edu.current}
          />

          <TextField
            label="Program Description"
            name="description"
            value={edu.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />

          <Stack direction="row" spacing={2} mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button variant="outlined" onClick={() => navigate("/dashboard")}>
              Go Back
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default AddEdu;
