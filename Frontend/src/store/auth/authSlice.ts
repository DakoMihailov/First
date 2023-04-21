import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/IUser';
import { RootState } from '..';

const initialState: State = {
	token: '',
	user: null,
};

interface State {
	token: '';
	user: IUser | null;
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		handleLogin: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
	},
});

export const selectUser = (state: RootState) => state.auth.user;

export const { handleLogin } = authSlice.actions;

export default authSlice.reducer;
