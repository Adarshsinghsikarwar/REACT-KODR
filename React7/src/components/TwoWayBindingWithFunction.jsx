import React, { useState } from "react";

const TwoWayBindingWithFunction = () => {
  let [FormData, setFormData] = useState({ name: "", email: "", mobile: "" });
  //   let formData = {};

  let [users, setUsers] = useState([]);
//   let [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  let handleFormSubmit = (e) => {
    e.preventDefault();
    let arr = [...users, FormData]
    setUsers(arr);
    localStorage.setItem("users",JSON.stringify(arr))
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Email"
          name="email"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Mobile"
          name="mobile"
        />
      </form>

      {users?.map((ele, id) => (
        <h1 key={id}>{ele}</h1>
      ))}
    </div>
  );
};

export default TwoWayBindingWithFunction;
