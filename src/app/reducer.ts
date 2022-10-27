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
  profile: Profile,
  personas: string[],
}

const initialState: Reducer = {
  status: null,
  profile: null,
  personas: null
}

export const reducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    getUserProfile: (state) => {
      state.profile = {
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
      }
      state.status = 200
    },
    shufflePersonas: (state) => {
      let personas = [
        'https://source.unsplash.com/0mN84vxigL0',
        'https://source.unsplash.com/URn7-JupQ6Q',
        'https://source.unsplash.com/1dJmkdVuelg',
        'https://source.unsplash.com/zgC7nqgE7uw',
        // 'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        // 'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        // 'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        // 'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        // 'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

      ]
      state.personas = personas.sort((a, b) => Math.random() - 0.5)
      state.status = 200
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUserProfile, shufflePersonas } = reducer.actions

export const userProfile = (state: RootState) => state.data.profile
export const browsePersonas = (state: RootState) => state.data.personas
export const checkStatus = (state: RootState) => state.data.status

export default reducer.reducer
