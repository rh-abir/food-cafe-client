import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import TableData from "../Shared/TableData/TableData";
import { Rating } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LazyLoad from "react-lazy-load";




const ChefsDetails = () => {
  const detailsData = useLoaderData();
  //   console.log(detailsData);
  const {
    description,
    exprience,
    like,
    name,
    picture,
    rating,
    recipe,
    recipes,
  } = detailsData;

  const [disable, setDisable] = useState(false)
  const handleFavourite  = () => {
    setDisable(true)
        toast("Add Favourite!");
  }


  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mt-10">
        <figure className="w-[50%]">
          <LazyLoad threshold={0.70}><img className="rounded-none h-[400px]" src={picture} alt="chef" /></LazyLoad>
        </figure>
        <div className="card-body w-[50%]">
          <h2 className="card-title">{name}</h2>
          <p>
            {description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Numquam blanditiis rem distinctio atque soluta quae tempora
            inventore quasi perferendis necessitatibus ut alias velit natus sit
            nisi veniam architecto, fugiat fuga.
          </p>
          <div className="flex gap-4">
            <h2 className="card-title">Recip: {recipes}</h2>
            <h2 className="card-title">Experience : {exprience} Years</h2>
            <h2 className="card-title">
              <AiFillLike></AiFillLike> {like}
            </h2>

            <h2 className="card-title flex">
              <Rating name="read-only" value={rating} readOnly />
            </h2>

            <button onClick={handleFavourite } className="btn btn-primary" disabled = {disable}>Add Fo Favourite</button>
          </div>
        </div>
      </div>

      <div className="my-20 w-[50%] mx-auto">
        <h2 className="text-center my-5 text-3xl">Coking respi</h2>

        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Ingredients</th>
              </tr>
            </thead>
            <tbody>
              {recipe?.map((rec) => (
                <TableData key={rec.id} rec={rec}></TableData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ChefsDetails;
