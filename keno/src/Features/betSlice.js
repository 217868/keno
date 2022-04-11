import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    pickedNumbers: [],
    betValue: 0
  }
}

export const betSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    pickOrUnpickNumber: (state, action) => {
      let existingNumberIndex = state.value.pickedNumbers.indexOf(action.payload);

      if (existingNumberIndex == -1) {
        state.value.pickedNumbers = [ ...state.value.pickedNumbers, action.payload];
      } else {
        state.value.pickedNumbers = state.value.pickedNumbers.filter(num => num != action.payload);
      }
    },
    setBetValue: (state, action) => {
      state.value.betValue = action.payload;
    }
  },
})

export const { pickOrUnpickNumber, setBetValue } = betSlice.actions

export default betSlice.reducer