import React, { useState, useEffect } from 'react';
import Inputs from '../components/Inputs';
import { FormValidations } from './ValidationError';
import { ValidationError } from "yup";
import '../style/Forms.css';
import { MdEmail } from 'react-icons/md';
import { FaUserAlt, FaLock, FaGoogle, FaApple } from 'react-icons/fa';
import Slider from './Slider';

const intialFormState = {
  name:'',
  email:'',
  password:''
};

const UserForm = () => {
  const [form, setForm] =  useState(intialFormState)
  const [errors, setErrors] = useState({})

  const validate = async() => {
    try {
      await FormValidations.validate(form, { abortEarly: false })
      setErrors({})
    } catch (e) {
      if (e instanceof ValidationError) {
        const errors =  {}
        e.inner.forEach((key) => {
          errors[key.path] = key.message
        })
        setErrors(errors)
      }
    }
  }

  const setInput = (newValue) => {
    setForm(form => ({ ...form, ...newValue}))
  };

  useEffect(() => {validate()},[form])

  return(
    <main className="main">
  
      <form className="forms">
        <h2 className="title">CREATE YOUR ACCOUNT</h2>
        <div className="form-group">
          <Inputs
            name="name"
            icon={<FaUserAlt/>}
            onChange={e => setInput({ name: e.target.value })}
            placeholder="Name"
            error={errors.name}
          />
        </div>

        <div className="form-group">
          <Inputs
            name="email"
            icon={<MdEmail/>}
            onChange={e => setInput({ email: e.target.value })}
            placeholder="E-mail"
            error={errors.email}
          />
        </div>

        <div className="form-group">
          <Inputs
            name="password"
            icon={<FaLock/>}
            onChange={e => setInput({ password: e.target.value })}
            placeholder="Password"
            error={errors.password}
          />
        </div>
        <div className="form-buttons">
          <button type="button" className="btn-sing">SIGNUP</button>
          <span><b>OR</b></span>
          <button type="button" className="btn-log">Login</button>
        </div>

        <div className="btn-google-apple">
          <button 
            type="button" 
            className="btn-apple">
            <FaApple/> Apple
          </button>
          <button 
            type="button" 
            className="btn-google">
            <FaGoogle/> Google
          </button>
        </div>
      </form>


      <div className="wrapper-slider">
        <Slider />
      </div>
    </main>
  );
}

export default UserForm;
