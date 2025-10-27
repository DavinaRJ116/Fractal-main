// CreateProfile.jsx
import React, { useState, useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { createProfileAction, getCurrentProfileAction } from "../../redux/action/profile.action";
import CommonTextFields from "../../../core/components/common/TextFields";
import CommonButton from "../../../core/components/common/Button";

const emptyForm = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  bio: "",
  githubusername: "",
  youtube: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  instagram: "",
};

const CreateProfile = () => {
  const isCreate = Boolean(useMatch("/profile/create-profile"));
  const [formState, setFormState] = useState(emptyForm);
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    githubusername,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = formState;

  useEffect(() => {
    dispatch(getCurrentProfileAction());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      const profileData = { ...emptyForm };
      for (const key in profile) {
        if (key in profileData && key !== "social") {
          profileData[key] = profile[key] || "";
        }
      }
      if (Array.isArray(profile.skills)) profileData.skills = profile.skills.join(",");
      if (profile.social) {
        for (const key in profile.social) {
          if (key in profileData) profileData[key] = profile.social[key] || "";
        }
        if (Object.values(profile.social).some((val) => val?.trim() !== "")) toggleSocialInputs(true);
      }
      setFormState(profileData);
    }
  }, [profile]);

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createProfileAction(formState)).unwrap();
      await dispatch(getCurrentProfileAction()); // Refresh
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const socialInputs = displaySocialInputs && (
    <Stack spacing={2} mt={2}>
      {["twitter", "facebook", "youtube", "linkedin", "instagram"].map((key) => (
        <CommonTextFields
          key={key}
          label={`${key.charAt(0).toUpperCase() + key.slice(1)} URL`}
          name={key}
          value={formState[key]}
          onChange={onChange}
          fullWidth
        />
      ))}
    </Stack>
  );

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {isCreate ? "Create Your Profile" : "Edit Your Profile"}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Let's get some information to make your profile stand out
      </Typography>
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>* Select Professional Status</InputLabel>
          <Select name="status" value={status} onChange={onChange}>
            {[
              "Developer",
              "Junior Developer",
              "Senior Developer",
              "Manager",
              "Student or Learning",
              "Instructor",
              "Intern",
              "Other",
            ].map((opt) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <CommonTextFields fullWidth placeholder="Company" name="company" value={company} onChange={onChange} sx={{ mb: 2 }} />
        <CommonTextFields fullWidth placeholder="Website" name="website" value={website} onChange={onChange} sx={{ mb: 2 }} />
        <CommonTextFields fullWidth placeholder="Location" name="location" value={location} onChange={onChange} sx={{ mb: 2 }} />
        <CommonTextFields fullWidth placeholder="* Skills" name="skills" value={skills} onChange={onChange} sx={{ mb: 2 }} />
        <CommonTextFields fullWidth placeholder="Github Username" name="githubusername" value={githubusername} onChange={onChange} sx={{ mb: 2 }} />
        <CommonTextFields fullWidth placeholder="A short bio of yourself" name="bio" value={bio} onChange={onChange} sx={{ mb: 2 }} multiline rows={3} />

        <CommonButton variant="outlined" sx={{ mb: 2 }} onClick={() => toggleSocialInputs(!displaySocialInputs)}>
          {displaySocialInputs ? "Hide Social Links" : "Add Social Network Links"}
        </CommonButton>

        {socialInputs}

        <Stack direction="row" spacing={2} mt={3}>
          <CommonButton type="submit" variant="contained" color="primary">
            Submit
          </CommonButton>
          <CommonButton variant="outlined" onClick={() => navigate("/dashboard")}>
            Go Back
          </CommonButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default CreateProfile;
