import React from "react";
import EduRow from "./EduRow"; // ✅ default import

const EduDetails = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>School</th>
          <th className="hide-sm">Degree</th>
          <th className="hide-sm">Years</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <EduRow /> {/* ✅ self-closing tag */}
      </tbody>
    </table>
  );
};

export default EduDetails;
