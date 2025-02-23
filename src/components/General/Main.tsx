import React, { FC } from 'react'

interface MainProps {
  children: React.ReactNode
  additionalClass?: string
  primary?: boolean
  secondary?: boolean
}

const Main:FC<MainProps> = ({children, additionalClass, primary, secondary}) => {
  return (
    <div className={`w-max text-primary m-auto p-5
      ${primary && 'bg-gradient-to-b from-whiteLotus to-secondary'}
      ${secondary && 'bg-whiteLotus'}
      ${additionalClass}
      `}>{children}</div>
  )
}

export default Main