import { createSlice } from "@reduxjs/toolkit";

const USER_STORE_KEY = "user";

const storedUser=JSON.parse(localStorage.getItem(USER_STORE_KEY));
// console.log(storedUser)


const initialState = storedUser || {
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
      //Set the data of user in the localStorage
      localStorage.setItem(USER_STORE_KEY, JSON.stringify(state));
    },
    clearUser: (state) => {
      state.user = initialState.user.user;
      localStorage.removeItem(USER_STORE_KEY);
    },
  },
});

export const { setUserData, clearUser } = userSlice.actions;
export const selectUser = (store)=>store.user; 
// => {
//   let user = {};

//   const storeUser = localStorage.getItem(USER_STORE_KEY);
//   if (storeUser) {
//     user = JSON.parse(storeUser);
//   } else {
//     user = state.user;
//   }

//   return user;
// };
export default userSlice.reducer;
