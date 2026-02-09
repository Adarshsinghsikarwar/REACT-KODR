import React from "react";
import { createRoot } from "react-dom/client";

let h1 = React.createElement("h1", { id: "h1" }, "Hello from user");
let h2 = React.createElement("h2", { id: "h2" }, "hello from me");

var div = React.createElement("div", { id: "parent" }, [h1, h2]);

let parent = document.getElementById("root");
createRoot(parent).render(div);
