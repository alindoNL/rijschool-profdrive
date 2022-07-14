import React, { useState, useEffect } from 'react'
import { db } from '../fb/firebase.config'
import { storage } from '../fb/firebase.config'

import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage'
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  arrayUnion,
} from 'firebase/firestore'

const AddGeslaagde = () => {
  const [text, setText] = useState('')
  const [geslaagden, setGeslaagden] = useState([])
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [progress, setProgress] = useState(0)
  const userRef = collection(db, 'Geslaagden')
  const maakGeslaagde = async () => {
    let myA = [
      {
        name: name,
        text: text,
        image: img,
      },
    ]
    await updateDoc(doc(db, 'Geslaagden', 'geslaagden'), {
      geslaagd: arrayUnion(...myA),
    })
    window.location.reload()
  }
  const formHandler = (e) => {
    e.preventDefault()
    const file = e.target[0].files[0]
    uploadFiles(file)
  }
  const uploadFiles = (file) => {
    if (!file) return
    const storageRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(prog)
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL)
        })
      }
    )
  }
  // useEffect(() => {
  //   try {
  //     setLoading(true)
  //     const getGeslaagden = async () => {
  //       const data = await getDocs(userRef)
  //       setGeslaagden(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //       setLoading(false)
  //     }
  //     getGeslaagden()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])
  // console.log(geslaagden)
  return (
    <div>
      <div className='pt-12 mb-2 flex items-center justify-center'>
        <h1 className='text-4xl '>Geslaagden toevoegen</h1>
      </div>
      <div className='sm:flex sm:items-center pt-4  sm:justify-center'>
        <input
          className={`border-2 mb-4 pb-2 md:mt-6 sm:m-4 border-black `}
          placeholder='naam'
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <input
          className={`border-2 mb-4 pb-2  md:mt-6 sm:m-4 border-black `}
          placeholder='text'
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <input
          className='hidden'
          placeholder='foto'
          onChange={(e) => {
            setImg(e.target.value)
          }}
        />
      </div>
      <div className='sm:flex sm:items-center sm:justify-center'>
        <form className='sm:m-4' onSubmit={formHandler}>
          <label>
            kies een foto ::
            <input type='file' className='input' />
          </label>
          <button
            className='sm:m-4 bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            type='submit'
          >
            voeg foto toe
          </button>
        </form>
        <hr />
        <h2>Uploading done {progress}%</h2>
        <div>
          <button
            className='bg-blue-500 mt-3 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full'
            onClick={maakGeslaagde}
          >
            {' '}
            maak vraag
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddGeslaagde
