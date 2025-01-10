
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Todo } from './pages/Todo'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/" element={<Todo/>} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
