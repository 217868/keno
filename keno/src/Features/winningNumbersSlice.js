import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    winningNumbers: []
  }
}

export const winningNumbersSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    setWinningNumbers: (state, action) => {
      state.value.winningNumbers = action.payload;
    }
  },
})

export const { setWinningNumbers } = winningNumbersSlice.actions

export default winningNumbersSlice.reducer