import React from 'react'
import { Input } from './ui/input'

type Props = {}

export default function News({ }: Props) {
  return (
    <aside className='flex flex-col p-3'>
      <Input className='bg-gray-100 rounded-full' placeholder='Search' />
    </aside>
  )
}