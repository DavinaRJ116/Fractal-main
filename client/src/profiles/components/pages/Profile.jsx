// src/profiles/pages/Profile.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileByIdAction } from "../../redux/action/Profilesaction";
import CommonButton from "../../../core/components/common/Button";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { profile, loading, error } = useSelector(
    (state) => state.profiles || {}
  );

  useEffect(() => {
    if (id) {
      dispatch(getProfileByIdAction(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <h2 className="text-center mt-4">Loading profile...</h2>;
  }

  if (error) {
    return (
      <section className="container text-center mt-4">
        <h2 className="text-danger">Error: {error}</h2>
        <CommonButton
          label="Back To Developers"
          color="primary"
          variant="outlined"
          onClick={() => navigate("/profiles")}
          sx={{ mt: 2 }}
        />
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="container text-center mt-4">
        <h2>No profile found.</h2>
        <CommonButton
          label="Back To Developers"
          color="primary"
          variant="outlined"
          onClick={() => navigate("/profiles")}
          sx={{ mt: 2 }}
        />
      </section>
    );
  }

  const user = profile.user || {};
  const social = profile.social || {};
  const experiences = profile.experience || [];
  const education = profile.education || [];

  return (
    <section className="container">
      <CommonButton
        label="Back To Developers"
        color="primary"
        variant="outlined"
        onClick={() => navigate("/mainprofile")}
        sx={{ mb: 2 }}
      />

      <div className="profile-grid my-1">
        {/* Top */}
        <div className="profile-top bg-primary p-2 text-center text-white">
          <img
            className="round-img my-1"
            src={
              user.avatar ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200"
            }
            alt={user.name}
          />
          <h1 className="large">{user.name}</h1>
          <p className="lead">
            {profile.status} {profile.company ? `at ${profile.company}` : ""}
          </p>
          <p>{profile.location}</p>
          <div className="icons my-1">
            {profile.website && (
              <a href={profile.website} target="_blank" rel="noreferrer">
                <i className="fas fa-globe fa-2x"></i>
              </a>
            )}
            {social.twitter && (
              <a href={social.twitter} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            )}
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            )}
            {social.youtube && (
              <a href={social.youtube} target="_blank" rel="noreferrer">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            )}
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            )}
          </div>
        </div>

        {/* About */}
        <div className="profile-about bg-light p-2">
          <h2 className="text-primary">{user.name}'s Bio</h2>
          <p>{profile.bio || "No bio available"}</p>
          <div className="line"></div>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            {Array.isArray(profile.skills) && profile.skills.length > 0 ? (
              profile.skills.map((skill, index) => (
                <div className="p-1" key={index}>
                  <i className="fa fa-check"></i> {skill}
                </div>
              ))
            ) : (
              <p>No skills listed</p>
            )}
          </div>
        </div>

        {/* Experience */}
        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          {experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <div key={index}>
                <h3 className="text-dark">{exp.company}</h3>
                <p>
                  {exp.from} - {exp.to || "Present"}
                </p>
                <p>
                  <strong>Position:</strong> {exp.title}
                </p>
                <p>
                  <strong>Description:</strong> {exp.description || "N/A"}
                </p>
              </div>
            ))
          ) : (
            <p>No experience listed</p>
          )}
        </div>

        {/* Education */}
        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          {education.length > 0 ? (
            education.map((edu, index) => (
              <div key={index}>
                <h3>{edu.school}</h3>
                <p>
                  {edu.from} - {edu.to || "Present"}
                </p>
                <p>
                  <strong>Degree:</strong> {edu.degree}
                </p>
                <p>
                  <strong>Field Of Study:</strong> {edu.fieldofstudy}
                </p>
                <p>
                  <strong>Description:</strong> {edu.description || "N/A"}
                </p>
              </div>
            ))
          ) : (
            <p>No education listed</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
