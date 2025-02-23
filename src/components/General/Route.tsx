import Link from 'next/link'
import React, { FC } from 'react'

interface RouteProps {
  name: string
  path: string
}

const Route:FC<RouteProps> = ({name, path}) => {
  return (
    <Link href={path} className='font-semibold px-3 py-1 border-2 rounded-lg border-transparent'>{name}</Link>
  )
}

export default Route