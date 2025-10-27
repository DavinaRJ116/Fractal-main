import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../redux/action/authAction";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Stack,
  Link,
  Paper,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CommonTextFields from "../../core/components/common/TextFields";
import CommonButton from "../../core/components/common/Button";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  // onChange
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      alert("Passwords do not match");
      return;
    }
    dispatch(registerUserAction(formData));
    navigate("/dashboard");
  };

  const { name, email, password, password2 } = formData;

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // ensures full height
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          width: "100%",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" color="primary" fontWeight={700}>
            Sign Up
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <PersonAddAltIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Create Your Account
          </Typography>
        </Box>

        {/* Form */}
        <Box component="form" onSubmit={onSubmit}>
          <Stack spacing={2}>
            <CommonTextFields
              label="Name"
              name="name"
              required
              value={name}
              onChange={onChange}
            />
            <CommonTextFields
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={onChange}
              helperText="Use a Gravatar email for your profile image."
            />
            <CommonTextFields
              label="Password"
              name="password"
              type="password"
              inputProps={{ minLength: 6 }}
              value={password}
              onChange={onChange}
            />
            <CommonTextFields
              label="Confirm Password"
              name="password2"
              type="password"
              inputProps={{ minLength: 6 }}
              value={password2}
              onChange={onChange}
            />
            <CommonButton
              type="submit"
              variant="contained"
              color="danger"
              size="large"
              label="Register"
              sx={{
                py: 1.2,
                textTransform: "none",
                fontWeight: 600,
                mt: 1,
              }}
            />
          </Stack>
        </Box>

        {/* Footer */}
        <Typography variant="body1" align="center" sx={{ mt: 3 }}>
          Already have an account?{" "}
          <Link
            component={RouterLink}
            to="/auth/login"
            underline="hover"
            color="danger"
            fontWeight={600}
          >
            Sign In
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;
