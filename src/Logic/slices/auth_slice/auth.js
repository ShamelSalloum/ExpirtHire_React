import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",

  initialState: {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    username: "",
    sex: "",
    birth_date: "",
    token: null,
    isBaned: false,
    role: "guest",
    isAuthenticated: false,
    isSuccess: false,
  },

  reducers: {
    setIsSuccess(state, action) {
      state.isSuccess = action.payload;
    },
    setRole(state, action) {
      state.role = action;
    },

    loginSuccess(state, action) {
      const user = action.payload.user;
      state.birth_date = user.birth_date;
      state.first_name = user.first_name;
      state.last_name = user.last_name;
      state.username = user.username;
      state.sex = user.sex;
      state.phone = user.phone;
      state.email = user.email;
      state.role = user.role;
      state.isBaned = user.ban;
      console.log(user);
      if (action.payload.token) {
        state.token = action.payload.token;
        state.isAuthenticated = true;
      }
    },

    logout(state) {
      state.error = null;
      state.isLoading = false;
      state.isAuthenticated = false;
      state.token = null;
      state.isSuccess = false;
      state.role = "guest";
    },
  },
});

export const {
  loginFail,
  loginPending,
  logout,
  loginSuccess,
  setToken,
  setRole,
  setIsSuccess,
} = authSlice.actions;

export default authSlice.reducer;
