import SideBar from "./SideBar";
const LayOut = ({ obj, sayHello } ) => {
  return (
    <div className="h-screen w-full px-15 py-10 flex flex-col gap-3">
      <h1 className="text-3xl"> DashBoard Layout</h1>
      <SideBar obj={obj} sayHello={sayHello} />
    </div>
  );
};

export default LayOut;
