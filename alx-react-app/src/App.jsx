import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WelcomeMessage />
     <Header />
     <MainContent />
     <Footer />
    
    </>
  )
}

export default App
