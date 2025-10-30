import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    name: "",
    email: "",
    password: "",
    role: "",
    age: null,
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      profilePicture: "",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
  },
});


export const {setUserData,clearUser}=userSlice.actions;
export const selectUser = (store) => store.user;
export default userSlice.reducer;
