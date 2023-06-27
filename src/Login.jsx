// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';

// function Login() {

//     const [login, setLogin] = useState(false);
//     return (
//         <div>
//             <h2>Login</h2>
//             <Form>
//                 {/* email */}
//                 <Form.Group>
//                     <Form.Label>Email Address</Form.Label>
//                     <Form.Control type='email' name='email' placeholder='Enter Email' />
//                 </Form.Group>
//                 {/* password */}
//                 <Form.Group>
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type='password' name='password' placeholder='Enter Password' />
//                 </Form.Group>
//                 <Button variant='primary' type='submit'>Login</Button>

//                 {
//                     login ? (
//                         <p className='text-success'>You are Logged in successfully</p>
//                     ) : (
//                         <p className='text-danger'>You are not logged in </p>
//                     )
//                 }
//             </Form>
//         </div>
//     )
// }

// export default Login

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Login() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login authentication logic here
    // For simplicity, let's assume successful login if the email and password are not empty

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('/login', { email, password });

    if (response.status === 200) {
      const { token } = response.data;

      // Set the token in local storage or cookie
      // Example: localStorage.setItem('token', token);
      setLogin(true);
    } else {
      setLogin(false);
    }
  } catch (error) {
    console.error('Error occurred during login:', error);
  }
};

    if (email && password) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        {/* email */}
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter Email'
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        {/* password */}
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Enter Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>

        {login ? (
          <p className='text-success'>You are Logged in successfully</p>
        ) : (
          <p className='text-danger'>You are not logged in</p>
        )}
      </Form>
    </div>
  );
}

export default Login;
