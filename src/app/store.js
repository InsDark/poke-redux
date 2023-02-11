import {configureStore} from '@reduxjs/toolkit'
import pokeReducer from './features/pokeSlice'
export const store = configureStore({
    reducer: {
        pokemons: pokeReducer
    }
}) 