import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({ href, children }) => {
  const pathName = usePathname()
  
  return (
    <div>
      <Link className={`${pathName === href? "bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300" : ""} py-1.5 px-3 rounded-2xl`} href={`${href}`}>{children}</Link>
    </div>
  )
}

export default NavLink