import React, { useState, useEffect } from 'react';

const Color = () => {
    
    const [favoriteColor, setFavoriteColor] = useState("red")

useEffect(()=>{
    alert("useEffect reached")
},[favoriteColor]);

const changeToBlue = () => {
        setFavoriteColor("blue");
    };

    return (
        <>
        <h1>My favorite Color is {favoriteColor}</h1>
        <button onClick={changeToBlue}>
                Change to Blue
            </button>
        </>
    )


}


export default Color