import React from "react";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const ChefsCart = ({ chefdata }) => {

    const {id, exprience, picture, rating,  recipes, like, name} = chefdata;

  console.log(chefdata);
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
        className="h-[400px] w-[100%]"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Exprience : {exprience}</p>
        <p>Recipes : {recipes}</p>
        <p className="flex items-center gap-2">Likes : {like} <AiFillLike className="text-blue-500"></AiFillLike></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link to={`/chfesdetails/${id}`}>View Recipes</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ChefsCart;
