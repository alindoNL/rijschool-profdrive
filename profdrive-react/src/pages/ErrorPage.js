import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <Helmet>
        <title>Rijschool Profdrive - 404</title>
        <meta name='prerender-status-code' content='404' />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>
      <div className='mt-28 flex items-center justify-center'>
        <h1>404 - Pagina niet gevonden</h1>
        <Link to='/'>
          <a className='p-2 ml-4 bg-slate-400'>Ga terug naar de home pagina</a>
        </Link>
      </div>
    </>
  )
}

export default ErrorPage