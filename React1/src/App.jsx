import Count from "./Count";
const App = (params) => {
  // console.log(params);

  let Fn = () => {};
  return (
    <div>
      <Count Fn={<Fn />} />
    </div>
  );
};

export default App;
