import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './../app/firebase'
const Header = () => {
  const navigate = useNavigate()
  const closeSession = () => {
    auth.signOut()
    navigate('/login')
  }
  return (
    <header className='flex bg-slate-600 text-white py-3 items-center justify-around'>
      <h1 className='text-3xl'>Poke APP</h1>
      <nav className='flex gap-2 text-lg'>
        {auth.currentUser ? (
          <>
            <Link to='/' className={auth.currentUser ? 'bg-gray-700 rounded p-2' : null} >Home</Link>
            <button onClick={closeSession} >Close Session</button>
          </>

        ) : (
          <Link to='/login' className={auth.currentUser ? null : 'bg-gray-700 rounded p-2'}>Login</Link>

        )}
      </nav>
    </header>
  )
}

export default Header