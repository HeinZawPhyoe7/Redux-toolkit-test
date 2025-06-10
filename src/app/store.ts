import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import usesReducer from "../features/user/userSlice";

// const Logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: usesReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
});

export default store;
