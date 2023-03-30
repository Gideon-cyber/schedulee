import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import CustomerCard from "../CustomerCard/CustomerCard";
import "./Inputs.css";
import { useAppSelector } from "../../redux/hooks";
// import { FormikErrors, useFormik } from "formik";

// type Props = {
//   placeholder?: string;
//   name?: string;
//   handleChange?: (e: React.ChangeEvent<any>) => void;
//   label?: string;
//   onClick?: () => void;
//   dropdown?: string;
//   textArea?: boolean;
//   type?: string;
//   values?: any;
//   setFieldValue?: any;
//   showEmployeeDropdown?: boolean;
//   setShowEmployeeDropdown?: any;
//   noArrow?: boolean;
// };

const InputFields = ({
  placeholder,
  name,
  handleChange,
  label,
  onClick = () => {},
  dropdown,
  textArea = false,
  type = "text",
  values,
  setFieldValue,
  showEmployeeDropdown = false,
  setShowEmployeeDropdown,
  noArrow = true,
}: {
  placeholder?: string;
  name?: string;
  handleChange?: any;
  label?: string;
  onClick?: any;
  dropdown?: string;
  textArea?: boolean;
  type?: string;
  values?: any;
  setFieldValue?: any;
  showEmployeeDropdown?: boolean;
  setShowEmployeeDropdown?: any;
  noArrow?: boolean;
}) => {
  const { employees } = useAppSelector((state) => state.employee);
  const [value, onChange] = useState(new Date().getHours() + ":00" || "");

  return (
    <div
      className="inputField"
      onClick={!showEmployeeDropdown ? onClick : () => {}}
    >
      <div className="inputField__left">
        <span className="inputField__left__title">{label}</span>
        {textArea ? (
          <textarea
            className="inputField__left__text"
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            rows={4}
          />
        ) : (
          <div>
            {dropdown ? (
              <span className="inputField__left__text">
                {dropdown === "team" && values !== "" ? values : placeholder}
              </span>
            ) : (
              <div>
                {/* {type === "time" ? (
                  <TimePicker
                    onChange={onChange}
                    // onClockClose={handleBlur}
                    onClockClose={() => setFieldValue("time", value)}
                    name="time"
                    value={value}
                    className=""
                    // disableClock={true}
                  />
                ) : ( */}
                <input
                  className="inputField__left__text"
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  onChange={handleChange}
                />
                {/* // )} */}
              </div>
            )}
          </div>
        )}
      </div>
      {noArrow === true && (
        <MdOutlineArrowDropDown fontSize={30} color="#e2e206" />
      )}
      {dropdown === "team" && showEmployeeDropdown && (
        <div className="inputField__dropdown">
          <h5 className="inputField__dropdown_header">Team member</h5>
          <div className="inputField__dropdown_members">
            {employees.map((item, index) => (
              <div
                className="inputField__dropdown_member_container"
                key={index}
                onClick={() => {
                  setFieldValue(name, item.title);
                  setShowEmployeeDropdown(false);
                }}
              >
                <CustomerCard customer={item.title} noArrow noNumber />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputFields;
