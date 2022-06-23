import { Dropdown } from "bootstrap";
import React from "react";
import { Form, Button } from 'react-bootstrap'
function Support() {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label style={{color:'Green',fontSize:'20px'}}>Send Us Message:</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder='type your message here...' />
                <Button className="submit">Send</Button>
            </Form.Group>
        </>
    )
}
export default Support