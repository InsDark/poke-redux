import {configureStore} from '@reduxjs/toolkit'
import pokeReducer from './features/pokeSlice'
import userReducer from './features/userSlice'

export const store = configureStore({
    reducer: {
        pokemons: pokeReducer,
        user: userReducer
    }
}) 