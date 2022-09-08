import { configureStore, createSlice } from "@reduxjs/toolkit";

const authInitialState = { isAuthenticated: false, userId: null, name: null };

const authenticationSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(currentState) {
      currentState.isAuthenticated = true;
    },
    logout(currentState) {
      currentState.isAuthenticated = false;
    },
    setUserId(currentState, action) {
      currentState.userId = action.payload;
    },
    setName(currentState, action) {
      currentState.name = action.payload;
    }
  },
});

const store = configureStore({
    reducer: authenticationSlice.reducer
});

export const authActions = authenticationSlice.actions;

export default store;
