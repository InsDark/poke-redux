import { useEffect, useState } from 'react'
import PokeCard from './components/PokeCard'
import PokeList from './components/PokeList'
import PokeNavigator from './components/PokeNavigator'
import { auth } from './app/firebase'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
function App() {
  const currentUser = auth.currentUser
  const navigate = useNavigate()
  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  })
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

export default App
