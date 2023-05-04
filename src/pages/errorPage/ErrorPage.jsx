import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const { error, status } = useRouteError();

    return (
        <div className='align-items-center justify-content-center f-flex'>
            <h2 className='text-center align-items-center justify-content-center f-flex'>{error?.message}</h2>
            <img className='align-items-center' style={{ width: '25%' }} src="https://w7.pngwing.com/pngs/285/84/png-transparent-computer-icons-error-super-8-film-angle-triangle-computer-icons.png" alt="picture haraia gese..." />
            <hr />
            <h2 className='text-center'>
                <span className='sr-only'>Error </span>
                {status || 404}
            </h2>
            <Link className='text-center' to='/'>
                <Button className='text-center' variant="primary" size="lg">Back to homepage</Button>
            </Link>
        </div>
    );
};

export default ErrorPage;