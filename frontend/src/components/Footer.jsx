import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <span className='mb-6 w-32 font-semibold text-xl'>ELEGANCERACK</span>
<p className='mt-5 w-full md:w-3/2 text-gray-600'>
Crafting timeless style for every wardrobe. Redefining elegance, one collection at a time.</p>
      
        </div>
<div>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
   <li>Home</li>
   <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
    </ul>
</div>
<div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>+111-222-333-9</li>
        <li>EleganceRack@gmail.com</li>
    </ul>
</div>
      </div>
      <div >
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ELEGANCERACK.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
