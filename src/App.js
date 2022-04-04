import React from 'react';

import { useState } from "react";
//import { useNavigate } from "react-router-dom";

// import app from './components/signup'

function App() {
  
 // const navigate = useNavigate();

  const [firstName, setfirstName] = useState("firstName");
  const [lastName, setlastName] = useState("lastName");


  const collectData = async() => {
    console.log(firstName + lastName);
    let result = await fetch("http://localhost:5000/addname/", {
      method: "post",
      body: JSON.stringify({ firstName, lastName }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await JSON.stringify(result);
    console.log(result);
  }

  const collect = async () => {
    let result = await fetch("http://localhost:5000/");
    console.log(result);
   // result = await JSON.stringify(result);
    result = await result.json();
    console.log("ressults " ,result);
  }
  return (
    <div className="App">
                  
                    <label>Enter Your Names</label>
                    <input type="text" name="firstName" onChange={(e) => setfirstName(e.target.value)} placeholder="Enter first name..." required="true"></input>
                    <input type="text" name="lastName" onChange={(e) => setlastName(e.target.value)} placeholder="Enter last name..." required="true"></input>
                    <button onClick={collectData}>submit</button>
                    <button onClick={collect}>GetData</button>
   
    </div>
  );
}

export default App;