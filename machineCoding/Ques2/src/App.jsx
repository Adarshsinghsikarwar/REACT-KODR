import React, { useState, useEffect, useRef, useCallback } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef();

  const fetchData = async () => {
    setLoading(true);

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    const data = await res.json();

    setItems((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div>
      {items.map((item, index) => {
        if (index === items.length - 1) {
          return (
            <div ref={lastElementRef} key={item.id}>
              {item.title}
            </div>
          );
        }
        return <div key={item.id}>{item.title}</div>;
      })}

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default App;
