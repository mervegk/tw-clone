'use client'
import React from 'react'
import { useLanguage } from '@/context/Language'

type Props = {}

export default function Header({ }: Props) {
  const { language, changeLanguage } = useLanguage()
  return (
    <header>
      <p>Current Lang: {language}</p>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className='text-black'
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
        <option value="de">Deutsch</option>
      </select>
    </header>
  )
}