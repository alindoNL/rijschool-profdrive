import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Licence} from '../pictures/licence.svg'
import {ReactComponent as Stars} from '../pictures/stars.svg'
import { AiFillCheckCircle } from 'react-icons/ai'
import { carousel } from '../components/data'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Helmet } from 'react-helmet'

import { useAppContext } from '../components/context'
const Home = () => {
  const { setpakket } = useAppContext()
  return (
    <>
      <Helmet>

        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Ben jij op zoek naar de beste rijschool in Enschede?</title>
        <meta property='og:locale' content='nl_NL' />
        <meta name='keyword' content='auto, rijbewijs' />
        <meta property='og:title' content='Rijschool Profdrive' />
        <link rel='apple-touch-icon' href='/favicon.png' />
        <link rel='shortcut icon' href='/favicon.png' />
        <meta property='og:url' content='https://profdrive.nl/' />
        <meta property='og:type' content='article' />
        <meta
          property='og:description'
          content='Snel je auto rijbewijs halen? Dat kan met rijschool Profdrive de beste rijschool in heel Twente. ✓ Hoog Slagingspercentage ✓ Voordelig ✓ Gratis proefles.
'
        />
        <meta
          property='og:image'
          content='https://www.profdrive.nl/favicon.png'
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@profdrive' />
        <meta name='twitter:title' content='Rijschool Profdrive' />
        <meta
          name='twitter:description'
          content='Snel je auto rijbewijs halen? Dat kan met rijschool Profdrive de beste rijschool in heel Twente. ✓ Hoog Slagingspercentage ✓ Voordelig ✓ Gratis proefles.'
        />
        <meta
          name='twitter:image'
          content='https://www.profdrive.nl/favicon.png'
        />
        <meta
          name='description'
          content='Snel je auto rijbewijs halen? Dat kan met rijschool Profdrive de beste rijschool in heel Twente. ✓ Hoog Slagingspercentage ✓ Voordelig ✓ Gratis proefles.'
        />
        <meta property='og:locale' content='nl_NL' />
        <meta property='og:type' content='website' />
      </Helmet>
      <main className='font-san'>
        <article>
          <div className='lg:flex pt-28 lg:ml-12 md:mx-36 ml-12 lg:pt-32 justify-center items-center    '>
            <div className='pr-24 '>
              <h1 className='text-2xl md:text-4xl md:flex  font-bold text-blue-800 '>
                Je rijbewijs haal je bij:
                <br /> Rijschool Profdrive in Enschede
              </h1>
              <h2 className='md:text-2xl text-xl mt-4'>
                vraag nu je gratis proefles aan en start gelijk!!!
              </h2>
              <Link
                to='/aanmelden'
                onClick={() => {
                  setpakket('gratis proefles')
                }}
                className='py-3 mt-12  px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-200 border border-transparent font-semibold text-blue-800 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white  md:text-xl text-lg dark:focus:ring-offset-gray-800'
              >
                PROEFLES AANVRAGEN
              </Link>
            </div>
            <div className='pl-4 lg:pl-20 '>
              <ul className='lg:mt-6 md:mt-20 mt-14 space-y-4 flex-1'>
                <li className='text-sm text-slate-900 leading-6 flex'>
                  <AiFillCheckCircle className='text-blue-800 shrink-0 text-3xl md:text-4xl  ' />
                  <span className='pl-4 text-xl md:text-2xl'>
                    {' '}
                    Scherpe tarieven
                  </span>
                </li>
              </ul>
              <ul className='mt-6  space-y-4 flex-1'>
                <li className='text-sm text-slate-900 leading-6 flex'>
                  <AiFillCheckCircle className='text-blue-800 shrink-0 text-3xl md:text-4xl  ' />
                  <span className='pl-4 text-xl md:text-2xl'>
                    {' '}
                    Géén Wachtlijst
                  </span>
                </li>
              </ul>
              <ul className='mt-6   space-y-4 flex-1'>
                <li className='text-sm text-slate-900 leading-6 flex'>
                  <AiFillCheckCircle className='text-blue-800 shrink-0 text-3xl md:text-4xl  ' />
                  <span className='pl-4 text-xl md:text-2xl'>
                    {' '}
                    Altijd persoonlijke aandacht
                  </span>
                </li>
              </ul>
              <ul className='mt-6  space-y-4 flex-1'>
                <li className='text-sm text-slate-900 leading-6 flex'>
                  <AiFillCheckCircle className='text-blue-800  shrink-0 text-3xl md:text-4xl  ' />
                  <span className='pl-4  text-xl md:text-2xl'>
                    {' '}
                    Je ideale lespakket zelf samenstellen
                  </span>
                </li>
              </ul>
              <ul className='mt-6 space-y-4   flex-1'>
                <li className='text-sm text-slate-900 leading-6 flex'>
                  <AiFillCheckCircle className='text-blue-800 text-3xl shrink-0 md:text-4xl  ' />
                  <span className='pl-4 text-xl md:text-2xl'>
                    {' '}
                    Hoog slagingspercentage!
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <div className='xl:h-56  h-auto  lg:mt-48 md:mt-28 mt-24 bg-blue-200 xl:flex items-center justify-center'>
        <h3 className='text-slate-900 flex items-center justify-center  xl:flex-none pt-4 lg:pt-0 text-xl lg:text-2xl'>
          5 sterren klantenbeordeeling
        </h3>
        <div className='xl:mr-44 flex items-center justify-center  xl:flex-none pt-4 xl:pt-0'>
          <Link to='/geslaagden'>
            <Stars height={140} width={300} alt='5-sterren' />
          </Link>
        </div>
        <h3 className='text-slate-900 flex items-center justify-center  xl:flex-none pt-6 xl:pt-0 xl-pt:0 mx-12 xl:mx-0 text-xl xl:text-2xl'>
          Een vaste instructeur met ruim tien jaar ervaring
        </h3>
        <div className='xl:ml-4  flex items-center justify-center  xl:flex-none pt-6 pb-4 xl:pt-0'>
          <Licence height={140} width={300} alt='rijbewijs' />
        </div>
      </div>
      <section>
        <div className='flex justify-center items-center'>
          <h2 className='mt-12 text-blue-800 md:text-3xl text-2xl flex items-center mx-8 lg:mx-0 justify-center  lg:flex-none'>
            Op zoek naar de beste autorijschool in Enschede en omgeving?
          </h2>
        </div>
        <div className='flex justify-center items-center mt-12    '>
          <div className='xl:mx-64 md:mx-16 mx-12'>
            <ul className='list-disc list-inside  mt-6 space-y-4 flex-1 '>
              <li className='text-xl  text-slate-900 leading-6 '>
                Rijschool Profdrive biedt je de mogelijkheid om super voordelig
                jouw Autorijbewijs te behalen.{' '}
              </li>
            </ul>
            <ul className='list-disc list-inside  mt-6 space-y-4 flex-1 '>
              <li className='text-xl  text-slate-900 leading-6 '>
                Autorijschool Profdrive is de beste rijschool in Enschede waar
                je rijlessen kunt volgen.{' '}
              </li>
            </ul>
            <ul className='list-disc list-inside  mt-6 space-y-4 flex-1 '>
              <li className='text-xl  text-slate-900 leading-6 '>
                Wil je rijles nemen bij Profdrive? Dan kan je kiezen voor een
                voordelig pakket. Je begint met een gratis proefles / intake.{' '}
              </li>
            </ul>
            <ul className='list-disc list-inside  mt-6 space-y-4 flex-1 '>
              <li className='text-xl  text-slate-900 leading-6 '>
                Eerste rijles aanvragen? Overdag, in de avonden of in het
                weekend lessen? Dat kan!{' '}
              </li>
            </ul>
            <ul className='list-disc list-inside  mt-6 space-y-4 flex-1 '>
              <li className='text-xl  text-slate-900 leading-6 '>
                Je instructeur is sociaal, geduldig, wordt nooit boos en raakt
                niet gefrustreerd. Je hebt je fouten immers nodig om beter te
                worden!
              </li>
            </ul>
            <ul className='list-disc list-inside  mt-6 space-y-4 flex-1 '>
              <li className='text-xl  text-slate-900 leading-6 '>
                Een heldere en efficiënte opbouw van de lessen
              </li>
            </ul>
            <ul className='list-disc list-inside  mt-6 space-y-4 flex-1 '>
              <li className='text-xl  text-slate-900 leading-6 '>
                Vind jij het lastig om in een handgeschakelde auto te rijden?
                Heb je last van faalangst of medische aandoeningen? Dan zijn
                automaat rijlessen in Enschede wellicht de oplossing voor jou!
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center mt-8 justify-center'>
          <Link
            to='/tarieven'
            className='py-3 mt-8 mx-12 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-200 border border-transparent font-semibold text-blue-800 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white  text-xl dark:focus:ring-offset-gray-800'
          >
            Schakel tarieven
          </Link>
          <Link
            to='/tarieven-automaat'
            className='py-3 mx-12 mt-8 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-200 border border-transparent font-semibold text-blue-800 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white  text-xl dark:focus:ring-offset-gray-800'
          >
            Automaat tarieven
          </Link>
        </div>
      </section>
      <div className='bg-blue-200 h-64 flex items-center justify-center my-24'>
        {' '}
        <h3 className=' text-3xl text-slate-800'>Reviews</h3>
      </div>
      <section className='mb-20 text-gray-700'>
        <div className=' mx-4 grid md:grid-cols-3 gap-6 lg:gap-12 text-center'>
          <div className='mb-12 md:mb-0'>
            <div className='flex justify-center mb-6'>
              <img
                loading='lazy'
                src={carousel[0].image}
                height={140}
                width={140}
                alt={carousel[0].alt}
                className='rounded-full shadow-lg w-32'
              />
            </div>
            <h4 className='text-xl font-semibold mb-4'>{carousel[0].name}</h4>
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
              {carousel[0].description}
            </p>
            <ul className='flex justify-center mb-0'>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
          <div className='mb-12 md:mb-0'>
            <div className='flex justify-center mb-6'>
              <img
                loading='lazy'
                src={carousel[1].image}
                height={140}
                width={140}
                alt={carousel[1].alt}
                className='rounded-full shadow-lg w-32'
              />
            </div>
            <h4 className='text-xl font-semibold mb-4'>{carousel[1].name}</h4>

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
              {carousel[1].description}
            </p>
            <ul className='flex justify-center mb-0'>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
          <div className='mb-0'>
            <div className='flex justify-center mb-6'>
              <img
                loading='lazy'
                src={carousel[2].image}
                height={140}
                width={140}
                alt={carousel[2].alt}
                className='rounded-full shadow-lg w-32'
              />
            </div>
            <h4 className='text-xl font-semibold mb-4'>{carousel[2].name}</h4>

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
              {carousel[2].description}
            </p>
            <ul className='flex justify-center mb-0'>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2nisi ut aliquid commodi.
                            000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='star'
                  className='w-4 text-yellow-500'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center mt-6'>
          <Link
            to={'/geslaagden'}
            className='  md:text-xl text-lg text-blue-800 flex items-center justify-center'
          >
            bekijk al onze geslaagden{' '}
          </Link>
        </div>
        <div className='flex items-center justify-center mt-24'>
          <label className='font-bold text-xl md:text-2xl'>
            STA JIJ HIER BINNENKORT OOK BIJ?
          </label>
        </div>
        <div className='flex justify-center  mt-14'>
          <Link
            to='/aanmelden'
            onClick={() => {
              setpakket('gratis proefles')
            }}
            type='button'
            className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-200 border border-transparent font-semibold text-blue-800 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white  text-lg dark:focus:ring-offset-gray-800'
          >
            GRATIS PROEFLES!
          </Link>
        </div>
        <div className='md:flex justify-center mt-24'>
          <div className='lg:mx-48 mx-24 mt-12 pl-2 md:pl-0  lg:mt-0 md:mx-24'>
            <a
              href='https://www.google.com/search?q=rijschool+profdrive+enschede&sxsrf=ALiCzsay4yjBOlGVyAbi6IXexzz7YfBXJw%3A1657034838501&ei=VljEYu2IHuiX9u8Pm-2RGA&oq=rijschool+profdrive+enschde&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCEQChCgAToHCAAQRxCwAzoECCMQJzoGCAAQHhAWSgQIQRgASgQIRhgAUIEEWKEUYNQfaAFwAXgAgAGUAYgB9QWSAQM2LjKYAQCgAQHIAQjAAQE&sclient=gws-wiz#lrd=0x47b813639bc0eb85:0x67b3952fb98e2469,1,,,'
              target='_blank'
              rel='noreferrer'
              className='text-2xl flex justify-center items-center text-slate-700 '
            >
              <FcGoogle className='text-9xl  text-blue-800' alt='google-link' />
            </a>
            <div className='flex mt-4 lg:mx-24 justify-center items-center'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                className='w-8 ml-1 text-yellow-500'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                className='w-8 ml-1 text-yellow-500'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                className='w-8 ml-1 text-yellow-500'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                className='w-8 ml-1 text-yellow-500'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                className='w-8 ml-1 text-yellow-500'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                ></path>
              </svg>
            </div>
            <div className='mt-6  ml-2'>
              <a
                href='https://www.google.com/search?q=rijschool+profdrive+enschede&sxsrf=ALiCzsay4yjBOlGVyAbi6IXexzz7YfBXJw%3A1657034838501&ei=VljEYu2IHuiX9u8Pm-2RGA&oq=rijschool+profdrive+enschde&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCEQChCgAToHCAAQRxCwAzoECCMQJzoGCAAQHhAWSgQIQRgASgQIRhgAUIEEWKEUYNQfaAFwAXgAgAGUAYgB9QWSAQM2LjKYAQCgAQHIAQjAAQE&sclient=gws-wiz#lrd=0x47b813639bc0eb85:0x67b3952fb98e2469,1,,,'
                target='_blank'
                rel='noreferrer'
                className='text-2xl flex justify-center items-center text-slate-700 '
              >
                bekijk reviews
              </a>
            </div>
          </div>
          <div className='lg:mx-48 mx-24 mt-14 lg:mt-0 pl-2 md:pl-0 md:mx-24'>
            <a
              className='flex justify-center items-center'
              href='https://www.facebook.com/profdriveenschede/reviews/?ref=page_internal'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebookF
                className='text-9xl text-blue-600'
                alt='facebook-link'
              />
            </a>
            <div className='flex lg:mx-24 mt-4 justify-center items-center'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                className='w-8 ml-1 text-yellow-500'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                className='w-8 ml-1 text-yellow-500'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                className='w-8 ml-1 text-yellow-500'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                className='w-8 ml-1 text-yellow-500'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                className='w-8 ml-1 text-yellow-500'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                ></path>
              </svg>
            </div>
            <div className='mt-6 ml-2'>
              <a
                href='https://www.facebook.com/profdriveenschede/reviews/?ref=page_internal'
                target='_blank'
                rel='noreferrer'
                className='text-2xl flex justify-center items-center text-slate-700 '
              >
                bekijk reviews
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home