import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Eng',
}

export const langSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    lang: (state , actions) => {      
      state.value = actions.payload;
     
    }
  },
})

export const { lang } = langSlice.actions

export default langSlice.reducer