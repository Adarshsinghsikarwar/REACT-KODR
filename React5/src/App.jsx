import { useState } from "react";

const App = () => {
  const [user, setUser] = useState([
    {
      id: 1,
      email: "john@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "john",
        lastname: "doe",
      },
    },
    {
      id: 2,
      email: "morrison@gmail.com",
      username: "mor_2314",
      password: "83r5^_",
      name: {
        firstname: "david",
        lastname: "morrison",
      },
    },
  ]);

  return (
    <div>
      {user.map((ele) => (
        <div key={ele.id}>
          <h1>
            Name: {ele.name.firstname} {ele.name.lastname}
          </h1>
          <h1>Email: {ele.email}</h1>

          <button
            style={{ padding: "4px" }}
            onClick={() =>
              setUser((prev) => prev.filter((u) => u.id !== ele.id))
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
