
import { useState } from 'react';
import useInputState from '../../utility/useInputState';
import Heading from '../Heading/Heading';

const ContactUs = () => {
    const nameState = useInputState('adddu hooked');
    const emailState = useInputState('adddu@bhai.co');
    const passwordState = useInputState('');
    const textareaState = useInputState('');
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (passwordState.value.length < 6) {
            setError('Password must be 6 characters or longer')
        }
        else {
            setError('')
            console.log('form data', nameState.value, emailState.value, passwordState.value, textareaState.value)
        }
    }

    return (
        <div>
            <div className='bg-purple-600 h-96 mb-4 md:mb-6 lg:mb-8'>
                <div className="max-w-6xl">
                    <Heading title='Contact Us'></Heading>
                    <Heading subtitle='Feel free to contact us in case of any query on the gadgets. From the image of the product to specification, price, do not hesitate to ask for details of these.'></Heading>
                </div>
            </div>
            <div className='flex justify-center w-screen md:w-3/4 mx-auto'>
                <form onSubmit={handleSubmit} className='flex-col my-4 md:my-7'>
                    <input {...nameState} type="text" className='bg-white rounded-xl p-4 md:p-6 my-4 md:my-6 w-full' name="name" />
                    <br />
                    <input {...emailState} type="email" className='bg-white rounded-lg p-4 md:p-6 w-full' name="email" id="" />
                    <br />
                    <input {...passwordState} type="password" className='bg-white rounded-md p-4 md:p-6 my-4 md:my-6 w-full' name="password" required />
                    <br />
                    <textarea {...textareaState} className='bg-white rounded-sm font-semibold p-4 md:p-6 w-full' name="message" cols="30" rows="20" placeholder='Message'></textarea>
                    <br />
                    <div className='mt-4 md:mt-6 text-center'>
                        <input className='btn btn-lg bg-purple-600 text-white' type='submit' value="Submit" />
                    </div>
                    {
                        error && <p className='text-red-500 font-black'>{error}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default ContactUs;