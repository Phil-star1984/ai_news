import React from "react";

function FormDataInput({ label, type, name, placeholder, value, onChange }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}

export default FormDataInput;
