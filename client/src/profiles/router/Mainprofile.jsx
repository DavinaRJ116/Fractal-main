import React from "react";
import { Routes, Route } from "react-router-dom";
import Profiles from "../components/pages/Profiles";
import Profile from "../components/pages/Profile";


const Mainprofile = () => {
  return (
    <>
      <Routes>
        {/* View all developers */}
        <Route path="/" element={<Profiles />} />

        {/* View single developer */}
        <Route path=":id" element={<Profile />} />

      
      </Routes>
    </>
  );
};

export default Mainprofile;
