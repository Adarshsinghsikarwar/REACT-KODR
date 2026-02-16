import { createContext, useState, useEffect } from "react";

export const Context = createContext();

// Default users data
const defaultUsers = [
  {
    id: 1,
    name: "Rahul",
    avatar: "👨",
    time: "",
    unread: 0,
    isOnline: true,
    isLogin: false,
    newMessage: [],
    friends: [
      {
        id: 1,
        name: "Shivam",
        avatar: "👨",
        lastMessage: "",
        time: "",
        unread: 0,
        isOnline: false,
        messages: {
          sendmessage: [],
          receivemessage: [],
        },
      },
      {
        id: 2,
        name: "Shubham",
        avatar: "👨",
        lastMessage: "",
        time: "",
        unread: 0,
        isOnline: false,
        messages: {
          sendmessage: [],
          receivemessage: [],
        },
      },
    ],
    groups: [],
  },
  {
    id: 2,
    name: "Shivam",
    avatar: "👨",
    time: "",
    unread: 0,
    isOnline: true,
    isLogin: false,
    newMessage: [],
    friends: [
      {
        id: 1,
        name: "Rahul",
        avatar: "👨",
        lastMessage: "",
        time: "",
        unread: 0,
        isOnline: false,
        messages: {
          sendmessage: [],
          receivemessage: [],
        },
      },
      {
        id: 2,
        name: "Shubham",
        avatar: "👨",
        lastMessage: "",
        time: "",
        unread: 0,
        isOnline: false,
        messages: {
          sendmessage: [],
          receivemessage: [],
        },
      },
    ],
    groups: [],
  },
  {
    id: 3,
    name: "Shubham",
    avatar: "👨",
    time: "",
    unread: 0,
    isOnline: true,
    isLogin: false,
    newMessage: [],
    friends: [
      {
        id: 1,
        name: "Rahul",
        avatar: "👨",
        lastMessage: "",
        time: "",
        unread: 0,
        isOnline: false,
        messages: {
          sendmessage: [],
          receivemessage: [],
        },
      },
      {
        id: 2,
        name: "Keshab",
        avatar: "👨",
        lastMessage: "",
        time: "",
        unread: 0,
        isOnline: false,
        messages: {
          sendmessage: [],
          receivemessage: [],
        },
      },
    ],
    groups: [],
  },
  {
    id: 4,
    name: "Keshab",
    avatar: "👨",
    time: "",
    unread: 0,
    isOnline: true,
    isLogin: false,
    newMessage: [],
    friends: [
      {
        id: 1,
        name: "Rahul",
        avatar: "👨",
        lastMessage: "",
        time: "",
        unread: 0,
        isOnline: false,
        messages: {
          sendmessage: [],
          receivemessage: [],
        },
      },
      {
        id: 2,
        name: "Shubham",
        avatar: "👨",
        lastMessage: "",
        time: "",
        unread: 0,
        isOnline: false,
        messages: {
          sendmessage: [],
          receivemessage: [],
        },
      },
    ],
    groups: [],
  },
];

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  // Load loginUser from localStorage on initial mount
  const [loginUser, setLoginUser] = useState(() => {
    const saved = localStorage.getItem("chatApp_loginUser");
    return saved ? JSON.parse(saved) : null;
  });

  // Load users from localStorage on initial mount, or use default if not found
  const [users, setUser] = useState(() => {
    const saved = localStorage.getItem("chatApp_users");
    return saved ? JSON.parse(saved) : defaultUsers;
  });

  const [selectedContact, setSelectedContact] = useState(null);

  // Save users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("chatApp_users", JSON.stringify(users));
    // alert("Saved users to localStorage");
  }, [users]);

  // Save loginUser to localStorage whenever it changes
  useEffect(() => {
    if (loginUser) {
      localStorage.setItem("chatApp_loginUser", JSON.stringify(loginUser));
      // alert("Saved loginUser to localStorage:", loginUser.name);
    } else {
      localStorage.removeItem("chatApp_loginUser");
    }
  }, [loginUser]);

  // ("Login User:", loginUser);
  // console.log("All Users:", users);

  return (
    <Context.Provider
      value={{
        toggle,
        setToggle,
        selectedContact,
        setSelectedContact,
        users,
        setUser,
        loginUser,
        setLoginUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
