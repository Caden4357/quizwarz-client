import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
const Profile = (props) => {
    const { user, setUser } = useContext(UserContext)
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        axios.get('https://quizwarz-server.onrender.com/api/get/quizzes', {withCredentials: true})
            .then(res => {
                console.log(res.data);
                setQuizzes(res.data)
                // setUser({name: res.data.name, email: res.data.email, loggedIn: true})
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1 className='text-4xl'>Profile</h1>
            <h2 className='text-2xl'>Name: {user.name}</h2>
            <h2 className='text-2xl'>Email: {user.email}</h2>
            <h2 className='text-2xl'>Quizzes Taken: {quizzes.length}</h2>
            <h2>Quiz Results:</h2>
            {
                quizzes.map((quiz, idx) => {
                    return (
                        <div key={idx} className='border-2 border-black p-2 my-2'>
                            <h3>Category: {quiz.category}</h3>
                            <h3>Score: {quiz.score}/5</h3>
                        </div>
                    )
                })
            }
        </div>
)}

export default Profile;