import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({toggle, isOpen }) => {

  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 shadow-md fixed w-full z-10 top-20  text-center items-center font-semibold text-white bg-blue-800'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link className='p-5 hover:bg-blue-200 ' to='/'>
        home
      </Link>
      <Link className='p-5 hover:bg-blue-200 ' to='/tarieven'>
        tarieven
      </Link>
      <Link className='p-5 hover:bg-blue-200 ' to='/over-ons'>
        over ons
      </Link>
      <Link className='p-5 hover:bg-blue-200 ' to='/contact'>
        contact
      </Link>
    </div>
  )
}

export default Dropdown