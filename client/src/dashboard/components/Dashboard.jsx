// Dashboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Container, Paper, Stack, Button, CircularProgress } from "@mui/material";
import ExpDetails from "./ExpDetails";
import EduDetails from "./EduDetails";
import DashboardAction from "./DashboardAction";
import { getCurrentProfileAction } from "../../profiles/redux/action/profile.action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentProfileAction());
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  const profileData = profile; // directly use profile

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "black", color: "white", py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Dashboard
        </Typography>

        <Typography variant="h6" sx={{ mb: 4 }}>
          Welcome{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
            {user?.name || "User"}
          </Box>
        </Typography>

        {profileData ? (
          <>
            {/* Dashboard Actions */}
            <Box sx={{ mb: 4 }}>
              <DashboardAction />
            </Box>

            {/* Experience Section */}
            <Paper
              elevation={5}
              sx={{
                bgcolor: "white",
                p: 4,
                mb: 4,
                borderRadius: 3,
                border: "black",
              }}
            >
              {profileData.experience?.length > 0 ? (
                <ExpDetails experience={profileData.experience} />
              ) : (
                <Typography color="gray">No experience added yet.</Typography>
              )}
            </Paper>

            {/* Education Section */}
            <Paper
              elevation={5}
              sx={{
                bgcolor: "white",
                p: 4,
                mb: 4,
                borderRadius: 3,
                border: "1px solid #333",
              }}
            >
              {profileData.education?.length > 0 ? (
                <EduDetails education={profileData.education} />
              ) : (
                <Typography color="gray">No education added yet.</Typography>
              )}
            </Paper>

            {/* Delete Account */}
            <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="error"
                startIcon={<i className="fas fa-user-minus"></i>}
                sx={{ textTransform: "none", fontWeight: 600 }}
              >
                Delete My Account
              </Button>
            </Stack>
          </>
        ) : (
          // If No Profile
          <Paper
            elevation={6}
            sx={{
              textAlign: "center",
              p: 6,
              mt: 10,
              bgcolor: "rgba(20,20,20,0.8)",
              borderRadius: 3,
              border: "1px solid #444",
            }}
          >
            <Typography variant="h6" color="gray" sx={{ mb: 3 }}>
              You have not yet set up a profile. Please add some info to get started.
            </Typography>

            <Button
              component={RouterLink}
              to="/profile/create-profile"
              variant="contained"
              color="primary"
              size="large"
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              Create Profile
            </Button>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Dashboard;
