import React, { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";

const AddExp = () => {
  const isAdd = Boolean(useMatch("/profile/add-experience"));
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { title, company, location, from, to, current, description } = formState;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState); // Here you can dispatch to redux or send to backend
    navigate("/dashboard");
  };

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">
          {isAdd ? "Add An Experience" : "Edit Experience"}
        </h1>
        <p className="lead">
          <i className="fas fa-code-branch"></i> Add any developer/programming positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Job Title"
              name="title"
              value={title}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Company"
              name="company"
              value={company}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <h4>From Date</h4>
            <input
              type="date"
              name="from"
              value={from}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                checked={current}
                onChange={onChange}
              /> Current Job
            </p>
          </div>
          <div className="form-group">
            <h4>To Date</h4>
            <input
              type="date"
              name="to"
              value={to}
              onChange={onChange}
              disabled={current}
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Job Description"
              value={description}
              onChange={onChange}
            ></textarea>
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <a className="btn btn-light my-1" href="dashboard.html">
            Go Back
          </a>
        </form>
      </section>
    </>
  );
};

export default AddExp;
