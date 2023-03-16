import React from 'react'
import {Icon} from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='h-[calc(100vh-74px)] items-center justify-center flex flex-row space-x-40'>
            <div className='space-y-2'>
              <h2 className='text-8xl'>Hi,<br/>I&apos;m Sheridan</h2>
              <h3 className='text-2xl font-extralight'>System Engineer</h3>
              <div className='flex flex-row space-x-2'>
                <Link href={"https://www.linkedin.com/in/sheridan-shabani/"}>
                    <Icon icon="ph:linkedin-logo-thin" color="#f9f871" width="50" height="50" />
                </Link>
                <Link href={"https://github.com/Sheridan-Shabani"}>
                    <Icon icon="ph:github-logo-thin" color="#f9f871" width="50" height="50" />
                </Link>
            </div>
            </div>
            <div>
                <Image 
                    className='w-full h-full rounded-full bg-gray-300'
                    src={"/pictureB-removebg-preview.png"} 
                    alt={'My picture'} 
                    width={200} 
                    height={150}
                    quality={100}>
                </Image>
            </div>
        </div>
  )
}

export default Hero