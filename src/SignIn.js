import React from "react";
import { FloatingLabel, Form ,Button} from "react-bootstrap"
import {Link} from 'react-router-dom'

function SignIn() {
  return (
    <>
      <h1 className="text-center" style={{color:'brown', fontFamily:'revert'}}>🍕 Sign In To Your Pizza</h1>
      <div style={{display:'flex',flexWrap:'wrap',alignItems:'stretch',flexDirection:'column', alignContent:'center'}}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control 
          style={{ width: "400px" }}
           type="email" 
           placeholder="name@example.com"
           required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control 
          type="password"
           placeholder="Password"
            style={{ width: "400px" }}
            required />
        </FloatingLabel>
        <Link to="/reset-password">Forgot Password ?</Link>
        <br/>
        <Button>Sign In</Button>
      </div>
    </>
  );
}

export default SignIn;