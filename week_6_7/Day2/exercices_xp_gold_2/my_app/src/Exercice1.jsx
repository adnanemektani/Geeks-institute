import { useState } from "react";

function Exercice1() {
  const [formData, setFormData] = useState({
    Title: "",
    Author: "",
    Genre: "",
    YearReleased: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setSuccessMessage("data sent!");
  };

  return (
    <div>
      <h1>New Book</h1>

      {successMessage && <p>{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Title">Title</label>
          <input id="Title" name="Title" type="text" value={formData.Title} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="Author">Author</label>
          <input id="Author" name="Author" type="text" value={formData.Author} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="Genre">Genre</label>
          <input id="Genre" name="Genre" type="text" value={formData.Genre} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="YearReleased">Year Published</label>
          <input
            id="YearReleased"
            name="YearReleased"
            type="text"
            value={formData.YearReleased}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Exercice1;
