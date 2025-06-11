import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  ordered,
  restocked,
  updateTempIceCreams,
  updateUsername,
} from "./icecreamSlice";

export const IcecreamView = () => {
  const numOfIcecreams = useAppSelector(
    (state) => state.icecream.numOfIceCreams
  );
  const username = useAppSelector((state) => state.icecream.username);
  const tempIceCreams = useAppSelector((state) => state.icecream.tempIceCreams);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        value={tempIceCreams}
        onChange={(e) =>
          dispatch(updateTempIceCreams(parseInt(e.target.value)))
        }
        placeholder="Restock Ice Cream Number"
      />
      <button onClick={() => dispatch(restocked(tempIceCreams))}>
        Restock ice creams
      </button>

      <br />

      <input
        type="text"
        value={username}
        onChange={(e) => dispatch(updateUsername(e.target.value))}
        placeholder="Enter Username"
      />
      <p>Username: {username}</p>
    </div>
  );
};
