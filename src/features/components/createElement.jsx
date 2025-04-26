import { createElement } from "react";

function Greeting({ name }) {
  return createElement(
    "h1",
    { className: "greeting" },
    createElement("span", { name: "span" }, `Hello ${name}`)
  );
}

export default Greeting;
