'use client'
import { routesNav } from '@/utils/routes'
import React, { FC } from 'react'
import Route from './Route'
import { usePathname } from 'next/navigation'
import { ActiveRoute } from '@/utils/ActiveRoute'

interface NavLinksProps {
  behavior: 'Nav' | 'footer'
}

const NavLinks: FC<NavLinksProps> = ({ behavior }) => {
  const path = usePathname()
  return (
    <ul className={`
      ${behavior === 'Nav' && 'flex gap-x-7'}
      ${behavior === 'footer' && 'flex gap-x-7 flex-1 justify-evenly '}
    `}>
      {routesNav.map((route, index) => (
        <li key={index} className={`
          ${ActiveRoute(path, route.path, behavior)}`
        }>
          <Route
            name={route.name}
            path={route.path}
          />
        </li>
      ))}
    </ul>
  )
}

export default NavLinks