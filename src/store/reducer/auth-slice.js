import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: localStorage.getItem("user"),
  userId: localStorage.getItem("userId"),
  isLoggin: localStorage.getItem("isLoggin"),
};

const authSlice = createSlice({
  name: "authenication",
  initialState: initialAuthState,

  reducers: {
    login(state, action) {
      state.token = action.payload.tokenId;
      localStorage.setItem("user", action.payload.tokenId);
      state.userId = action.payload.userId;
      localStorage.setItem("userId", action.payload.userId);
      state.isLoggin = true;
      localStorage.setItem("isLoggin", true);
    },
    logout(state) {
      state.token = null;
      state.userId = null;
      state.isLoggin = true;
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggin");
    },
  },
});

export const Authactions = authSlice.actions;

export default authSlice.reducer;
