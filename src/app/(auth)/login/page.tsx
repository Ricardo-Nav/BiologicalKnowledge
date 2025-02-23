import MainAuth from '@/components/Auth/MainAuth'
import React from 'react'
import LOGO_SECONDARY from '../../../../public/images/Biological_know_secondary.png'
import Image from 'next/image'
import Input from '@/components/General/Input'
import InputPassword from '@/components/General/InputPassword'
import Button from '@/components/General/Button'
import Link from 'next/link'
import Background from '@/components/Auth/Background'

const LoginPage = () => {
  return (
    <MainAuth>
      <Background />
      <div className='font-bold text-lg min-w-[750px] max-w-[750px]'>
        <Image src={LOGO_SECONDARY} alt='' className='w-[126px] h-auto m-auto' />
        <div className='w-max m-auto'>
          <h1 className='text-[32px] mt-5 mb-3'>Biological Knowledge</h1>
          <Input
            type='text'
            name='usuario'
            label='Usuario'
            placeholder='Introduce tu usuario'
          />
          <InputPassword
            name='contraseña'
            label='Contraseña'
            placeholder='Introduce tu contraseña'
          />
          <div className='text-sm flex flex-col items-center w-max m-auto gap-1 z-20 relative'>
            <Button
              text='Iniciar Sesión'
              primary
            />
            <Link href={'/signup'} className='text-whiteLotus'>No tengo cuenta. Registrarme</Link>
          </div>
        </div>
      </div>
    </MainAuth>
  )
}

export default LoginPage