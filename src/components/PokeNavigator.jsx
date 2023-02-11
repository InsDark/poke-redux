import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increaseOffset, decreaseOffset} from './../app/features/pokeSlice'
import {setPokes} from './../app/features/pokeSlice'
const PokeNavigator = () => {
  const dispatch = useDispatch()
  const {offset} = useSelector(state => state.pokemons)
  const getNextPokes = async ( ) => {
    dispatch(increaseOffset())
  }
  const getPrevPokes = async() => {
    dispatch(decreaseOffset())
  }
  return (
    <div className="flex justify-around p-2">
      <button onClick={getPrevPokes} disabled={offset <= 0 ? true : false} className={ offset <= 0 ? 'bg-slate-400 p-2 rounded': 'bg-slate-800 text-white p-2 rounded'}>Prev</button>
      <button onClick={getNextPokes} className='bg-slate-800 text-white p-2 rounded'>Next</button>
    </div>
  )
}

export default PokeNavigator