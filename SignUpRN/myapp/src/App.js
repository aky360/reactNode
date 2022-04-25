import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Menu from "./components/Menu"
import Login from "./components/Login"

import Signup from "./components/Signup"


// const collectData = async() => {
//   console.log(firstName + lastName);
//   let result = await fetch("http://localhost:5000/Signup/", {
//     method: "post",
//     body: JSON.stringify({ firstName, lastName }),
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   result = await JSON.stringify(result);
//   console.log(result);
// }

// const collect = async () => {
//   let result = await fetch("http://localhost:5000/");
  
//   console.log(result);
//  // result = await JSON.stringify(result);
//   result = await result.json();
//   console.log("ressults length", result.length);
//   console.log("ressults ", result[0].firstName);
//   for (var i = 0; i < result.length; i++){
//     console.log(result[i]);
//   } 
//   //<jsonDataComp result/>
// }


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Menu' element={<Menu/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header"> */}
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {/* <p>Edit <code>src/App.js</code> and save to reload.</p> */}
//         {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a> */}
//       {/* </header> */}
//     </div>
//   );
// }

// export default App;
