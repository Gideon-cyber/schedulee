import React from "react";
import "./LabelGroup.css";

const LabelGroup = ({ children, label }: { children: any; label: string }) => {
  return (
    <div className="labelGroup__container">
      <label>{label}</label>
      {children}
    </div>
  );
};

export default LabelGroup;
