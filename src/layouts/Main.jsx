import React from "react";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import ChefsSection from "../pages/ChefsSection/ChefsSection";
import Service from "../pages/Service/Service";
import GallerySection from "../pages/GallerySection/GallerySection";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Service></Service>
      <ChefsSection></ChefsSection>
      <GallerySection></GallerySection>
      <Footer></Footer>
    </div>
  );
};

export default Main;
