import React from 'react'

const Login = (prop) => {
  const namedata = "shailendra";
  return (
    <div>
      <button onClick={()=>prop.senddata(namedata)}>click me</button>
    </div>
  )
}

export default Login
