import { useState } from "react";

function Forms() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(null);
  const [errormessage, setErrormessage] = useState("");
  const [message, setMessage] = useState("The content of a textarea goes in the value attribute.");
  const [car, setCar] = useState("Volvo");

  const myChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
      return;
    }

    if (name === "age") {
      setAge(value);

      if (value !== "" && Number.isNaN(Number(value))) {
        setErrormessage("Your age must be a number.");
      } else {
        setErrormessage("");
      }
    }
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    alert(`You are submitting ${username}`);
  };

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCarChange = (event) => {
    setCar(event.target.value);
  };

  let header = null;

  if (username || age) {
    header = (
      <h1>
        Hello {username || "Guest"}
        {age ? `, you are ${age} years old.` : "."}
      </h1>
    );
  }

  return (
    <div>
      {header}

      <form onSubmit={mySubmitHandler}>
        <p>
          Enter your name:
          <input type="text" name="username" value={username} onChange={myChangeHandler} />
        </p>

        <p>
          Enter your age:
          <input type="text" name="age" value={age ?? ""} onChange={myChangeHandler} />
        </p>

        {errormessage && <p>{errormessage}</p>}

        <button type="submit">Submit</button>
      </form>

      <h2>Textarea</h2>
      <textarea value={message} onChange={handleTextareaChange} />

      <h2>Select</h2>
      <p>Your favorite car is {car}</p>
      <select value={car} onChange={handleCarChange}>
        <option value="Volvo">Volvo</option>
        <option value="Ford">Ford</option>
        <option value="BMW">BMW</option>
        <option value="Fiat">Fiat</option>
      </select>
    </div>
  );
}

export default Forms;
