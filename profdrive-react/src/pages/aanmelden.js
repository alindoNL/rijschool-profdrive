import React, {useState, useEffect, useRef } from 'react'
import { useAppContext } from '../components/context'
import { Helmet } from 'react-helmet'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

import { useNavigate } from 'react-router-dom'
const Aanmelden = () => {
  const [isarrived, setisarrived] = useState(false)
  const [isnotarrived, setisnotarrived] = useState(false)
  const [time, settime] = useState(5)
  const [timeon, settimeon] = useState(false)
  const [notverified, setnotverified] = useState(false)
  const form = useRef()
  const navigate = useNavigate()

  const [token, setToken] = useState(null)
  // useEffect(() => {
  //   if (token) console.log(`hCaptcha Token: ${token}`)
  // }, [token])
  function onChange(value) {
    console.log('Captcha value:', value)
    setToken(value)
  }

  // const captchaRef = useRef(null)

  // const onLoad = () => {

  //   captchaRef.current.execute()
  // }
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5fxhbiy',
        'template_ecb8tgn',
        form.current,
        'm2EiFFVoDmrh_TcKs'
      )
      .then(
        () => {
          setisarrived(true)
          settimeon(true)
        },
        (error) => {
          setisnotarrived(true)
          console.log(error)
        }
      )
    e.target.reset()
  }
  useEffect(() => {
    if (timeon) {
      let myInterval = setInterval(() => {
        if (time > 0) {
          settime(time - 1)
        }
        if (time === 0) {
          clearInterval(myInterval)
          navigate('/')
        }
      }, 1000)
      return () => {
        clearInterval(myInterval)
      }
    }
  }, [timeon, time])

  const { pakket } = useAppContext()
  return (
    <>
      <Helmet>
        <title>Rijschool Profdrive - Inschrijven</title>
        <meta name='description' content='Rijschool Profdrive - Inschrijven' />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>
      <div className='lg:w-96 mt-28 md:w-96 md:max-w-full md:mx-auto mx-6'>
        <h1 className='text-xl flex items-center justify-center font-semibold pb-3'>
          aanmeldingsformulier
        </h1>
        <div className='p-6 border mt-4 border-gray-300 sm:rounded-md'>
          <form ref={form} onSubmit={sendEmail}>
            <label className='block mb-6'>
              <span className='text-gray-800'>NAAM</span>
              <input
                name='naam'
                type='naam'
                className='
            block
            w-full
            mt-1
            border-solid border-2 border-gray-400
            rounded-md
            focus:border-blue-300
            focus:ring
            focus:ring-blue-200
            focus:ring-opacity-50
          '
                required
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-800'>Adres + Plaats</span>
              <input
                name='adress'
                type='adress'
                className='
            block
            w-full
            mt-1
             border-solid border-2 border-gray-400
            rounded-md
            focus:border-blue-300
            focus:ring
            focus:ring-blue-200
            focus:ring-opacity-50
          '
                required
              />
            </label>
            <label className='block mb-6 '>
              <span className=' text-gray-800'>Telefoonnummer</span>
              <input
                name='nummer'
                type='number'
                className='
            block
            w-full
            mt-1
            rounded-md
            focus:border-blue-300
            focus:ring
            focus:ring-blue-200
            border-solid border-2 border-gray-400
            focus:ring-opacity-30
          '
                placeholder='0612345678'
                required
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-800'>Lespakket</span>
              <select
                name='pakket'
                required
                className='
            block
            w-full
            mt-1
             border-solid border-2 border-gray-200
            rounded-md
            focus:border-blue-300
            focus:ring
            focus:ring-blue-200
            focus:ring-opacity-50
          '
              >
                <option value={`${pakket}`}>{pakket}</option>
                <option value='gratis proefles'>gratis proefles</option>
                <option value='automaat rijlespakket 20'>
                  automaat rijlespakket 20
                </option>
                <option value='automaat rijlespakket 30'>
                  automaat rijlespakket 30
                </option>
                <option value='automaat rijlespakket 35'>
                  automaat rijlespakket 35
                </option>
                <option value='rijlespakket 20'>rijlespakket 20</option>
                <option value='rijlespakket 30'>rijlespakket 30</option>
                <option value='rijlespakket 35'>rijlespakket 35</option>
              </select>
            </label>

            <label className='block mb-6'>
              <span className='text-gray-800'>bijzonderheden</span>
              <textarea
                name='message'
                className='
            block
            w-full
            mt-1
            rounded-md
            shadow-lg
 border-solid border-2 border-gray-200
            focus:border-blue-300
            focus:ring
            focus:ring-blue-200
            focus:ring-opacity-50
          '
                rows='3'
              />
            </label>
            <div className='mb-6'>
              {token ? (
                <>
                  {' '}
                  <button
                    type='submit'
                    className='
            h-10
            px-5
            text-blue-100
            bg-blue-800
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            mb-4
            hover:bg-blue-800
          '
                  >
                    verstuur
                  </button>
                </>
              ) : (
                <>
                  <button
                    className='bg-gray-200  hover:bg-gray-300 rounded p-3  mb-4 mt-6'
                    onClick={() => {
                      setnotverified(true)
                    }}
                    type='button'
                  >
                    Versturen
                  </button>
                  {notverified ? (
                    <div>verifieer je zelf eerst </div>
                  ) : (
                    <div></div>
                  )}
                </>
              )}
              {/* <HCaptcha
                sitekey='4098a83d-aaab-445c-b9c0-c2f91c78202d'
                onLoad={onLoad}
                onVerify={setToken}
                ref={captchaRef}
              /> */}
              <ReCAPTCHA
                sitekey='6LfmicwgAAAAAD3js7Abq8ueO8H-OHxuRy2dvWkf'
                onChange={onChange}
              />
            </div>
            {isarrived ? (
              <div>
                je aanmelding is ontvangen we proberen je binnen 24 uur te
                bellen.
              </div>
            ) : (
              <div></div>
            )}
            {isnotarrived ? (
              <div>
                je aanmelding is niet ontvangen je kan ons mailen op
                info@profdrive.nl
              </div>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default Aanmelden