import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { Menu } from '@/types/translations/Menu';

type Props = {
  translations: Menu
}

export default function Sidebar({ translations }: Props) {
  return (
    <aside className='flex flex-col gap-4 p-3'>
      <Link href='/'>
        <FaXTwitter className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-colors duration-150' />
      </Link>
      <Link href='/' className='flex items-center gap-2 w-fit cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-colors duration-150'>
        <HiHome className='w-8 h-8' />
        <span className='font-bold hidden xl:inline'>{translations.home}</span>
      </Link>
      <Button variant='info' className='font-bold rounded-full px-4 w-48'>{translations.sign_in}</Button>
    </aside>
  )
}