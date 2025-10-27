import React from "react";
import EduRow from "./EduRow";

const EduDetails = ({ education }) => {
  if (!education.length) return <p>No education added yet.</p>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>School</th>
          <th className="hide-sm">Degree</th>
          <th className="hide-sm">Years</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {education.map((edu) => (
          <EduRow key={edu._id} edu={edu} />
        ))}
      </tbody>
    </table>
  );
};

export default EduDetails;
