import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Car from './Components/Car.jsx'
import Events from './Components/Events.jsx'
import Phone from './Components/Phone.jsx'
import Color from './Components/color.jsx'
function App() {
 const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
      <Car car={carinfo}/>
      <Events/>
      <Phone/>
      <Color/>
    </>
  )
}

export default App
