import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="md:px-20 flex mt-16">
      <div ref={ref} className=" w-[70%] mx-auto my-40">
        <div>
          <h2 className="font-bold">
            1. Tell us the differences between uncontrolled and controlled
            components ?
          </h2>
          <p>
            <span className="text-red-600 font-bold">Ans :</span> controlled and
            uncontrolled components important roles in a software system, but it
            is important for system architects and developers to carefully
            consider the differences between them and the potential impacts of
            each type on the system as a whole.
          </p>
        </div>
        <div className="my-10">
          <h2 className="font-bold">
            2. How to validate React props using PropTypes ?
          </h2>
          <p>
            <span className="text-red-600 font-bold">Ans :</span> React provides a utility called PropTypes for validating the props passed to a component. PropTypes allow you to define the expected types and shapes of the props that are passed into a component, and can help catch potential bugs or errors in your code.
          </p>
        </div>
        <div className="my-10">
          <h2 className="font-bold">
            3. Tell us the difference between nodejs and express js. ?
          </h2>
          <p>
            <span className="text-red-600 font-bold">Ans :</span>  Node.js is a JavaScript runtime that provides the core functionality for building server-side applications in JavaScript, while Express.js is a web framework built on top of Node.js that provides additional tools and features specifically for building web applications and APIs.
          </p>
        </div>
        <div className="my-10">
          <h2 className="font-bold">
            4. What is a custom hook, and why will you create a custom hook ?
          </h2>
          <p>
            <span className="text-red-600 font-bold">Ans :</span> In React, a custom hook is a function that allows you to extract and reuse logic from your components. Custom hooks are created by combining built-in hooks or other custom hooks, and can be used to share functionality between components or to abstract away complex or repetitive logic.
          </p>
        </div>
      </div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn btn-primary" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      {/* <button className="btn btn-primary">Download PDF</button> */}
    </div>
  );
};

export default Blog;
