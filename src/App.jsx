import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import NavBar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-gray-600 font-serif bg-gray-100  grid grid-cols-3">
      <NavBar/>
      < LandingPage/>
    </div>
  )
}

export default App
