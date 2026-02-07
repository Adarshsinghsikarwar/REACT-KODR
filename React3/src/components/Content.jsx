import ProfileCard from "./ProfileCard";
const Content = ({obj,sayHello}) => {
  return (
    <div className="h-[50vh] w-[95%] border rounded px-5 py-5 mt-3">
      <h1 className="text-3xl">Content Area</h1>
      <ProfileCard obj = {obj} sayHello = {sayHello} />
    </div>
  );
};

export default Content;
