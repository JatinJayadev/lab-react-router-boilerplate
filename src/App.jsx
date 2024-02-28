import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './Pages/Contact'
import About from './Pages/about'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Contact" element={<Contact />}></Route>
        <Route exact path="*" element={<h1>Error 404 !</h1>}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes >
    </div>
  )
}

export default App
