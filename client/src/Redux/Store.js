import { configureStore } from "@reduxjs/toolkit";
import { ReactPressAPI } from "./Services/ReactPressAPI";

import UserReducer from "./UserSlice";

export const Store = configureStore({
	reducer: {
		[ReactPressAPI.reducerPath]: ReactPressAPI.reducer,
		user: UserReducer
	},
	middleware: (defaultMiddleware) => defaultMiddleware().concat(ReactPressAPI.middleware)
})