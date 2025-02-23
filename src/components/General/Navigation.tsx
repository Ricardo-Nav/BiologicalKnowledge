import Image from 'next/image'
import React from 'react'
import LOGO_BLACK from '../../../public/images/Biological_know_black.png'
import Button from './Button'
import NavLinks from './NavLinks'

const Navigation = () => {
  return (
    <div className='w-full  bg-gradient-to-b from-fourth via-fourth via-35% to-secondary mb-8'>
      <nav className='max-w-[790px] max-h-[70px] m-auto flex items-center justify-between'>
        <Image src={LOGO_BLACK} height={61} width={90} alt='' />
        <NavLinks behavior='Nav'/>
        <div className='flex gap-x-4'>
          <Button
          primary
          text={'Iniciar Sesion'}
          link='/login'
          />
          <Button
          secondary
          text={'Suscribirse'}
          link='/signup'
          />
        </div>
      </nav>
    </div>
  )
}

export default Navigation