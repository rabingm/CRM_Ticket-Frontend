import React from 'react'
import PropTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Reset Password</h1>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Enter Email Address</Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={handleOnChange}
                        required
                        >
                        </Form.Control>
                        
                    </Form.Group>
                    
                    <Button type="submit">Reset</Button>
                </Form>
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#" onClick={() =>formSwitcher("login")}>Login Now</a>
                </Col>
            </Row>
            
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
}
