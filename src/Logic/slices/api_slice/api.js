import { createSlice } from "@reduxjs/toolkit";

export const ApiSlice = createSlice({
  name: "httpGet",
  initialState: {
    //user
    webQuestions: [],
    videoQuestions: [],
    logoQuestions: [],
    buildingQuestions: [],
    requests: [],
    //Admin
    users: [],
    user: {},
    banedUsers: [],
    AcceptedRequests: {},
    PendingRequests: {},
    RejectedRequests: {},
    AdminRequests: {},
    //shared
    request: {},
  },
  reducers: {
    setAdminRequests(state, action) {
      if (action.payload === "rejected") {
        state.AdminRequests = state.RejectedRequests;
      } else if (action.payload === "accepted") {
        state.AdminRequests = state.AcceptedRequests;
      } else {
        state.AdminRequests = state.PendingRequests;
      }
    },
    setUsers(state, action) {
      state.users = action.payload
    },
    setBanedUsers(state, action) {
      state.banedUsers = action.payload;
    },
    setUser(state, action) {
      state.user = state.users.find((user) => user._id === action.payload);
    },
    setBanedUser(state, action) {
      state.user = state.banedUsers.find((user) => user._id === action.payload);
    },
    setAcceptedRequests(state, action) {
      state.AcceptedRequests = action.payload;
    },
    setRejectedRequests(state, action) {
      state.RejectedRequests = action.payload;
    },
    setPendingRequests(state, action) {
      state.PendingRequests = action.payload;
    },
    setQuestions(state, action) {
      state.webQuestions = action.payload.web;
      state.videoQuestions = action.payload.video;
      state.logoQuestions = action.payload.logo;
      state.buildingQuestions = action.payload.building;
    },
    setRequests(state, action) {
      state.requests = action.payload;
    },
    getRequest(state, action) {
      state.request = state.requests.find(
        (req) => req._id === action.payload
      );
    },
    clear(state) {
       state.requests =null;
    },
    setRequest(state, action) {
      state.request = action.payload;
    }
  }
}
);
export const {
  setQuestions,
  setRequests,
  getRequest,
  clear,
  setUsers,
  setBanedUser,
  setBanedUsers,
  setUser,
  setRequest,
  setAcceptedRequests,
  setRejectedRequests,
  setPendingRequests,
} = ApiSlice.actions;
export default ApiSlice.reducer;
