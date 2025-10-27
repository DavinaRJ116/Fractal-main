import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateProfile from "../components/forms/CreateProfile";
import AddEdu from "../components/forms/AddEdu";
import AddExp from "../components/forms/AddExp";

const ProfileRouter = () => {
  return (
    <>
      <Routes>
        <Route path="create-profile" element={<CreateProfile />} />
        <Route path="edit-profile" element={<CreateProfile />} />
        <Route path="add-education" element={<AddEdu/>} />
        <Route path="add-experience" element={<AddExp/>} />
        
      </Routes>
    </>
  );
};

export default ProfileRouter;
