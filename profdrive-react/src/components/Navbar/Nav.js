import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'
import logo2 from '../.././pictures/logo2.svg'
import { useAppContext } from '../context'
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { pakket, setpakket } = useAppContext()
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className='h-20 items-center  flex bg-white justify-between  shadow-md fixed w-full z-10 top-0 '>
        <div className='cursor-pointer hidden md:block   pl-16 lg:pl-32 xl:pl-64 text-xl text-white font-semibold'>
          <Link to='/'>
            <img src={logo2} height={50} width={160} alt='navbar-logo' />
          </Link>
        </div>
        <div className='cursor-pointer md:hidden  pl-12 lg:pl-32 xl:pl-64 text-xl text-white font-semibold'>
          <Link className='cursor-pointer md:hidden ' to='/'>
            <img src={logo2} height={40} width={140} alt='navbar-logo' />
          </Link>
        </div>
        <div
          className=' pr-16 md:pr-0  md:pl-36  cursor-pointer lg:hidden'
          onClick={toggle}
        >
          {isOpen ? (
            <svg
              className='w-8 h-8 text-blue-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          ) : (
            <svg
              className='w-8 h-8 text-blue-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </div>
        <div className=' xl:pr-28  2xl:pr-0 lg:block hidden m-2  '>
          <Link className='p-5  text-lg font-semibold text-blue-800' to='/'>
            home
          </Link>
          <Link
            to='/tarieven'
            className='p-5 text-lg font-semibold text-blue-800'
          >
            tarieven
          </Link>
          <Link
            className='p-5 text-lg font-semibold text-blue-800'
            to='/over-ons'
          >
            over ons
          </Link>
          <Link
            className='p-5 text-lg font-semibold text-blue-800'
            to='/contact'
          >
           contact
          </Link>
        </div>
        <div className=' xl:pr-22  2xl:pr-44 pr-16 sm:block  hidden m-2  '>
          <Link to='/aanmelden'
              onClick={() => {
                setpakket('gratis proefles')
              }}
              className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-200 border border-transparent font-semibold text-blue-800 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white  text-sm dark:focus:ring-offset-gray-800'
            >
              GRATIS PROEFLES!
          </Link>
        </div>
      </nav>
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </>
  )
}

export default Nav
