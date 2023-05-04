import React, { useContext, useState } from 'react';
import Header from '../../shared/header/Header';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div>
            <Header />
            <Container className='w-25 mx-auto'>
                <h3>Please Register</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="accept" label="Accept Terms and Conditions" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Already Have an Account? <Link to="/login">Login</Link>
                    </Form.Text>
                    
                    <Form.Text className="text-danger">
                        <p>{error}</p>
                    </Form.Text>
                </Form>
            </Container>

        </div>
    );
};

export default Register;