import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);

    return (
        <div className='text-center'>
            <p className='text-5xl my-5'>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <p>Go back to where you are from</p>
                    <Link to={'/'}><button className='btn btn-lg btn-outline text-purple-600 font-semibold rounded-4xl'>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;