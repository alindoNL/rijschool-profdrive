import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../components/context'
import profdrive from '../pictures/profdrive.jpg'
import { Helmet } from 'react-helmet'
const over = () => {
  const { pakket, setpakket } = useAppContext()
  return (
    <>
      <Helmet>
        <title>Rijschool Profdrive - Over-ons</title>
        <meta name='description' content='Rijschool Profdrive - Over-ons' />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>
      <h1 className='mt-32 flex items-center justify-center text-3xl font-bold'>
        Rijschool profdrive
      </h1>
      <div className='py-16 mt-4 bg-white'>
        <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
          <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
            <div className='md:5/12 lg:w-5/12'>
              <img
                src={profdrive}
                alt='auto'
                loading='lazy'
                width={700}
                height={400}
              />
            </div>

            <div className='md:7/12 lg:w-6/12'>
              <h2 className='text-2xl text-gray-900 font-bold md:text-4xl'>
                Wie zijn wij?
              </h2>
              <p className='mt-6 text-gray-600'>
                Rijschool Profdrive is al meer dan 10 jaar een begrip in
                Enschede als het gaat om het verzorgen van rijopleidingen.
              </p>
              <p className='mt-4 text-gray-600'>
                {' '}
                Wij zijn gespecialiseerd in autorijlessen. Wij geven rijlessen
                in Enschede en omstreken. Wij zijn een rijschool met klasse en
                bij ons zal je na elke rijles tevreden uitstappen. Iedereen is
                anders en daarom zijn wij erop getraind om elke leerling te
                lessen op de manier wat voor hem/ haar van toepassing is.
              </p>
              <Link
                onClick={() => {
                  setpakket('gratis proefles')
                }}
                className='py-3 mt-8 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-200 border border-transparent font-semibold text-blue-800 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white  text-lg dark:focus:ring-offset-gray-800'
                to='/aanmelden'
              >
                GRATIS PROEFLES!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default over