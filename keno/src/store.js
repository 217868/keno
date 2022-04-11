import { configureStore } from '@reduxjs/toolkit'
import betRerucer from './Features/betSlice'
import winningNumbersReducer from './Features/winningNumbersSlice'

export const store = configureStore({
  reducer: {
      bet: betRerucer,
      winningNumbers: winningNumbersReducer
  },
})