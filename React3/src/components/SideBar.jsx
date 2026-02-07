import Content from "./Content";
const SideBar = ({ obj, sayHello }) => {
  return (
    <div className="h-[60vh] w-[95%] border rounded px-5 py-5">
      <h1 className="text-3xl">Sidebar</h1>
      <Content obj={obj} sayHello={sayHello} />
    </div>
  );
};

export default SideBar;
