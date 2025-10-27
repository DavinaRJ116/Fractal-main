import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../redux/action/authAction";
import {
  Container,
  Box,
  Typography,
  Stack,
  Link,
  Paper,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import CommonTextFields from "../../core/components/common/TextFields";
import CommonButton from "../../core/components/common/Button";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(initialState);

  // Handle change
  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    dispatch(loginUserAction(loginData));
    navigate("/dashboard");
  };

  const { email, password } = loginData;

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // ✅ ensures the entire form is centered vertically
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
            Sign In
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <LoginIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Sign into Your Account
          </Typography>
        </Box>

        {/* Form */}
        <Box component="form" onSubmit={onSubmit}>
          <Stack spacing={2}>
            <CommonTextFields
              label="Email Address"
              name="email"
              type="email"
              required
              fullWidth
              value={email}
              onChange={onChange}
            />
            <CommonTextFields
              label="Password"
              name="password"
              type="password"
              required
              fullWidth
              value={password}
              onChange={onChange}
            />
            <CommonButton
              type="submit"
              variant="contained"
              color="success"
              size="large"
              label="Login"
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
          Don’t have an account?{" "}
          <Link
            component={RouterLink}
            to="/auth/register"
            underline="hover"
            color="primary"
            fontWeight={600}
          >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
