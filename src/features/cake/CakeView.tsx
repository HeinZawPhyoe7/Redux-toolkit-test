// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const numOfCake = useAppSelector((state) => state.cake.numOfCakes);
  const Dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCake}</h2>
      <button onClick={() => Dispatch(ordered())}>Order Cake</button>
      <button onClick={() => Dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};
