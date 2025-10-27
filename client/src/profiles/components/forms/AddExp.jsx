// AddExp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addExperienceAction } from "../../redux/action/profile.action";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";

const AddExp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [exp, setExp] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExp((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addExperienceAction(exp)).unwrap();
      console.log("Experience added successfully");
      navigate("/dashboard"); // Redirect after successful submission
    } catch (err) {
      console.error("Failed to add experience:", err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Add An Experience
      </Typography>
      <Typography variant="body1" gutterBottom>
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </Typography>
      <Typography variant="body2" gutterBottom>
        * = required field
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Stack spacing={2}>
          <TextField
            label="* Job Title"
            name="title"
            value={exp.title}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="* Company"
            name="company"
            value={exp.company}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Location"
            name="location"
            value={exp.location}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="From Date"
            name="from"
            type="date"
            value={exp.from}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={exp.current}
                onChange={handleChange}
                name="current"
              />
            }
            label="Current Job"
          />

          <TextField
            label="To Date"
            name="to"
            type="date"
            value={exp.to}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            disabled={exp.current}
          />

          <TextField
            label="Job Description"
            name="description"
            value={exp.description}
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

export default AddExp;
