import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../shared/header/Header';
import { AuthContext } from '../../../providers/AuthProvider';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const Login = () => {

    const auth = getAuth(app);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <>
            <Header />
            <Container className='w-25 mx-auto'>
                <h3>Please Login</h3>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't Have an Account? <Link to="/register">Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
               <Button className='m-2' onClick={handleGoogleSignIn} variant="outline-primary" >Sign in with google</Button>
               <Button className='m-2' onClick={handleGitHubSignIn}  variant="outline-primary">Sign in with Github</Button>
            </Container>
        </>
    );
};

export default Login;