import React from 'react'
import Header from '../components/Header'
import PokeCard from '../components/PokeCard'
import PokeList from '../components/PokeList'
import PokeNavigator from '../components/PokeNavigator'

const Home = () => {
  return (
    <>
      <Header />
      <main className='grid grid-cols-2  h-screen items-center'>
        <section>
          <PokeNavigator />
          <PokeList />
        </section>
        <PokeCard />
      </main>
    </>
  )
}

export default Home


