import React, {useState} from "react";
import SignIn from "./SignIn";
import PizzaList from "./PizzaList";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Support from "./Support";
import Thankyou from "./Thankyou";
import Welcome from "./Welcome";

function App() {
  const [userName,setUserName]= useState("")
  return (
    <>
      <NavBar />
    <br/>
      <Routes>
        <Route path="/" element={<SignIn setUserName={setUserName}/>} />
        <Route path="/my-pizza" element={ <PizzaList/> } />       
        <Route path="/customer-support" element={<Support />} />
        <Route path="thank-you" element={<Thankyou/>} />
        <Route path="welcome" element={<Welcome userName={userName}/>} />
      </Routes>
    </>
  );
}

export default App;
