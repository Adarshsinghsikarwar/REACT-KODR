import React, { useState } from "react";

const App = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  console.log(formData);
  let [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  // let [users, setUsers] = useState(
  //   JSON.parse(localStorage.getItem("users")) If we iterating this state. we have to do optional chaining
  // );
  console.log(users);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  let handleFormSubmit = (e) => {
    e.preventDefault();
    let arr = [...users, formData];
    setUsers(arr);
    localStorage.setItem("users", JSON.stringify(arr));
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="name"
        />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="email"
        />
        <input
          type="text"
          onChange={handleChange}
          name="mobile"
          placeholder="mobile"
        />
        <button>Submit</button>
      </form>
      {/* {users?.map((ele, idx) => (
        <h1 key={idx}>{ele}</h1>
      ))} */}
      {/* {users?.map((ele) => (
        <h1>{ele}</h1>
      ))} */}
    </div>
  );
};

export default App;
