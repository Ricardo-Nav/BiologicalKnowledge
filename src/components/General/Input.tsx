import React, { FC } from 'react'
import Icon from './Icon'

interface InputProps {
  name: string
  label?: string
  type: string
  placeholder?: string
  error?: string
}

const Input: FC<InputProps> = ({ name, type, label, placeholder, error }) => {
  return (
    <div className='flex flex-col relative mb-3'>
      <label htmlFor={name} className=''>{label}</label>
      <div className='relative'>
        <input type={type} id={name} placeholder={placeholder}
          className='w-[333px] border-primary border-2 rounded-lg px-3 py-1 text-primary font-normal text-base outline-none'
        />
        {error && <Icon type='solid' icon='message-error' tailwindClass='absolute text-redFlag text-sm -right-4 top-1' />}
      </div>
      {error &&
        <p className='absolute -bottom-3 right-0 text-redFlag text-[10px] font-Archivo font-normal text-right  leading-[10px]'>{error}</p>
      }
    </div>
  )
}

export default Input