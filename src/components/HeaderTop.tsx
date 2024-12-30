import React from 'react'
import Link from 'next/link'

const HeaderTop = () => {
  return (
    <>
    <div className="flex justify-start px-4 gap-8 sm:justify-around items-center w-full h-10 bg-[#222222] text-white text-md sm:text-lg">
      <div className="hidden sm:block ml-10 md:ml-2">
        <Link href="/" className="hover:font-bold">Home
        </Link>
      </div>
      <div className="flex gap-8 sm:gap-12">
        <Link href="/login" className="hover:font-bold">Login
        </Link>
        <Link href="/register" className="hover:font-bold">Register
        </Link>
        <Link href="https://wa.me/+923312683209" passHref className="hover:font-bold" target="_blank" rel="noopener noreferrer">
            Whatsapp
        </Link>
      </div>
    </div>
  </>
  )
}

export default HeaderTop