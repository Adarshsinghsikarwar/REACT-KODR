import { useEffect, useState } from "react";

const Debounce = () => {
  const [search, setSearch] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [result, setResult] = useState([]);

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // API call
  useEffect(() => {
    console.log("Debounce Query : ", debounceQuery);

    if (debounceQuery === "") {
      setResult([]);
      return;
    }

    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      // filtering based on search
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(debounceQuery.toLowerCase())
      );

      setResult(filtered);
    }

    fetchData();
  }, [debounceQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {result.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Debounce;