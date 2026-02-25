import React from "react";
import { memo } from "react";

const child2 = memo(({ child2, child2Click }) => {
  console.log("rendering 2");
  return (
    <div>
      <p>child2 Value : {child2}</p>
      <button className="text-3xl px-3 py-1 bg-zinc-200" onClick={child2Click}>
        change child2
      </button>
    </div>
  );
});

export default child2;
