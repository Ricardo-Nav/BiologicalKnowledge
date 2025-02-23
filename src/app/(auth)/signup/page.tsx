import React from 'react'
import LOGO_SECONDARY from '../../../../public/images/Biological_know_secondary.png'
import MainAuth from '@/components/Auth/MainAuth'
import Background from '@/components/Auth/Background'
import Image from 'next/image'
import Input from '@/components/General/Input'
import InputPassword from '@/components/General/InputPassword'
import Button from '@/components/General/Button'
import Link from 'next/link'

const SignupPage = () => {
  return (
    <MainAuth>
      <Background />
      <div className='font-bold text-lg min-w-[750px] max-w-[750px]'>
        <Image src={LOGO_SECONDARY} alt='' className='w-[126px] h-auto m-auto' />
        <div className='w-max m-auto'>
          <h1 className='text-[32px] mt-5 mb-3'>Biological Knowledge</h1>
          <Input
            type='text'
            name='nombre'
            label='Nombre'
            placeholder='Introduce tu nombre'
          />
          <Input
            type='text'
            name='usuario'
            label='Usuario'
            placeholder='Introduce un nombre de usuario'
          />
          <Input
            type='email'
            name='email'
            label='Correo Electronico'
            placeholder='Introduce un correo electronico'
          />
          <InputPassword
            name='contraseña'
            label='Contraseña'
            placeholder='Introduce una contraseña'
          />
          <InputPassword
            name='confirm-contraseña'
            label='Confirmar Contraseña'
            placeholder='Repite la contraseña'
          />
          <div className='mt-5 text-sm flex flex-col items-center w-max m-auto gap-1 z-20 relative'>
            <Button
              text='Registrarme'
              secondary
              additionalClass='font-semibold'
            />
            <Link href={'/login'} className='text-whiteLotus'>Ya tengo cuenta. Iniciar sesión</Link>
          </div>
        </div>
      </div>
    </MainAuth>
  )
}

export default SignupPage