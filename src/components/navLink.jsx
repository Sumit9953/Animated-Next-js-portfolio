"use client"
import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'

const NavLink = ({link}) => {
    const pathName = usePathname();
    // console.log(pathName);
  return (
    <Link className={`rounded  p-1 ${pathName === link.url && "bg-black dark:bg-white dark:text-black text-white" }`} href={link.url}>{link.title}</Link>
  )
}

export default NavLink