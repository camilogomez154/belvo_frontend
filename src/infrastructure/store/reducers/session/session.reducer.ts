import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SessionInitialStateType } from "./session.types";
import { SessionInitialState } from "./session.constants";

export const sessionSlice = createSlice({
  initialState: SessionInitialState,
  name: "session",
  reducers: {
    setLoading: (
      state: SessionInitialStateType,
      action: PayloadAction<SessionInitialStateType["loading"]>
    ): void => {
      state.loading = action.payload;
    },
    setError: (
      state: SessionInitialStateType,
      action: PayloadAction<SessionInitialStateType["error"]>
    ) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setLoading } = sessionSlice.actions;

export default sessionSlice.reducer;
