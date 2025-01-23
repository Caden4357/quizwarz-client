import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
const Reg = (props) => {
    const { user, setUser } = useContext(UserContext)

    const navigate = useNavigate()
    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [error, setError] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://quizwarz-server.onrender.com/api/register', { name, email, password, confirmPassword })
            .then(res => {
                setUser({ id:res.data._id, name: res.data.name, email: res.data.email, loggedIn: true })
                navigate('/')
            })
            .catch(err => {
                console.log(err)
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
            <h2 className='text-4xl my-8'>Register</h2>


            <form className='flex flex-col gap-4' onSubmit={submitHandler}>
                {
                    error ? <p className='text-red-500'>{error}</p> : ''
                }

                <input type="text" placeholder='Name' className='border-2 border-black rounded-xl p-2 text-black' onChange={(e) => setname(e.target.value)} />
                <input type="text" placeholder='Email' className='border-2 border-black rounded-xl p-2 text-black' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' className='border-2 border-black rounded-xl p-2 text-black' onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder='Confirm Password' className='border-2 border-black rounded-xl p-2 text-black' onChange={(e) => setconfirmPassword(e.target.value)} />

                <button className='bg-black text-white rounded-xl p-2'>Register</button>
            </form>
            <p className='my-4'>Already have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>

        </motion.div>
    )
}

export default Reg;