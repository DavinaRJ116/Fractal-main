import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateProfile from "../components/forms/CreateProfile";

const ProfileRouter = () => {
  return (
    <>
      <Routes>
        <Route path="create-profile" element={<CreateProfile />} />
        <Route path="edit-profile" element={<CreateProfile />} />
                <Route path="/profile/add-experience" element={<AddExp />} />
        
      </Routes>
    </>
  );
};

export default ProfileRouter;
