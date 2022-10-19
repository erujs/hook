import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface Profile {
  picture: string,
  username: string,
  occupation: string,
  location: string,
  description: string,
  links: object[]
}

export interface Reducer {
  status: number,
  value: number,
  profile: Profile,
  pages: string[],
}

const initialState: Reducer = {
  status: 200,
  value: 0,
  profile: {
    picture: 'https://source.unsplash.com/wgDyTXJm-lU',
    username: 'eru-js',
    occupation: 'Software Engineer',
    location: 'Upside Down',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita eum beatae praesentium cumque deleniti rerum necessitatibus quibusdam nesciunt ut culpa ratione, officia fugit possimus harum recusandae nobis quidem architecto?',
    links: [
      {
        "link": "telegram",
        "url": "#"
      },
      {
        "link": "discord",
        "url": "#"
      }
    ]
  },
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
export const getProfile = (state: RootState) => state.data.profile
export const selectPages = (state: RootState) => state.data.pages
export const getStatus = (state: RootState) => state.data.status

export default reducer.reducer