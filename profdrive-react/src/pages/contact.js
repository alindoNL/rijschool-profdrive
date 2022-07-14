import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import {Helmet} from 'react-helmet'
import ReCAPTCHA from 'react-google-recaptcha'
import { useNavigate } from 'react-router-dom'
function Contact() {
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
        'template_te3clii',
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

  return (
    <>
      <Helmet>
        <title>Rijschool Profdrive - Contact</title>
        <meta name='description' content='Rijschool Profdrive - Contact' />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>

      <div className='mt-36 max-w-screen-md mx-auto p-5"'>
        <h1 className='uppercase text-2xl font-semibold mb-4 flex items-center justify-center '>
          Contact
        </h1>
        <section className='mb-32 text-gray-800 mt-8'>
          <div className='flex flex-wrap'>
            <div className='grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6'>
              <h2 className='text-xl font-bold mb-6'>Contactformulier</h2>
              <form onSubmit={sendEmail} ref={form}>
                <div className='form-group mb-6'>
                  <input
                    type='text'
                    name='naam'
                    required='required'
                    className='form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleInput7'
                    placeholder='Naam'
                  />
                </div>
                <div className='form-group mb-6'>
                  <input
                    type='email'
                    name='email'
                    className='form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleInput8'
                    placeholder='Email'
                    required='required'
                  />
                </div>
                <div className='form-group mb-6'>
                  <textarea
                    name='message'
                    required='required'
                    className='
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            '
                    id='exampleFormControlTextarea13'
                    rows='3'
                    placeholder='Bericht'
                  ></textarea>
                </div>
                {/* <ReCAPTCHA
                  size='invisible'
                  sitekey='5cfac5cc-7553-42b7-b91a-82163e838e16'
                /> */}
                {token ? (
                  <>
                    <button
                      type='submit'
                      className='
                      mb-6
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out'
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
                
                {isarrived ? (
                  <div>
                    je bericht is ontvangen we proberen binnen 24 uur je vraag
                    te beantwoorden
                  </div>
                ) : (
                  <div></div>
                )}
                {isnotarrived ? (
                  <div>
                    je bericht is niet ontvangen je kan ons mailen op
                    info@profdrive.nl
                  </div>
                ) : (
                  <div></div>
                )}
              </form>
              <div className='mt-12'>
                <h3 className='text-xl flex items-center justify-center font-semibold pb-4'>
                  Contactgegevens
                </h3>
                <p className='flex items-center justify-center md:justify-start mb-4'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='home'
                    className='w-5 mr-4'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'
                    ></path>
                  </svg>
                  Wienebrink 48, 7544 VS Enschede, Nederland
                </p>
                <p className='flex items-center justify-center md:justify-start mb-4'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='envelope'
                    className='w-4 mr-4'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                    ></path>
                  </svg>
                  <a
                    href='mailto:info@profdrive.nl'
                    rel='noreferrer'
                    target='_blank'
                  >
                    info@profdrive.nl
                  </a>
                </p>
                <p className='flex items-center justify-center md:justify-start mb-4'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='phone'
                    className='w-4 mr-4'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'
                    ></path>
                  </svg>
                  <span itemProp='telephone'>
                    <a href='tel:0641323455'> 06 41323455</a>
                  </span>
                </p>
              </div>
            </div>
            <div className='grow-0 shrink-0  basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-12'>
              <h2 className='text-xl font-bold mb-6'>Veelgestelde vragen</h2>
              <p className='font-bold mb-2'>
                Ik heb al rij ervaring via een andere rijschool, kan ik ook bij
                Rijschool Prof-Drive terecht?
              </p>
              <p className='text-gray-500 mb-6'>
                Ja, Rijschool Prof-Drive biedt rijlessen aan voor zowel
                startende als voor de gevorderde cursisten.
              </p>
              <p className='font-bold mb-2'>
                Kan ik met 16,5 jaar rijlessen bij jullie nemen ?
              </p>
              <p className='text-gray-500 mb-6'>Ja, dat kan!</p>
              <p className='font-bold mb-2'>
                Wat zijn de voordelen van een tussentijdse toets?
              </p>
              <p className='text-gray-500 mb-6'>
                Na afloop van de tussentijdse toets geeft de examinator advies
                op diverse onderdelen. Zo weet je precies waar je nog aan moet
                werken. Verder kun je alvast wennen aan de examensituatie,
                waarbij nervositeit grotendeels weggenomen kan worden. Tijdens
                de toets kun je vrijstelling verdienen voor het onderdeel
                bijzondere manoeuvres op het eerstvolgende praktijkexamen.
                Daarom zit er in elk pakket een gratis tussentijdse toets!
              </p>

              <p className='font-bold mb-2'>
                Moet ik een theoriecertificaat hebben voordat ik kan beginnen
                met rijlessen?
              </p>
              <p className='text-gray-500'>
                Je kunt tijdens de rijopleiding alsnog je theoriecertificaat
                halen. Als je je theorie maar voor het praktijkexamen hebt!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
