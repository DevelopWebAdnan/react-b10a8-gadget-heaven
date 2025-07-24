
import { useState } from 'react';
import useInputState from '../../utility/useInputState';

const ContactUs = () => {
    const nameState = useInputState('adddu hooked');
    const emailState = useInputState('adddu@bhai.co');
    const passwordState = useInputState('');
    const textareaState = useInputState('');
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(passwordState.value.length < 6) {
            setError('Password must be 6 characters or longer')
        }
        else {
            setError('')
            console.log('form data', nameState.value, emailState.value, passwordState.value, textareaState.value)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...nameState} type="text" name="name" />
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input {...passwordState} type="password" name="password" required />
                <br />
                <textarea {...textareaState} name="message" cols="30" rows="20" placeholder='Message'></textarea>
                <br />
                <input className='btn bg-purple-600 text-white mt-4' type='submit' value="Submit" />
                {
                    error && <p className='text-red-500 font-black'>{error}</p>
                }
            </form>
        </div>
    );
};

export default ContactUs;