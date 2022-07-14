import React, { useState, useEffect } from 'react'
import { db } from '../fb/firebase.config'
import { storage } from '../fb/firebase.config'
import AddGeslaagde from '../components/AddGeslaagde'
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage'
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from 'firebase/firestore'

import { auth } from '../fb/firebase.config'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
const Admin = () => {
  const [email, setEmail] = useState('')
  const [passwd, setPasswd] = useState('')
  const [user, setuser] = useState({})
  const [err, setErr] = useState('')
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, passwd)
      console.log(user)
    } catch (error) {
      setErr(error.message)
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
    window.location.reload()
  }
  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser)
    })
  }, [])

  const [a, seta] = useState('')

  return (
    <>
      {' '}
      <div>
        {' '}
        {user ? (
          <>
            <button
              className='p-3 rounded-sm bg-slate-500 mx-24 mt-24'
              onClick={logout}
            >
              uitloggen
            </button>
            <div className='flex items-center justify-center'>
              <div className='mx-6'>
                <AddGeslaagde />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className=' mt-8'>
              <h3 className='flex justify-center aling-center mt-24'>login</h3>
            {err}{' '}
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className=' m-2 rounded border-2'
                placeholder='email'
              />
              <input
                onChange={(e) => {
                  setPasswd(e.target.value)
                }}
                className='m-2 rounded border-2'
                placeholder='wachtwoord'
              />
            </div>
            <button
              className='m-4 rounded p-4 bg-red-200'
              onClick={() => login()}
            >
              inloggen
            </button>{' '}
          </>
        )}
      </div>
    </>
  )
}

export default Admin
