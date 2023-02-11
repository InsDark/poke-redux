import { useState } from 'react'
import PokeCard from './components/PokeCard'
import PokeList from './components/PokeList'
import PokeNavigator from './components/PokeNavigator'
import './index.css'
function App() {

  return (
    <main className={'grid grid-cols-2  h-screen items-center'}>
      <section>
        <PokeNavigator/>
      <PokeList />
      </section>
      <PokeCard />
    </main>
  )
}

export default App
