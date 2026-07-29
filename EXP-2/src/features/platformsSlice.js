import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  platforms: [

    "Instagram",

    "Facebook",

    "Twitter (X)",

    "LinkedIn",

  ],

};

const platformsSlice = createSlice({

  name: "platforms",

  initialState,

  reducers: {},

});

export default platformsSlice.reducer;