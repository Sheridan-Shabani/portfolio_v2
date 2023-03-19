import React from "react"
import Link from "next/link";

const Header = () => {
    return ( 
        <div className='sticky top-0 pt-4 flex justify-between items-center bg-[#110626] z-10'>
            <div className='flex flex-1'>
            <h1 className='text-xl uppercase'>Sheridan <br/> SHABANI</h1>
            </div>
            <nav className='space-x-10 flex items-center flex-1'>
              <Link href={"#about"}>
                <button className='uppercase'>ABOUT</button>
              </Link>
              <Link href={"#experiences"}>
                <button className='uppercase'>experiences</button>
              </Link>
              <Link href={"#educations"}>
                <button className='uppercase'>educations</button>
              </Link>
              <Link href={"#projects"}>
                <button className='uppercase'>projects</button>
              </Link>
              <Link href={"#contact"}>
                <button className='uppercase'>contact</button>
              </Link>
            </nav>
            <div className='flex flex-col flex-1 items-end'>
                <button>FRA</button>
                <button>ENG</button>
            </div>
      </div>
    )
}

export default Header