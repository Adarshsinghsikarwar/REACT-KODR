import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const data = await fetch(url);
      const res = await data.json();
      setPosts(res);
    } catch (err) {
      console.warn(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return { posts, loading,setLoading,setPosts };
};
