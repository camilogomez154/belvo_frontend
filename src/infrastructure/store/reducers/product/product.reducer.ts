import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductInitialStateType } from "./product.types";
import { ProductInitialState } from "./product.constants";

export const sessionSlice = createSlice({
  initialState: ProductInitialState,
  name: "session",
  reducers: {
    setLoading: (
      state: ProductInitialStateType,
      action: PayloadAction<ProductInitialStateType["loading"]>
    ): void => {
      state.loading = action.payload;
    },
    setError: (
      state: ProductInitialStateType,
      action: PayloadAction<ProductInitialStateType["error"]>
    ) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setLoading } = sessionSlice.actions;

export default sessionSlice.reducer;
