import React from "react";

const DashboardAction = () => {
  return (
    <>
      <div className="dash-buttons">
        <a href="create-profile.html" className="btn btn-light">
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </a>
        <a href="add-experience.html" className="btn btn-light">
          <i className="fab fa-black-tie text-primary"></i> Add Experience
        </a>
        <a href="add-education.html" className="btn btn-light">
          <i className="fas fa-graduation-cap text-primary"></i> Add Education
        </a>
      </div>
    </>
  );
};

export default DashboardAction;
