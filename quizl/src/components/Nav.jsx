import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Nav = ({ beginQuiz }) => {
    const {user, setUser} = useContext(UserContext)

    return (
        <div>
            <div className='flex justify-between items-center'>
                <Link to={'/leaderboard'} className='text-xl underline w-1/4'>Leaderboard</Link>
                {
                    user.loggedIn ? <h1 className='text-4xl w-2/4'>Welcome {user.name}</h1> : ''
                }
                {
                    !user.loggedIn && <Link to={'/login'} className='text-xl underline w-1/4'>Login</Link>
                }
                {
                    user.loggedIn && <Link to={'/profile'} className='text-xl underline w-1/4'>Profile</Link>
                }
            </div>
            <Link to={'/'}><h1 className='text-8xl underline mb-4 text-purple-600'>QuizGameZ</h1></Link>
            
            <h1 className='text-4xl underline mb-4 text-purple-600'>All In One Trivia Game</h1>
        </div>
    )
}

export default Nav;