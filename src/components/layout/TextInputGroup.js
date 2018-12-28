import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  // Destructuring props so the type={type} won't be type={props.type}
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        // is-invalid for the red corners in validation
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        // className="is-invalid form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* Needs is-invalid in className because bootstrap */}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

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

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
