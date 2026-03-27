import './App.css'
import UserFavoriteAnimals from './components/UserFavoriteAnimals'
import Exercice from './components/Exercice';
function App() {
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  //exercice2
  const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

  //Part2
  const styleHeader = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

  return (
    <>
     <p>Hello World!</p>
     {myElement}
     <p>React is {sum} times better with JSX</p>
     <h3>{user.firstName}</h3>
     <h3>{user.lastName}</h3>
     <Exercice />
     <UserFavoriteAnimals favAnimals={user.favAnimals} />
     <h1 style={styleHeader}>Styled Header</h1>
    </>

  )
}

export default App
