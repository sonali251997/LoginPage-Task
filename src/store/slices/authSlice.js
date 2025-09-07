import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../thunks/authThunk";

const initialState = {
  accessToken: null,
  refreshToken: null,
  id: null,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  loading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logoutUser: () => {
      localStorage.removeItem("persist:root");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        if (payload) {
          console.log("payload", payload);
          const {
            accessToken,
            refreshToken,
            id,
            username,
            email,
            firstName,
            lastName,
            gender,
            image,
          } = payload;
          console.log(accessToken);

          state.accessToken = accessToken;
          state.refreshToken = refreshToken;
          state.email = email;
          state.id = id;
          state.gender = gender;
          state.image = image;
          state.lastName = lastName;
          state.firstName = firstName;
          state.username = username;
        }
        state.loading = false;
      })
      .addCase(userLogin.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
