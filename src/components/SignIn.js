
import { FloatingLabel, Form, Button } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'

function SignIn({setUserName}) {
  let navigate = useNavigate()
 
  return (
    <>
      <h1 className="text-center" style={{ color: 'brown', fontFamily: 'revert' }}>🍕 Sign In To Your Pizza</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', flexDirection: 'column', alignContent: 'center' }}
      >
        <FloatingLabel
          controlId="floatingInput"
          label="User Name"
          className="mb-3"
        >
          <Form.Control
            style={{ width: "400px" }}
            type="text"
            placeholder="user name"
            required
            onChange={(e) => setUserName(e.target.value)} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ width: "400px" }}
            required />
        </FloatingLabel>
        <Link to="/reset-password">Forgot Password ?</Link>
        <br />
        <Button onClick={() => navigate('/welcome')}>Sign In</Button>
      </div>
    </>
  );
}

export default SignIn;
