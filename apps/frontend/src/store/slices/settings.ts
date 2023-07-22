import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MODES, COUNT, COLORS, DELAY, Mode } from "shared/config";

interface State {
  modes: Mode[];
  activeMode: number;

  colors: string[] | string;

  delay: number;

  count: number[];
  activeCountIndex: number;
  activeCount: number;
}

const initialState: State = {
  modes: MODES,
  activeMode: MODES[0].id,

  colors: COLORS,

  delay: DELAY,

  count: COUNT,
  activeCountIndex: 0,
  activeCount: COUNT[0],
};

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    onChangeMode: (state, { payload }: PayloadAction<number>) => {
      state.activeMode = payload;
    },
    onChangeCount: (state, { payload }: PayloadAction<number>) => {
      state.activeCount = payload;
      state.activeCountIndex = COUNT.indexOf(payload);
    },
  },
});

export const { reducer: settingsReducer, actions: settingsActions } = settings;
