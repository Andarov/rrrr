import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='py-8 bg-cyan-500'>
      <div className='flex justify-between items-center container'>
        <Link className='text-2xl font-semibold text-red-700' to='/'>Something</Link>

        <p>Privacy policy</p>
      </div>
    </footer>
  )
}

export default Footer