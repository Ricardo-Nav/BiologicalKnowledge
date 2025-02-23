import React, { FC } from 'react'

interface IconProps {
  type: 'regular' | 'solid' | 'logo'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  icon: string
  tailwindClass?: string
}

const Icon:FC<IconProps> = ({icon, type, size, tailwindClass}) => {
  return (
    <i className={`bx
      ${type === 'regular' && `bx-${icon}`}  
      ${type === 'solid' && `bxs-${icon}`}  
      ${type === 'logo' && `bxl-${icon}`}
      bx-${size}
      ${tailwindClass}  
    `}></i>
  )
}

export default Icon