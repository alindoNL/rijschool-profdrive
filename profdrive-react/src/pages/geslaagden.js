import React, { useState, useEffect } from 'react'
import { db } from '../fb/firebase.config'
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from 'firebase/firestore'
import { Helmet } from 'react-helmet'
const Geslaagden = () => {
  const [text, setText] = useState('')
  const [geslaagden, setGeslaagden] = useState([])
  const [loading, setLoading] = useState(false)
  const userRef = collection(db, 'Geslaagden')
  useEffect(() => {
    setLoading(true)
    try {
      const getGeslaagden = async () => {
        const data = await getDocs(userRef)
        setGeslaagden(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setLoading(false)
      }
      getGeslaagden()
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(geslaagden)
  console.log(geslaagden.length === 1)
  return (
    <>
      <Helmet>
        <title>Rijschool Profdrive - Geslaagden</title>
        <meta name='description' content='Rijschool Profdrive - Geslaagden' />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>

      <div className='pt-32 mb-2 flex items-center justify-center'>
        <h1 className='text-4xl '>Geslaagden</h1>
      </div>

      {geslaagden.length === 1 ? (
        <>
          <div className=' mx-4 mt-12 grid md:grid-cols-3 gap-6 lg:gap-12 text-center'>
            {geslaagden[0].geslaagd
              .slice(0)
              .reverse()
              .map((geslaagde) => {
                return (
                  <div key={geslaagde.name}>
                    <div className='mb-12 md:mb-0'>
                      <div className='flex justify-center   mb-6'>
                        <img
                          src={geslaagde.image}
                          height={140}
                          width={140}
                          loading='lazy'
                          alt={geslaagde.name}
                          className=' object-contain rounded-full shadow-lg '
                        />
                      </div>
                      <h4 className='text-xl font-semibold mb-4'>
                        {geslaagde.name}
                      </h4>
                      <p className='mb-4'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='quote-left'
                          className='w-6 pr-2 inline-block'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path
                            fill='currentColor'
                            d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                          ></path>
                        </svg>
                        {geslaagde.text}
                      </p>
                    </div>
                  </div>
                )
              })}
          </div>
        </>
      ) : (
        <></>
      )}

      {loading ? (
        <div className='flex justify-center items-center'>
          <div
            className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full'
            role='status'
          >
            <span className='visually-hidden'>laden</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Geslaagden
