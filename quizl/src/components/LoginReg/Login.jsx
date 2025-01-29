import React, { useState, useContext } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { FidgetSpinner } from 'react-loader-spinner';
const Login = (props) => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        axios.post('https://quizwarz-server.onrender.com/api/login', { email, password })
            .then(res => {
                setUser({ id: res.data._id, name: res.data.name, email: res.data.email, loggedIn: true })
                navigate('/')
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                setError('Invalid Credentials')
            })
    }

    return (
        <motion.div
            className='flex flex-col justify-center items-center'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeIn', type: 'spring', stiffness: 100, bounce: 0.5 }}
        >
            <h2 className='text-4xl my-8'>Login</h2>
            {
                isLoading && <FidgetSpinner
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper"
                />
            }
            <form className='flex flex-col gap-4' onSubmit={submitHandler}>
                {
                    error ? <p className='text-red-500'>{error}</p> : ''
                }
                <input type="text" placeholder='Email' className='border-2 border-black rounded-xl p-2 text-black' onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" placeholder='Password' className='border-2 border-black rounded-xl p-2 text-black' onChange={(e) => setPassword(e.target.value)} value={password} />
                <button className='bg-black text-white rounded-xl p-2'>Login</button>
            </form>
            <p className='my-4'>Don't have an account? <Link to='/register' className='text-blue-500'>Register</Link></p>
        </motion.div>
    )
}

export default Login;