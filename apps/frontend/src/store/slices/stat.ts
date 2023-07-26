import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Stat {
  hits: number;
  miss: number;
  time: number;
}

interface State {
  stat: Stat;
}

const initialState: State = {
  stat: {
    hits: 0,
    miss: 0,
    time: 0,
  },
};

const stat = createSlice({
  name: "stat",
  initialState,
  reducers: {
    setStat: (state, { payload }: PayloadAction<Stat>) => {
      state.stat = payload;
    },
    clearStat: (state) => {
      state.stat = {
        hits: 0,
        miss: 0,
        time: 0,
      };
    },
  },
});

export const { reducer: statReducer, actions: statAction } = stat;
