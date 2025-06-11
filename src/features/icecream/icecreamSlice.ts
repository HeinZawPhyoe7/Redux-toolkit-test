import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type InitialState = {
  numOfIceCreams: number;
  tempIceCreams: number;
  username: string;
};

const initialState: InitialState = {
  numOfIceCreams: 20,
  tempIceCreams: 0,
  username: "",
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updateTempIceCreams: (state, action: PayloadAction<number>) => {
      state.tempIceCreams = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked, updateUsername, updateTempIceCreams } =
  icecreamSlice.actions;
