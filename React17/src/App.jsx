import React, { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const res = await data.json();
    setPosts(res);
  };
  const getParticularPost = async (id) => {
      setLoading(true);
    const post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const res = await post.json();
    setLoading(false);
    setPost(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>
        <button
          onClick={() => {
            counter > 0 ? setCounter(counter - 1) : setCounter(1);
            getParticularPost(counter);
          }}
        >
          Prev
        </button>
        <br />
        <span>{post?.title}</span>
        <br />
        <button
          onClick={() => {
            setCounter(counter + 1);
            getParticularPost(counter);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
