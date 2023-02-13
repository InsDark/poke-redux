import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user', 
    initialState: {
        credentials: false, 
        picture: '',
        name: ''
    },
    reducers: {
        setAuth : (state,action) => {
            return {
                ...state, 
                credentials: action.payload
            }
        },
        setName:(state, action) => {
            return {
                ...state,
                name: action.payload
            }
        }, 
        setPicture : (state,action) => {
            return {
                ...state, 
                picture: action.payload
            }
        },
        logOut: (state, action) => {
            return {
                ...state,
                picture: '',
                name: '',
                credentials: false
            }
        }
    }
})
export const {setAuth, setName, setPicture, logOut} = userSlice.actions
export default userSlice.reducer