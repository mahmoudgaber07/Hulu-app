import React from 'react'
import Image from 'next/image'
import { HeaderItems } from './HeaderItems'
import { LightBulbIcon, HomeIcon, MagnifyingGlassIcon, UserIcon, CheckBadgeIcon, InboxStackIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
export const Header = () => {
  return (
      <header className='header flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
          <div className='flex flex-grow justify-evenly max-w-2xl'>
          <HeaderItems title="HOME" Icon={HomeIcon} /> 
          <HeaderItems title="TRENDING" Icon={LightBulbIcon} />
          <HeaderItems title="SEARCH" Icon={MagnifyingGlassIcon} />
          <HeaderItems title="VEREFIED" Icon={CheckBadgeIcon} />
          <HeaderItems title="COLLECTIONS" Icon={InboxStackIcon} />
          <HeaderItems title="USER" Icon={UserIcon} />
          </div>
      <Link href="/">
          <Image className="object-contain cursor-pointer" src="https://cdn.freebiesupply.com/logos/large/2x/hulu-logo-black-and-white.png" width={200} height={30} alt="logo-img"/>
      </Link>
      </header>
  )
}
