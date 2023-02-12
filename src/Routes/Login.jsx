import React, { useEffect } from 'react'
import Header from '../components/Header'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from './../app/firebase'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const currentUser = auth.currentUser
  useEffect(() => {
    console.log(auth.currentUser)
    if(currentUser) {
      navigate('/')
    }
  })
    const getUserAccess = async () => {
      try {

            const provider = new GoogleAuthProvider()
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            provider.setCustomParameters({
                'login_hint': 'user@example.com'
              });
            const res = await signInWithPopup(auth, provider)

            if(res) {
              navigate('/')

            }

        } catch (err) {
            console.err('err', err)
        }
    }
  return (
    <>
        <Header/>
        <main className="m-auto text-center p-2">
            <h2 className="text-3xl">Access with google</h2>
            <button onClick={getUserAccess} className="bg-slate-700 text-white px-3 py-2 rounded">Access</button>
        </main>
    </>
  )
}

export default Login