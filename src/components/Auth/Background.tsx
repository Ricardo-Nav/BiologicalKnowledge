import React from 'react'
import PINE_SECONDARY from '../../../public/images/Pine_secondary.png'
import MOUNTAIN_SECONDARY from '../../../public/images/Mountain_secondary.png'
import Image from 'next/image'



const Background = () => {
  return (
    <div className='absolute bottom-0 right-0 left-0 w-full m-auto flex justify-between items-baseline -z-0'>
      <Image src={PINE_SECONDARY} alt='' className='w-[153px] h-auto' />
      <Image src={MOUNTAIN_SECONDARY} alt='' className='w-[312px] h-auto' />
      <Image src={PINE_SECONDARY} alt='' className='w-[153px] h-auto' />
    </div>
  )
}

export default Background