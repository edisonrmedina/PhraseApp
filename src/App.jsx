import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhraseComponent from './Components/PhraseComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PhraseComponent/>
    </>
  )
}

export default App
