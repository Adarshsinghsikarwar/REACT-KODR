import React, { useEffect, useState } from "react";

const Exmaple = () => {
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(search);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {
    console.log("Debounce data :  ", debounce);

    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      setResult(data);
    }
    fetchData();
    console.log("Result data :  ", result);
  }, [debounce]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Something"
      />

      {result?.map((item) => {
        if (item.title.includes(debounce)) {
          return <p key={item.id}>{item.title}</p>;
        }
      })}
    </div>
  );
};

export default Exmaple;
