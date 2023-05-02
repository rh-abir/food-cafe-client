import React from "react";
import Footer from "../pages/Shared/Footer/Footer";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Footer></Footer>
    </div>
  );
};

export default Main;
