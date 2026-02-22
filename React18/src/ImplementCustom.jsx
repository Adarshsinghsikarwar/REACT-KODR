import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "./customHooks/useFetch";

const ImplementCustom = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { posts, loading, setLoading, setPosts } = useFetch(url);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  console.log(posts);

  const [showForm, setShowForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const addPost = async (title, content) => {
    setLoading(true);
    const data = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        body: content,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const res = await data.json();
    const newPost = { ...res, id: Date.now(), userId: 1 };
    setPosts((prev) => [...prev, newPost]);
    alert("New Post created");
    setTitle("");
    setContent("");
    setShowForm(false);
    setLoading(false);
  };

  const deletePost = async (id) => {
    // setLoading(true);
    const data = await fetch(url + `/${id}`, { method: "DELETE" });
    const res = await data.json();
    alert("post deleted");
    setPosts((prev) => prev.filter((post) => id !== post.id));
    // setLoading(false);
  };

  const updatePost = async (id, title, content) => {
    setLoading(true);
    if (id <= 100) {
      try {
        const data = await fetch(url + `/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            title,
            body: content,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const res = await data.json();
        setPosts((prev) => prev.map((post) => (post.id === id ? res : post)));
      } catch (err) {
        console.error("Update failed", err);
      } finally {
        setLoading(false);
      }
    } else {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === id ? { ...post, title, body: content } : post
        )
      );
        setLoading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both fields");
      return;
    }
    addPost(title, content);
  };

  const submitUpdateHandler = (e) => {
    e.preventDefault();
    if (currentPost) {
      updatePost(currentPost.id, title, content);
      alert("Post updated successfully");
      setUpdateForm(false);
      setCurrentPost(null);
      setTitle("");
      setContent("");
    }
  };
  return (
    <div className="h-screen w-full  px-10 py-5">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-medium"> All the post Data</h1>
        <h1 className="text-xl font-semibold">
          Post Count : {posts?.length}{" "}
          {loading && <span className="text-blue-500 ml-2">loading...</span>}
        </h1>
        <button
          onClick={() => {
            setTitle("");
            setContent("");
            setShowForm(true);
          }}
          className="px-8 py-2 bg-green-300 text-xl rounded font-semibold"
        >
          Create Post
        </button>
      </div>
      <div className=" flex flex-wrap justify-between gap-10 p-5">
        {loading && posts.length === 0 ? (
          <h1 className="text-2xl font-medium w-full text-center">
            loading...
          </h1>
        ) : (
          posts?.map((post, index) => (
            <div
              key={post.id || index}
              className="w-[320px] px-4 py-2 rounded flex flex-col gap-5 bg-zinc-200 "
            >
              <div>
                <h1 className="text-xl font-medium">
                  Title :{" "}
                  {post?.title.length > 14
                    ? post.title.substring(0, 14) + " ..."
                    : post.title}
                </h1>
                <h1 className="text-xl font-medium">
                  Content :{" "}
                  <span>
                    {post?.body.length > 17
                      ? post.body.substring(0, 17) + " ..."
                      : post.body}
                  </span>
                </h1>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setUpdateForm(true);
                    setCurrentPost(post);
                    setTitle(post.title || "");
                    setContent(post.body || "");
                  }}
                  className="px-4 py-1 whitespace-nowrap bg-blue-400 rounded text-xl text-white"
                >
                  Update Post
                </button>
                <button
                  onClick={() => deletePost(post.id || index)}
                  className="px-4 py-1 whitespace-nowrap bg-red-400 rounded text-xl text-white"
                >
                  Delete Post
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-red-100 p-8 rounded-lg relative">
            <button
              onClick={() => {
                setShowForm(false);
                setTitle("");
                setContent("");
              }}
              className="absolute top-2 right-4 text-2xl font-bold"
            >
              &times;
            </button>
            <h1 className="text-xl text-center font-semibold mb-4">
              Create Your post
            </h1>
            <form onSubmit={submitHandler} className="w-80">
              <input
                className="border w-full p-2 mb-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Title"
              />
              <input
                className="border w-full p-2 mb-4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                placeholder="Enter Content"
              />
              <button className="w-full rounded py-2 bg-blue-500 text-white text-xl">
                {loading ? "loading..." : "Create Post"}
              </button>
            </form>
          </div>
        </div>
      )}
      {updateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-red-100 p-8 rounded-lg relative">
            <button
              onClick={() => {
                setUpdateForm(false);
                setCurrentPost(null);
                setTitle("");
                setContent("");
              }}
              className="absolute top-2 right-4 text-2xl font-bold"
            >
              &times;
            </button>
            <h1 className="text-xl text-center font-semibold mb-4">
              Update Your post
            </h1>
            <form onSubmit={submitUpdateHandler} className="w-80">
              <input
                className="border w-full p-2 mb-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Title"
              />
              <input
                className="border w-full p-2 mb-4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                placeholder="Enter Content"
              />
              <button className="w-full rounded py-2 bg-blue-500 text-white text-xl">
                {loading ? "loading..." : "Update Post"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImplementCustom;
