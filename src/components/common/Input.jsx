import React from "react";

const Input = ({ name, label, error, ...rest }) => (
  <div className="form-group input-box">
    {/* <label htmlFor={name}>{label}</label> */}
    <input {...rest} name={name} id={name} required/>
    <span htmlFor={name}> {label}</span>
    {/* {error && <div className="alert alert-danger">{error}</div>} */}
  </div>
);

export default Input;
