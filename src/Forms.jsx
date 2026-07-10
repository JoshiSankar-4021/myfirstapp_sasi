import { useState } from "react";

function Forms() {

  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    email: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: name === "age" ? Number(value) : value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3003/post1/user/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formdata)
      });

      const data = await res.json();
      console.log("Response:", data);

      alert("User added successfully");

    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <h1>Dynamic Form</h1>

      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handleChange}
        /><br />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formdata.age}
          onChange={handleChange}
        /><br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
        /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Forms;