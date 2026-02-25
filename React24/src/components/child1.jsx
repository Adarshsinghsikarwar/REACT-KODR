import React from "react";
import { memo } from "react";

const child1 = memo(({ child1, child1Click  }) => {
  console.log("rendering 1");
  return (
    <div>
      <p>child1 Value : {child1}</p>
      <button
        className="text-3xl px-3 py-1 bg-zinc-200"
        onClick={child1Click}
      >
        {" "}
        change child1
      </button>
    </div>
  );
});

export default child1;
