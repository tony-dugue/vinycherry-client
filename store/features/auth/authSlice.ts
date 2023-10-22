import { UserDto } from '@/store/services/userApi';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserDto | undefined;
}

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: undefined,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    setUserInformation: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
  },
});

export const { 
  setAuth, 
  setUserInformation, 
  logout, 
  finishInitialLoad 
} = authSlice.actions;

export default authSlice.reducer;
