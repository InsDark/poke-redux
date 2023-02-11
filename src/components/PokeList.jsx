import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPokes, setPokeInfo } from './../app/features/pokeSlice'
const PokeList = () => {
    const dispatch = useDispatch()
    const {offset, list, pokeInfo} = useSelector(state => state.pokemons)
    useEffect(() => {
        getPokemons()
    }, [offset])
    const [init, setInit] = useState(true)
    const getPokemons = async () => {
        const req = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        const res = await req.json()
        dispatch(setPokes(res.results))
        setInit(false)
    }
    return (
        <section className="flex flex-col gap-2 w-2/4 m-auto">
            <h1 className="text-center text-3xl">Pokemon's List</h1>
            {init ? <button onClick={getPokemons}>Get Poke</button> : null}

            {list.map(poke => (
                <div className="flex justify-between items-center p-2 border border-slate-400 rounded" key={poke.name}>
                    <h2>{poke.name.toUpperCase()}</h2>
                    <button className="bg-slate-700 p-2 text-white rounded" onClick={() => {dispatch(setPokeInfo(poke.url))}}>Info</button>
                </div>
            ))}

        </section>
    )
}
export default PokeList
