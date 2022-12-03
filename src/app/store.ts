import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "../features/profile/profileSlice";
import { personaSlice } from "../features/persona/personaSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    persona: personaSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
