import React from 'react'
import '../index.css'
import logo from '../images/logo.png'

function Header() {
  return (
    <div className='md:hidden flex justify-between items-center h-14 bg-black text-white '>
      <section className='ml-3'>
        <img src={logo} alt='' className='w-8 h-8 rounded-full' />
      </section>
      <button  className='mr-3' >
        <div className='border border-white w-5 mb-1'></div>
        <div className='border border-white w-5 mb-1'></div>
        <div className='border border-white w-5'></div>
      </button>
    </div>
  )
}

export default Header
