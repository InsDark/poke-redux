import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth , db, storage} from '../app/firebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import Header from '../components/Header'
import { doc, setDoc } from 'firebase/firestore'
import {setPicture} from '../app/features/userSlice'
const Profile = () => {
    const { name, picture, credentials } = useSelector(state => state.user)
    const dispath = useDispatch()
    const handleImageUpload = async(e) => {
        const newProfile = e.target.files[0]
        const storageRef = ref(storage, credentials.user.email)
        await uploadBytes(storageRef, newProfile)
        const url = await getDownloadURL(storageRef)
        await setDoc(doc(db, 'users', credentials.user.uid), {
            email: credentials.user.email,
            name: credentials.user.displayName,
            picture: url,
            uid: credentials.user.uid
        } )
        dispath(setPicture(url))
        
        
    }
    return (
        <>
            <Header />
            <div className=' m-auto grid justify-center gap-2 p-2'>
                <  img src={picture} alt={picture} className={'w-full h-auto'} />
                <h2>Name : {name}</h2>
                <h2>Email: {auth.currentUser.email}</h2>
                <button className='bg-slate-800 text-white p-2 rounded'>Edit Name</button>
                <div className='bg-slate-800 w-full flex text-white p-2 rounded text-center'>
                    <input onChange={handleImageUpload} type='file'  className={' hidden'} id='user-picture' />
                    <label htmlFor="user-picture" className='text-center w-full cursor-pointer m-auto'>Upload File</label>
                </div>
            </div>
        </>
    )
}

export default Profile