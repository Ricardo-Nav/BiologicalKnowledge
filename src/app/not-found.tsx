import Icon from '@/components/General/Icon'
import Main from '@/components/General/Main'
import Image from 'next/image'
import React from 'react'
import LOGO_PRIMARY from '../../public/images/Biological_know_primary.png'
import Button from '@/components/General/Button'

const NotFoundPage = () => {
  return (
    <Main primary>
      <div className='text-base font-normal w-[710px]'>
        <Image src={LOGO_PRIMARY} alt='' className='w-[216px] h-auto m-auto' />
        <h1 className='font-bold text-[32px] text-center w-full my-5'>Biological knowledge</h1>
        <h2 className='font-bold text-xl'>Al parecer estas perdido</h2>
        <div className='flex flex-col text-center w-3/4 m-auto gap-y-3'>
          <Icon type='solid' icon='bug' size='lg' />
          <p>No te pierdas los miles de conocimientos nuevos que son compartidos por la comunidad. Continua con la experiencia de seguir aprendiendo</p>
          <Button text='Volver al Inicio' secondary link='/'/>
        </div>
      </div>
    </Main>
  )
}

export default NotFoundPage