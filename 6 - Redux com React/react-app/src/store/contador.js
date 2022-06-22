import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'contador',
    initialState: {
        total: 0,
    },
    reducers: {
        incrementar(state) {
            state.total++;
        },
        reduzir(state) {
            state.total--;
        },
    },
});

export const { incrementar, reduzir } = slice.actions;
export default slice.reducer;