import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateProfile from "../components/forms/CreateProfile";
import AddEdu from "../components/forms/AddEdu";
import AddExp from "../components/forms/AddExp";
import Profiles from "../components/pages/Profiles";
import Profile from "../components/pages/Profile";


const ProfileRouter = () => {
  return (
    <>
      <Routes>
        {/* View all developers */}
        <Route path="/" element={<Profiles />} />

        {/* View single developer */}
        <Route path=":id" element={<Profile />} />

        {/* Create/Edit your own profile */}
        <Route path="create-profile" element={<CreateProfile />} />
        <Route path="edit-profile" element={<CreateProfile />} />

        {/* Add experience & education */}
        <Route path="add-experience" element={<AddExp />} />
        <Route path="add-education" element={<AddEdu />} />
      </Routes>
    </>
  );
};

export default ProfileRouter;
