import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserInitialStateType } from "./user.types";
import { UserInitialState } from "./user.constants";

export const sessionSlice = createSlice({
  initialState: UserInitialState,
  name: "session",
  reducers: {
    setLoading: (
      state: UserInitialStateType,
      action: PayloadAction<UserInitialStateType["loading"]>
    ): void => {
      state.loading = action.payload;
    },
    setError: (
      state: UserInitialStateType,
      action: PayloadAction<UserInitialStateType["error"]>
    ) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setLoading } = sessionSlice.actions;

export default sessionSlice.reducer;
