import React, { useState } from 'react';
 
const Input = ({ error, label, icon, ...rest }) => {
  const [touched, setTouched] = useState(false)

  return (
    <>
      <label htmlFor={rest.name}>{label}</label>
      <div className="group-input">
        <input className="form-control"{...rest} onBlur={() => setTouched(true)} />
        <span className="icon">{icon}</span>
      </div>
      <span className="text-danger">{touched && error}</span>
    </>
  );
}

export default Input;