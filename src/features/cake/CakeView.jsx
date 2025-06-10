import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCakes);
  const Dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCake}</h2>
      <button onClick={() => Dispatch(ordered())}>Order Cake</button>
      <button onClick={() => Dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};
