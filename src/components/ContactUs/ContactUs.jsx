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
            <title>Contact Us | Gadget Heaven</title>
            <div className="bg-purple-600 mb-6 md:mb-12">
                <div className="max-w-6xl mx-auto p-4">
                    <Heading title='Contact Us'></Heading>
                    <Heading subtitle='Please fill out the form in this section to inbox us. Feel free to inbox us in case of any query on the gadgets. From the availability of the product to specification, price, do not hesitate to ask for details of these.'></Heading>
                </div>
            </div>

            <div className='flex justify-center w-screen md:w-3/4 mx-auto'>
                <form onSubmit={handleSubmit} className='flex-col'>
                    <input {...nameState} type="text" className='bg-white rounded-xl p-4 md:p-6 my-4 md:my-6 w-full' name="name" autoFocus />
                    <br />
                    <input {...emailState} type="email" className='bg-white rounded-lg p-4 md:p-6 w-full' name="email" id="" />
                    <br />
                    <input {...passwordState} type="password" className='bg-white rounded-md p-4 md:p-6 my-4 md:my-6 w-full' name="password" required />
                    <br />
                    <textarea {...textareaState} className='bg-white rounded-sm font-semibold p-4 md:p-6 w-full' name="message" cols="30" rows="20" placeholder='Message'></textarea>
                    <br />
                    <div className='mt-4 md:mt-6 text-center'>
                        <input className='btn btn-lg btn-outline rounded-2xl text-amber-600' type='submit' value="Message" />
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