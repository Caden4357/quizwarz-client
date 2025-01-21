import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { motion } from 'framer-motion'
import startQuiz from '../../functions/Quiz';
import { Link, useNavigate } from 'react-router-dom'
const Homepage = (props) => {
    const navigate = useNavigate()
    // const {currentGame, setCurrentGame} = useContext(QuizContext)
    const {gameReducer, dispatch} = useContext(QuizContext)


    const beginQuiz = async (e) => {
        const game = await startQuiz()
        console.log('GAME', game);
        // ! simplify this to one dispatch
        dispatch({type: 'SET_SCORE', payload: 0})
        dispatch({type: 'SET_QUESTION_IDX', payload: 0})
        dispatch({type: 'SET_CATEGORY', payload: game.category})
        dispatch({type: 'SET_QUESTIONS', payload: game})
        setTimeout(() => {
            navigate('/quiz')
        }, 200);
    }

    return (
        <div>
            <div>
                <motion.div
                    className='text-black text-3xl p-2 bg-purple-400 rounded-xl w-fit mx-auto cursor-pointer'
                    onClick={beginQuiz}
                    initial={{ scale: .95 }}
                    animate={{ scale: 1.25 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                >
                    Try A Quick Random Round
                </motion.div>
                <Link className='text-black block text-3xl p-2 bg-purple-400 rounded-xl w-fit mx-auto cursor-pointer m-6' to={'/categories'}>Select A Category</Link>
            </div>
        </div>
    )
}

export default Homepage;