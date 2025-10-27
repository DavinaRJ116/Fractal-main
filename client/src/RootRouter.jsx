import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./core/components/layout/Landing";
import AuthRouter from "./auth/router/AuthRouter";
import DashboardRouter from "./dashboard/router/DashboardRouter";
import ProfileRouter from "./profiles/router/ProfileRouter"
import PostRouter from "./posts/router/PostRouter";

const RootRouter = () => {
  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Authentication Routes */}
        <Route path="/auth/*" element={<AuthRouter />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={<DashboardRouter/>} />
        <Route path="/profile/*"  element={<ProfileRouter/>}/>
        <Route path="/post/*"  element={<PostRouter/>}/>


        
      </Routes>
    </>
  );
};

export default RootRouter;
