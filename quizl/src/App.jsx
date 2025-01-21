import { QuizProvider } from './context/QuizContext'
import { UserProvider } from './context/UserContext'
import './App.css'
import Homepage from './components/Homepage/Homepage'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Category from './components/Categories/Category'
import Quiz from './components/Homepage/Quiz'
import Login from './components/LoginReg/Login'
import Reg from './components/LoginReg/Reg'
import Leaderboard from './components/Leaderboard/Leaderboard'
// ! Immediate fixes
// ! Timer is not working properly it needs to reset when the next question is loaded currently it just keeps counting down
// ? Add a feature to choose a category ✔️
// ? Add context for question and score ✔️
// ? Timer on each question 🐛 BUG HERE 
// ? Allow user to choose the time for each question from a list of options (10, 15, 30 seconds) for example
// ? Add a feature to choose the difficulty of the questions
// ? Add another harder difficulty generated by AI 
// ? Add a feature to choose the number of questions
// ? add a feature to get a hint for the question
// ? Add a leaderboard
// ? Mobile version with react native
// ? PVP???

function App() {
  return (
    <div>
      <UserProvider>
        <QuizProvider>
          <Nav />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Reg />} />
            <Route path='/leaderboard' element={<Leaderboard/>} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/categories' element={<Category />} />
          </Routes>
        </QuizProvider>
      </UserProvider>
    </div>
  )
}

export default App
