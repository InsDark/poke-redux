import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const PokeCard = () => {
  const {pokeInfo} = useSelector(state => state.pokemons)
  const [pokeDetails, setPokeDetails] = useState([])
  useEffect(() => {
    const getPokeInfo = async() => {
      if(pokeInfo == '') return 
      const req = await fetch(pokeInfo)
      const res = await req.json()
      setPokeDetails([res])
    } 
    getPokeInfo()
  }, [pokeInfo])
  return (
    <div className='border border-slate-900 w-2/4 m-auto bg-slate-100 rounded p-2 flex flex-col'>
      {pokeDetails.length == 0 ? <h2>Choose a poke info to get info</h2> : (
        <>
        <h2 className='text-3xl text-center'>{pokeDetails[0].name.toUpperCase()}</h2>
        <img className='w-full h-auto' src={pokeDetails[0].sprites.front_default} alt={pokeDetails.name} />
        <div className='flex gap-2'>
        {pokeDetails[0].types.map(type => (<h3 key={type.type.name}>{type.type.name}</h3>))}
        </div>
        </>
      )  }
      </div>
  )
}

export default PokeCard