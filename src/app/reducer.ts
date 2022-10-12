import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface Reducer {
  status: number,
  value: number,
  pages: string[],
}

const initialState: Reducer = {
  status: 200,
  value: 0,
  pages: [
    'https://source.unsplash.com/F6VAZuBFZpc',
    'https://source.unsplash.com/DZkDkaiHdTU',
    'https://source.unsplash.com/dcZsxUAAJXs',
    'https://source.unsplash.com/zgC7nqgE7uw',
  ]
}

export const reducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = reducer.actions

export const selectValue = (state: RootState) => state.data.value
export const selectPages = (state: RootState) => state.data.pages
export const getStatus = (state: RootState) => state.data.status

export default reducer.reducer