import React from "react";

const EduRow = () => {
  return (
    <tr>
      <td>Northern Essex</td>
      <td className="hide-sm">Associates</td>
      <td className="hide-sm">02-03-2007 - 01-02-2009</td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default EduRow; // ✅ must be default export

