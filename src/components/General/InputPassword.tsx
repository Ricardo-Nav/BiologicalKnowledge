'use client'
import React, { FC, useState } from 'react'
import Icon from './Icon'

interface InputPasswordProps {
  name: string
  label?: string
  placeholder?: string
  error?: string
}

const InputPassword: FC<InputPasswordProps> = ({ name, label, placeholder, error }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className='flex flex-col relative mb-3'>
      <label htmlFor={name} className=''>{label}</label>
      <div className='flex relative'>
        <input type={showPassword ? 'text' : 'password'} id={name} placeholder={placeholder}
          className='w-[333px] border-primary border-2 rounded-lg px-3 py-1 text-primary font-normal text-base outline-none'
        />
        <button className='absolute h-full right-3 top-1' onClick={handleShowPassword}>
          <Icon icon={showPassword ? 'show' : 'hide'} type='solid' size='sm' tailwindClass=' text-primary' />
        </button>
        {error && <Icon type='solid' icon='message-error' tailwindClass='absolute text-redFlag text-sm -right-4 top-1' />}
      </div>
      {error &&
        <p className='absolute -bottom-3 right-0 text-redFlag text-[10px] font-Archivo font-normal text-right  leading-[10px]'>{error}</p>
      }
    </div>
  )
}

export default InputPassword