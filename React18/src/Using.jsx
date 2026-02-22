import { useFetch } from "./customHooks/useFetch";
const Using = () => {
  const { posts, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <div>Loading ....</div>;
  }

  return (
    <div>{posts && posts.map((ele) => <p key={ele.id}>{ele.title}</p>)}</div>
  );
};

export default Using;
