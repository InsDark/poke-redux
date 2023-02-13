import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './../app/firebase'
import {logOut} from './../app/features/userSlice'
const Header = () => {
  const navigate = useNavigate()
  const {credentials} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const closeSession = async() => {
    await auth.signOut()
    localStorage.removeItem('auth')
    dispatch(logOut())
    navigate('/login')
  }
  return (
    <header className='flex bg-slate-600 text-white py-3 items-center justify-around'>
      <h1 className='text-3xl'>Poke APP</h1>
      <nav className='flex gap-3 text-lg items-center'>
        {credentials ? (
          <>
            <Link to='/' className={credentials ? 'bg-gray-700 rounded p-2' : null} >Home</Link>
            <Link to='/profile'  >Profile</Link>
            <button onClick={closeSession} >Close Session</button>
          </>

        ) : (
          <Link to='/login' className={ credentials ? null : 'bg-gray-900 rounded p-2'}>Login</Link>

        )}
      </nav>
    </header>
  )
}

export default Header