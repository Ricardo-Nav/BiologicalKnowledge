import React, { FC } from 'react'

interface MainAuthProps {
  children: React.ReactNode
}


const MainAuth:FC<MainAuthProps> = ({children}) => {
  return (
    <div className='bg-third text-secondary p-5 w-max m-auto rounded-lg shadow-md shadow-neutral-800 relative'>
      {children}
    </div>
  )
}

export default MainAuth