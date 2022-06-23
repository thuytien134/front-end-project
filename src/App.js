import React from "react";
import SignIn from "./SignIn";
// import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Support from "./Support";

// Look at me, I'm a test! Again!

function App() {
  return (
    <>
      <NavBar />
    <br/>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/my-pizza" element={ <PizzaList/> } />       
        <Route path="/custommer-support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
