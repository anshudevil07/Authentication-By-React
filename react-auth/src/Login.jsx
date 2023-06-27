import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


function Login() {

    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        //set configuration
        console.log('triggered', { email, password })

        const configuration = {
            method: "post",
            url: "http://localhost:8080/login",
            data: {
                email,
                password
            }
        }

        axios(configuration)
            .then((result) => {
                console.log(result)
                cookies.set("TOKEN", result.data.token, { path: '/' })
                window.location.href = '/auth'

                setLogin(true)
            }).catch((error) => {
                error = new Error()
            })
    }

    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* email */}
                <Form.Group >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter Email'
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                {/* password */}
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter Password'
                        value={password} onChange={(e) => setPasword(e.target.value)}

                    />
                </Form.Group>
                <Button variant='primary' type='submit'>Login</Button>

                {
                    login ? (
                        <p className='text-success'>You are Logged in successfully</p>
                    ) : (
                        <p className='text-danger'>You are not logged in </p>
                    )
                }
            </Form>
        </div>
    )
}

export default Login