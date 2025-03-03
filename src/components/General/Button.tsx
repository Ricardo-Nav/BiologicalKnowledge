import Link from 'next/link'
import React, { FC } from 'react'

interface ButtonProps {
  text: string
  primary?: boolean
  secondary?: boolean
  link?: string
  additionalClass?: string
}

const Button: FC<ButtonProps> = ({ text, primary, secondary, link, additionalClass }) => {
  return (
    <Link href={link ?? ''}>
      <button className={`w-[130px] h-[30px] rounded-lg transition-all
      ${primary && 'bg-whiteLotus text-primary hover:opacity-70'}
      ${secondary && 'bg-primary text-whiteLotus hover:opacity-70'}
      ${additionalClass}  
    `}
      >
        {text}
      </button>
    </Link>
  )
}

export default Button