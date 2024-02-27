import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h2 className="heading" tabIndex="5">
    Namaste React from JSX
  </h2>
);

// Normal JS function
const Title = function () {
  return <h1>Namaste React Title</h1>;
};

// React Functional Component
// Component Composition
const FunctionalComponent = () => {
  return (
    <div id="container">
      <Title />
      {heading}
      <h3 className="heading">Namaste React from functional Component</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);
