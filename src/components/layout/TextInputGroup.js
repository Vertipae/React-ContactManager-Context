import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
  // Destructuring props so the type={type} won't be type={props.type}
  label,
  name,
  value,
  placeholder,
  type,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

{
  /* <div className="form-group">
<label htmlFor="name">Name</label>
<input
  type="text"
  name="name"
  className="form-control form-control-lg"
  placeholder="Enter Name.."
  value={name}
  onChange={this.onChange}
/> */
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
