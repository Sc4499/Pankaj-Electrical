
import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[name,setame]=useState();
    const[allEntry,setAllEntry] = useState([]);

    function submitHandler(e){
e.preventDefault();
const newEntry = {name : name , email : email, password:password};
setAllEntry([...allEntry,newEntry]);
console.log(allEntry);
    }


  return (
    <>
    <form onSubmit={submitHandler}>
        <div>
        <div className="mb-3">
      <label htmlFor="exampleInputname" className="form-label">Name</label>
      <input type="text" name={name} className="form-control" id="exampleInputname" value={name} onChange={(e)=>setame(e.target.value)} aria-describedby="emailHelp"/>
    </div>
        <div className="mb-3">
      <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" value={email}  onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control"  value={password} onChange={(e)=>setPassword(e.target.value)}id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-dark w-100">Submit</button>
        </div>
   
  </form>
 
    {allEntry.map(item =>{
      return(
      
         <div className='showdata'>
        <div>{item.name}</div>
        <div>{item.email}</div>
        <div>{item.password}</div>
        </div>
      )
    })}
   
  
  </>
  )
}

export default Login
