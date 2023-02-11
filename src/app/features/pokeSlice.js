import { createSlice } from '@reduxjs/toolkit'

const pokeSlice = createSlice({
    name: 'pokemons',
    initialState: {
        list: [],
        offset: 0,
        pokeInfo: ''
        
    },
    reducers: {
        setPokes: (state, action) => {
            return {
                ...state, 
                list : action.payload
            }
        },
        setPokeInfo : (state, action) => {
            return {
                ...state, 
                pokeInfo: action.payload
            }
        },
        increaseOffset : (state, action) => {
            state.offset += 10
        }, 
        decreaseOffset : (state, action) => {
            state.offset -= 10
        }
    }
})
export const { setPokes, increaseOffset, decreaseOffset , setPokeInfo } = pokeSlice.actions
export default pokeSlice.reducer