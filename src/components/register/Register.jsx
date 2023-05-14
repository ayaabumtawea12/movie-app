import React from 'react';
import axios from 'axios';
import Joi, { object } from 'joi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../CustomInput/CustomInput';
import { toast } from 'react-toastify';
import './Register.css';

const Register = () => {
  
let [inputs, setInputs] = useState({
  email:'',
  name:'',
  password:'',
  cPassword:'',
});

let [errors, setErrors] = useState({
  email:'',
  name:'',
  password:'',
  cPassword:'',
});

  let registerSchema = Joi.object({
  email: Joi.string().required(),
  name: Joi.string().max(15).required(),
  password: Joi.string().required(),
  cPassword: Joi.string().required(),
});

let validateInput= (input, inputSchema)=>{
  return inputSchema.validate(input);
};

let onChange = (event)=> {
let { name, value } = event.target;
//console.log(registerSchema.extract(name).validate( value));
let validation = validateInput(value, registerSchema.extract(name));
if(validation.error){
//console.log(validation.error);
console.log(event.target.value)
setErrors({...errors, [name]: validation.error.details[0].message});
console.log(errors);
} else{
  let err = { ...errors };
  delete err[name]; 
  setErrors({ ...err });
  console.log(errors)
}

setInputs({...inputs, [name]: value });
};

let onSubmit= async (event)=>{
event.preventDefault();
if (Object.keys(errors).length ===0){
  const {data} =await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup', inputs ,
  ); 
  toast.success('Registration Successful');
  console.log(data);
} else{
  console.log('test')
}
};

  return (
    
  <div className='register'> 
     
  <div className='login mt-5'>
    
   <form method="POST" action="/handleLogin" onSubmit={onSubmit} className='container formlogin'>
   <h1 className='mt-5 text-center'>Register Now</h1>
     <CustomInput error={errors.email}  text="Enter your email" type="email" name="email" onChange={onChange} />
     <CustomInput  error={errors.name}  text="Enter your name" type="text" name="name" onChange={onChange} />
     <CustomInput   error={errors.password} text="Enter your Password" type="password" name="password" onChange={onChange}  />
     <CustomInput  error={errors.cPassword} text="Enter your cPassword" type="password" name="cPassword" onChange={onChange}  />
     <button type='submit' className='btn text-white  w-100 fs-5 rounded-3 mt-3'>Register</button>
    </form>
     </div>
 
  </div>
    )
  }

export default Register;
