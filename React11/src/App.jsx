import { useState } from "react";
import Form from "./components/Form";
const App = () => {
  const [toggle, setToggle] = useState(true);
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  return (
    <div className="h-screen w-full flex bg-red-100">
      <div className="w-[20%] border-r p-5">
        <div className="w-[40%] flex gap-4">
          <div className="">
            <img
              className="w-full"
              src="https://img.freepik.com/premium-vector/notes-icon-logo-vector-design-template_827767-4987.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">Adarsh Notes</h1>
        </div>
        <div className="">
          {notes.map((ele) => (
            <button
              key={ele.id}
              className="px-10 py-2 bg-black text-white mb-10"
            >
              {ele.title}
            </button>
          ))}
          <br />
          <button
            onClick={() => setToggle(true)}
            className="px-10 py-2 bg-black text-white"
          >
            Create Note
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        {toggle && (
          <Form notes={notes} setToggle={setToggle} setNotes={setNotes} />
        )}
      </div>
    </div>
  );
};

export default App;
