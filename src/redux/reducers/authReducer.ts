import {createSlice} from '@reduxjs/toolkit';

type IAuth = {
  id: string;
  email: string;
  accessToken: string;
};

const initialState: IAuth = {
  id: '',
  email: '',
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.authData = action.payload;
    },
    logout: (state, action) => {
      state.authData = action.payload;
    },
  },
});
export const authReducer = authSlice.reducer;

export const {addAuth, logout} = authSlice.actions;
export const authSelector = (state: any) => state.authReducer.authData;
