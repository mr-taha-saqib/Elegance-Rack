import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
<Title text1={'ABOUT'}text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
<img className='w-full md:max-w-[450px]'src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4' >
      <p>Welcome to ELEGANCERACK, where passion meets quality. We are committed to delivering the best products to our customers, ensuring they receive exceptional service every time. Our mission is to create a seamless shopping experience, bringing you the latest and most reliable items at competitive prices.</p>
      <p>Our team is dedicated to innovation and excellence, continuously striving to improve and expand our offerings to meet your needs. We believe in building a community of satisfied customers who trust us for their every purchase.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>At ELEGANCERACK, our mission is to provide our customers with products that enrich their lives, backed by the highest standards of quality and service. We are driven by a passion to make shopping easier, faster, and more enjoyable. We aim to build a platform where you can find everything you need, delivered with care and attention to detail.</p>
      </div>
      </div>
      <div className='text-xl py-4'>
<Title text1={'WHY'}text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We prioritize the quality of our products above all else. Every item we offer is carefully selected and goes through rigorous checks to ensure it meets the highest standards. Our dedication to quality means you can trust us to deliver the best every time.</p>

        </div>

      

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenince</b>
          <p className='text-gray-600'>Shopping should be easy and enjoyable. That’s why we offer a seamless, user-friendly experience across all devices, with fast delivery options and hassle-free returns. We want you to enjoy the convenience of shopping from the comfort of your home.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customner Service</b>
          <p className='text-gray-600'>Our customers are at the heart of everything we do. Our friendly and knowledgeable support team is always ready to assist you with any questions or concerns, ensuring you have a smooth and satisfying experience from start to finish.</p>

        </div>

      </div>

<NewsLetterBox/>
      </div>
    
  )
}

export default About
