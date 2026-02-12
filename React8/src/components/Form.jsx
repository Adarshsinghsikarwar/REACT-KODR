import React from "react";
import { useState } from "react";

const Form = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    skills: "",
    experience: "",
    majorProduct: "",
    file: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id)
    if(id == "skills"){
      if(formData.skills.includes(value)){
        let prevSkills = formData.skills;
        setFormData((prevData) => ({ ...prevData, [id]:
           prevSkills.replace(value + " , ", "" ) }));
        return;
      }
      let prevSkills = formData.skills;
      setFormData((prevData) => ({ ...prevData, [id]: prevSkills + value + " , " }));
      return;
    }
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <div className="h-screen w-full bg-green-100 flex justify-center items-center gap-20">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[40%] h-[80vh] bg-red-100"
      >
        <input
          onChange={handleChange}
          type="text"
          id="name"
          placeholder="Enter name"
        />
        <input
          onChange={handleChange}
          type="email"
          id="email"
          placeholder="Enter email"
        />
        <input
          onChange={handleChange}
          type="text"
          id="age"
          name="age"
          placeholder="Enter Age"
        />
        <span>Select Gender :</span>
        <select
          onChange={handleChange}
          className="w-[20%] mx-2"
          name=""
          id="gender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <h1>Skills : </h1>
        <input
          onChange={handleChange}
          type="checkbox"
          id="skills"
          value="React"
        />
        React
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="skills"
          value="Node"
        />
        Node
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="skills"
          value="Mongo"
        />
        Mongo
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="skills"
          value="Express"
        />{" "}
        Express
        <br />
        <input
          onChange={handleChange}
          id="experience"
          type="text"
          placeholder="Experience(Years)"
        />
        <br />
        <input onChange={handleChange} id="file" type="file" />
        <input
          onChange={handleChange}
          id="bio"
          type="text"
          placeholder="Short Note (Max 150 chars)"
        />
        <div className="text-center">
          <button className="bg-blue-500 text-center">Submit</button>
        </div>
      </form>
      <div className="w-[40%] h-[80vh] bg-zinc-100">
        <img
          className="w-[60%] h-[20vh] bg-zinc-400 rounded-xl"
          src="https:locla"
          alt=""
        />
        <div>
          <h1>Name :{formData.name} </h1>
          <h1>Email : {formData.email} </h1>
          <h1>Age :{formData.age} </h1>
          <h1>Skills : {formData.skills}</h1>
          <h1>Gender : {formData.gender} </h1>
          <h1>Experience : {formData.experience} </h1>
          <h1>Bio : {formData.bio} </h1>
        </div>
      </div>
    </div>
  );
};

export default Form;
