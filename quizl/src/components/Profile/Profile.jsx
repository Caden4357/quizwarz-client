import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
const Profile = (props) => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/get/quizzes/' + user.id)
            .then(res => {
                console.log(res.data);
                setQuizzes(res.data)
                // setUser({name: res.data.name, email: res.data.email, loggedIn: true})
            })
            .catch(err => console.log(err))
    }, [])
    const logout = () => {
        axios.post('https://quizwarz-server.onrender.com/api/logout')
            .then(res => {
                setUser({name:'', email:'', loggedIn: false})
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <hr />
            <button onClick={logout} className='text-xl underline w-1/4'>Logout</button>
            <h1 className='text-4xl'>{user.name}'s Profile</h1>
            <h2 className='text-2xl'>Email: {user.email}</h2>
            <h2 className='text-2xl'>Quizzes Taken: {quizzes.length}</h2>
            <h2 className='text-2xl'>Quiz Results:</h2>
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
    )
}

export default Profile;