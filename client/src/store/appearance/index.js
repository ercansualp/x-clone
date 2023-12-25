import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    // Işıklar kapalı
    backgroundColor: {
        name: "lights-off",
        primary: "#000",
        secondary: "#16181c",
        third: "#273340",
        modal: "#5b708366"
    },
    color: {
        primary: "#1d9bf0",
        secondary: "#8ecdf8",
        third: "#536471",
        base: "#e7e9ea",
        baseSecondary: "#71767b"
    },
    boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
    fontSize: 15

    /*
    // Loş
    backgroundColor: {
        name: "dimly",
        primary: "#15202b",
        secondary: "#1e2732",
        third: "#263340",
        modal: "#5b708366"
    },
    color: {
        primary: "#1d9bf0",
        secondary: "#8ecdf8",
        third: "#536471",
        base: "#f7f9f9",
        baseSecondary: "#8b98a5"
    },
    boxShadow: "rgba(136, 153, 166, 0.2) 0px 0px 15px, rgba(136, 153, 166, 0.15) 0px 0px 3px 1px",
    fontSize: 15
     */

    /*
    // Varsayılan
    backgroundColor: {
        name: "default",
        primary: "#fff",
        secondary: "#f7f9f9",
        third: "#eff3f4",
        modal: "#00000066"
    },
    color: {
        primary: "#1d9bf0",
        secondary: "#8ecdf8",
        third: "#536471",
        base: "#0f1419",
        baseSecondary: "#8b98a5"
    },
    boxShadow: "0 0 15px rgba(101,119,134,0.2), 0 0 3px 1px rgba(101,119,134,0.15)",
    fontSize: 15
     */
}

const appearance = createSlice({
    name: "appearance",
    initialState,
    reducers: {
        _setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload;
        },
        _setColor: (state, action) => {
            state.color = action.payload;
        },
        _setFontSize: (state, action) => {
            state.fontSize = action.payload;
        }
    }
})

export const { _setBackgroundColor, _setColor, _setFontSize } = appearance.actions;
export default appearance.reducer;