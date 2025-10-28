// src/profiles/pages/Profiles.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProfilesAction } from "../../redux/action/Profilesaction";
import CommonButton from "../../../core/components/common/Button";

const Profiles = () => {
  const dispatch = useDispatch();

  const { profiles = [], loading, error } = useSelector(
    (state) => state.profiles || {}
  );

  useEffect(() => {
    dispatch(getAllProfilesAction());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="container text-center mt-5">
        <h2>Loading developers...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container text-center mt-5">
        <h2 className="text-danger">Error: {error}</h2>
      </section>
    );
  }

  if (!profiles || profiles.length === 0) {
    return (
      <section className="container text-center mt-5">
        <h2>No developer profiles found.</h2>
      </section>
    );
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Developers</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop"></i> Browse and connect with developers
      </p>

      <div className="profiles">
        {profiles.map((profile) => {
          const user = profile.user || {};
          const avatar =
            user.avatar ||
            "https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200";
          const skills = Array.isArray(profile.skills) ? profile.skills : [];
          const company = profile.company || "";
          const location = profile.location || "";

          return (
            <div className="profile bg-light" key={profile._id}>
              <img className="round-img" src={avatar} alt={user.name || "User"} />
              <div>
                <h2>{user.name || "Anonymous"}</h2>
                <p>
                  {profile.status}
                  {company ? ` at ${company}` : ""}
                </p>
                {location && <p>{location}</p>}

                <CommonButton
                  label="View Profile"
                  color="primary"
                  variant="contained"
                  component={Link}
                  to={`/profile/${user._id}`}
                  sx={{ mt: 1 }}
                />
              </div>

              <ul>
                {skills.slice(0, 5).map((skill, index) => (
                  <li className="text-primary" key={index}>
                    <i className="fas fa-check"></i> {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Profiles;
