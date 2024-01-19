import React from 'react'
import logo from '../assets/img/logo_lba_400x400.png'

const Footer = () => {
  return (
<footer classNameName="bg-white rounded-lg shadow dark:bg-gray-900 mt-auto">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-16" alt="Logo LBA" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">La Bonne Alternance</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/mentions-legales" className="hover:underline me-4 md:me-6">Mentions légales</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://La-bonne-alternance.com" className="hover:underline">La Bonne Alternance™</a>. Tous droits réservés.</span>
    </div>
</footer>
  )
}

export default Footer