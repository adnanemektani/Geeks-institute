import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
  {name: "Php", votes: 0},
  {name: "Python", votes: 0},
  {name: "JavaScript", votes: 0},
  {name: "Java", votes: 0}
])
 const addVote = (name) => {
  setLanguages(languages.map((language)=> 
  language.name === name 
   ? {...language, votes: language.votes + 1} 
    : language
))
 }


  return (
    <>
    <h1>Vote Your Language</h1>
    {languages.map((language) => (
  <div key={language.name}>
    <p>{language.votes}</p>
    <p>{language.name}</p>
    <button onClick={() => addVote(language.name)}>Click Here</button>
  </div>
))}
    </>
  )
}

export default App
