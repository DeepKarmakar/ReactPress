import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userData: {}
}

export const UserSlice = createSlice({
	name: 'userdetails',
	initialState,
	reducers: {
		setUserDetails: (state, action) => {
			state.userData = action.payload;
		},
	}

})

export const { setUserDetails } = UserSlice.actions;

export default UserSlice.reducer;