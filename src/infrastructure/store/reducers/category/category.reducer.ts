import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CategoryInitialStateType } from "./category.types";
import { CategoryInitialState } from "./category.constants";

export const categorySlice = createSlice({
  initialState: CategoryInitialState,
  name: "category",
  reducers: {
    setLoading: (
      state: CategoryInitialStateType,
      action: PayloadAction<CategoryInitialStateType["loading"]>
    ): void => {
      state.loading = action.payload;
    },
    setError: (
      state: CategoryInitialStateType,
      action: PayloadAction<CategoryInitialStateType["error"]>
    ) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setLoading } = categorySlice.actions;

export default categorySlice.reducer;
