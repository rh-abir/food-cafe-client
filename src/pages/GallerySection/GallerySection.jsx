import React from "react";

const GallerySection = () => {
  return (
    <div className="w-[90%] mx-auto my-20">
      <div className="text-center">
        <h2 className="text-center text-5xl mb-2">Our Best Food</h2>
        <p>Gallery</p>
      </div>
      <div className="grid  md:grid-cols-4 ">
        <img
          className="mask mask-squircle"
          src="https://i.ibb.co/prM36Hp/gallery1.jpg"
        />
        <img
          className="mask mask-hexagon-2"
          src="https://i.ibb.co/dLd1kYB/gallery2.webp"
        />
        <img
          className="mask mask-pentagon"
          src="https://i.ibb.co/Ytk71H8/gallery4.webp"
        />
        <img
          className="mask mask-decagon"
          src="https://i.ibb.co/JxxbQ2H/gallery3.webp"
        />
        <img
          className="mask mask-squircle"
          src="https://i.ibb.co/6ggzLFP/gallery5.webp"
        />
        <img
          className="mask mask-hexagon-2"
          src="https://i.ibb.co/sj37QJd/gallery6.webp"
        />
        <img
          className="mask mask-pentagon"
          src="https://i.ibb.co/T49wF07/gallery7.jpg"
        />
        <img
          className="mask mask-decagon"
          src="https://i.ibb.co/2ZnFjgJ/gallery8.webp"
        />
      </div>
    </div>
  );
};

export default GallerySection;
