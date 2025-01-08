import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Nav = ({ beginQuiz }) => {
    const {user, setUser} = useContext(UserContext)

    const logout = () => {
        axios.post('http://localhost:8000/api/logout',{}, {withCredentials: true})
            .then(res => {
                setUser({name:'', email:'', loggedIn: false})
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 className='text-8xl underline mb-4 text-purple-600'>
                <Link to={'/'}>QuizGameZ</Link>
            </h1>
            
            <h1 className='text-4xl underline mb-4 text-purple-600'>All In One Trivia Game</h1>
        </div>
    )
}

export default Nav;