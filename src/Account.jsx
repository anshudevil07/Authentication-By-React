import React from 'react'
import Register from './Register'
import { Row, Col } from 'react-bootstrap'
import Login from './Login'

function Account() {
    return (
        <Row>
            {/* Register */}
            <Col xs={12} sm={12} lg={6}>
                <Register />
            </Col>
            {/* Login */}
            <Col xs={12} sm={12} lg={6}>
                <Login />
            </Col>
        </Row>
    )
}

export default Account