import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userData: {}
}

export const UserSlice = createSlice({
	name: 'userdetails',
	initialState,
	reducers: {
		setUserDetails: (state, action) => {
			state.userData = { ...action.payload, isValidUser: true };
		},
		setInvalidUser: (state) => {
			state.userData = { ...state.userData, isValidUser: false }
		}
	}

})

export const { setUserDetails, setInvalidUser } = UserSlice.actions;

export default UserSlice.reducer;