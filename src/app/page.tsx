'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import Herosection from '@/components/Herosection'
import WhyChooseUs from '@/components/WhyChooseUs'


const page = () => {
  return (
    <main className='bg-black'>
<Navbar/>   
<Herosection/>
<FeaturedCourses/>
<WhyChooseUs/>
<FeaturedWebinars/>

</main>
    
  )
}

export default page