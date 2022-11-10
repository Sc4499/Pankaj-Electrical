import React,{useState} from 'react';
import Login from './Login';

const App = () => {
  const[name,setname]=useState("rohan");
  function clickhandler(namedata){
setname(namedata)
  }
  return (
    <div>
      <h1>welcome:{name}</h1>
      <Login senddata={clickhandler}/>
    </div>
  )
}

export default App
