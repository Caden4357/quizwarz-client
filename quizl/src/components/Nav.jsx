import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Nav = ({ beginQuiz }) => {
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