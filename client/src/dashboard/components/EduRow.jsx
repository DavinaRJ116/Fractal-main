import React from "react";

const EduRow = ({ edu }) => (
  <tr>
    <td>{edu.school}</td>
    <td className="hide-sm">{edu.degree}</td>
    <td className="hide-sm">
      {new Date(edu.from).toLocaleDateString()} -{" "}
      {edu.current ? "Now" : new Date(edu.to).toLocaleDateString()}
    </td>
    <td>
      <button className="btn btn-danger">Delete</button>
    </td>
  </tr>
);

export default EduRow;
