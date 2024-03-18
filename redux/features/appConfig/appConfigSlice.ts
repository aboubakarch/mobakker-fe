import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAppConfigSlice = {
  locale: "en",
};

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<ILocales>) {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = appConfigSlice.actions;
export default appConfigSlice.reducer;
