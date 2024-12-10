"use client"
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-4 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        {/* Logo */}
        <div>
          <Link href='/' className='font-mono text-3xl font-extrabold' onClick={closeMenu}>
            MG
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='sm:hidden'>
          <button
            onClick={toggleMenu}
            className='flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-foreground'
            aria-label='Toggle navigation menu'
          >
            {isMenuOpen ? (
              <span>&times;</span> /* Close Icon */
            ) : (
              <span>&#9776;</span> /* Hamburger Icon */
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-background sm:bg-transparent sm:flex flex-col sm:flex-row items-center sm:gap-10 text-sm font-light text-muted-foreground transition-all duration-300 ${
            isMenuOpen ? 'block text-right space-y-8 p-12 bg-blur-lg -mt-3 hover:text-blue-300 text-xl h-screen py-32' : 'hidden sm:block'
          }`}
        >
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts' onClick={closeMenu}>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects' onClick={closeMenu}>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/courses' onClick={closeMenu}>Courses</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/workwithme' onClick={closeMenu}>Work With Me</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact' onClick={closeMenu}>Contact</Link>
          </li>
        </ul>

        {/* Theme Toggle */}
        <div className='hidden sm:block'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}