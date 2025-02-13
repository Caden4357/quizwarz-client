import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { QuizContext } from '../../context/QuizContext';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
const FinalGame = ({ finalGame }) => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const { gameReducer, dispatch } = useContext(QuizContext)

    const resetGame = async () => {
        dispatch({ type: 'RESET_GAME' })
        navigate('/')
    }
    return (
        <div>
            <h1 className='text-4xl font-bold underline mb-4 text-purple-600'>Final Score: {finalGame.score}</h1>
            <h2 className='text-4xl font-bold underline mb-4 text-purple-600'>Category: {finalGame.category}</h2>
            <h2 className='text-4xl font-bold underline mb-4 text-purple-600'>Number of Questions: {finalGame.numberOfQuestions}</h2>
            <button onClick={resetGame}>Reset</button>
        </div>
    )
}

export default FinalGame;