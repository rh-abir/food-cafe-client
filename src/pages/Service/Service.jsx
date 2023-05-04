import React from "react";

const Service = () => {
  return (
    <div className="md:px-24 my-20">
      <div className="my-20">
        <h2 className="text-center text-5xl mb-2">Know Coking !</h2>
        <p className="text-center"> Explore amazing  form our chefs</p>
      </div>

      <div className="grid md:grid-cols-4 gap-10">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/1b6BWL4/service1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Easy cheesy noodles</h2>
            <p>Free</p>
            
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/TYm3NQ8/service2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Slow cooker chicken chow mein</h2>
            <p>Free</p>
            
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/xDgFCTh/service3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">chicken and corn noodle soup</h2>
            <p>Free</p>
            
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/wcYvWFV/service4.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">One-pot winter chicken</h2>
            <p>Free</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
