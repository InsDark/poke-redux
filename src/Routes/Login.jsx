import Header from '../components/Header'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, db } from './../app/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, } from 'react-redux'
import { setAuth, setName, setPicture } from './../app/features/userSlice'
import {doc, getDoc, setDoc } from 'firebase/firestore'
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const setUserCredentials = (auth, photoUrl, name) => {
    dispatch(setAuth(auth))
    dispatch(setName(name))
    dispatch(setPicture(photoUrl))
  }
  const getUserAccess = async () => {
    try {
      const provider = new GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });
      const res = await signInWithPopup(auth, provider)
      if (!res) return null
      localStorage.setItem('auth', JSON.stringify(res))
      await setDoc(doc (db, 'users', res.user.uid ) , {
        uid: res.user.uid, 
        email: res.user.email,
        picture: res.user.photoURL,
        name: res.user.displayName
      })
      const userData = await getDoc(doc(db, 'users', res.user.uid)) 
      const {picture} = userData.data()
      setUserCredentials(res, picture, res.user.displayName)
      
      navigate('/')

    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <>
      <Header />
      <main className="m-auto text-center p-2">
        <h2 className="text-3xl">Access with google</h2>
        <button onClick={getUserAccess} className="bg-slate-700 text-white px-3 py-2 rounded">Access</button>
      </main>
    </>
  )
}

export default Login