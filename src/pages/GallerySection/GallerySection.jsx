import React from "react";
import LazyLoad from "react-lazy-load";

const GallerySection = () => {
  return (
    <div className="w-[90%] mx-auto my-20">
      <div className="text-center">
        <h2 className="text-center text-5xl mb-2">Our Best Food</h2>
        <p className="text-2xl">Gallery</p>
      </div>
      <div className="grid  md:grid-cols-4 ">
        <LazyLoad height={300} width={400} threshold={0.95}>
          <img
            className="mask mask-squircle"
            src="https://i.ibb.co/prM36Hp/gallery1.jpg"
          />
        </LazyLoad>
        <LazyLoad height={300} width={400} threshold={0.95}>
          <img
            className="mask mask-hexagon-2"
            src="https://i.ibb.co/dLd1kYB/gallery2.webp"
          />
        </LazyLoad>

        <LazyLoad height={300} width={400} threshold={0.95}>
          <img
            className="mask mask-pentagon"
            src="https://i.ibb.co/Ytk71H8/gallery4.webp"
          />
        </LazyLoad>

        <LazyLoad height={300} width={400} threshold={0.95}>
          <img
            className="mask mask-decagon"
            src="https://i.ibb.co/JxxbQ2H/gallery3.webp"
          />
        </LazyLoad>

        <LazyLoad height={300} width={400} threshold={0.95}>
          <img
            className="mask mask-squircle"
            src="https://i.ibb.co/6ggzLFP/gallery5.webp"
          />
        </LazyLoad>

        <LazyLoad height={300} width={400} threshold={0.95}>
          <img
            className="mask mask-hexagon-2"
            src="https://i.ibb.co/sj37QJd/gallery6.webp"
          />
        </LazyLoad>

        <LazyLoad height={300} width={400} threshold={0.95}>
          <img
            className="mask mask-pentagon"
            src="https://i.ibb.co/T49wF07/gallery7.jpg"
          />
        </LazyLoad>

        <LazyLoad height={300} width={400} threshold={0.95}>
          <img
            className="mask mask-decagon"
            src="https://i.ibb.co/2ZnFjgJ/gallery8.webp"
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default GallerySection;
