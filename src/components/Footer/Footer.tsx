import React from 'react'
import LOGO_WHITE from '../../../public/images/Biological_know_white.png'
import Image from 'next/image'
import NavLinks from '../General/NavLinks'

const Footer = () => {
  return (
    <footer className='w-full bg-primary p-5 text-whiteLotus'>
      <div className='max-w-[790px] m-auto text-center'>
        <div className='flex items-center justify-between gap-x-7'>
          <Image src={LOGO_WHITE} alt='' height={61} width={90} />
          <NavLinks behavior='footer'/>
        </div>
        <p className='text-xs'>Derechos reservados a <span className='italic'>Biological knowledge</span></p>
      </div>
    </footer>
  )
}

export default Footer