import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  return (
    <div
      className="w-[100%] h-[300px] md:h-[600px] text-white bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(" + "https://i.ibb.co/98txGnT/banner-bg.jpg" + ")",
      }}
    >
      <NavigationBar></NavigationBar>

    </div>
  );
};

export default Header;
