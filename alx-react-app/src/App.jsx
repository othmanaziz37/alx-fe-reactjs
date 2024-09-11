import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/MainContent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WelcomeMessage />
     <Header />
     <Footer />
     <Main />
    </>
  )
}

export default App
