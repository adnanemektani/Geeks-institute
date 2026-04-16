import {useState} from 'react'
function Events(){
const clickMe =()=>{
       alert("I was clicked")
}
const handlekeyDown = (event) =>{
    if (event.key === "Enter"){
        alert(event.target.value)
    }
}
const [isToggleOn, setIsToggleOn]= useState(true)
const toggle = () => {
    setIsToggleOn(!isToggleOn)
} 
       return (
        <>
        <input onKeyDown= {handlekeyDown}></input>
        <button type="button" onClick={clickMe}>clicked</button>
        <button onClick={toggle}>{isToggleOn ? "ON" : "OFF"}</button>

        </>
       )      
}
export default Events 



