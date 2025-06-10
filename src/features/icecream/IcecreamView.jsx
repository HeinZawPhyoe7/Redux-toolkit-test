import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const [value, setValue] = useState("");
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIceCreams);
  const Dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => Dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        placeholder="Restock Ice Cream Number"
      />
      <button onClick={() => Dispatch(restocked(value))}>
        Restock ice creams
      </button>
    </div>
  );
};
