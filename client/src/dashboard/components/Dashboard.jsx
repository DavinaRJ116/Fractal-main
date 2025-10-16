import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardAction from "./DashboardAction";
import ExpDetails from "./ExpDetails";
import EduDetails from "./EduDetails";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfileAction } from "../../profiles/redux/action/profile.action";

const Dashboard = () => {
  const dispatch = useDispatch();

  // ✅ Correct arrow function syntax
  const { profile, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getCurrentProfileAction());
  }, [dispatch]); // ✅ added dependency for best practice

  const renderDashboard = (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome John Doe
      </p>
      <DashboardAction />

      <ExpDetails />

      <h2 className="my-2">Education Credentials</h2>
      <EduDetails />

      <div className="my-2">
        <button className="btn btn-danger">
          <i className="fas fa-user-minus"></i>
          Delete My Account
        </button>
      </div>
    </section>
  );

  const createProfile = (
    <section className="container">
      <h2 className="my-2">Dashboard</h2>
      <p>You haven’t created a profile yet.</p>
      <Link to="/profile/create-profile" className="btn btn-primary">
        Create Profile
      </Link>
    </section>
  );

  return (
    <>
      {profile === null ? createProfile : renderDashboard}
    </>
  );
};

export default Dashboard;
