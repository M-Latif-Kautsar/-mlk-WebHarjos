import React from 'react'
import { AlignJustify } from 'lucide-react'

export default function SideMenu() {
  return (
    <aside className='z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block'>
        <ul className='mt-6'>
            <li className='relative px-6 py-3'>
                <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-800 dark:text-gray-100' href="">
                    <span className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'></span>
                    <AlignJustify size={24} />
                    <span className='ml-4'>Dashboard</span>
                </a>
            </li>
            <li className='relative px-6 py-3'>
                <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-800 dark:text-gray-100' href="">
                    <span className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'></span>
                    <AlignJustify size={24} />
                    <span className='ml-4'>Dashboard</span>
                </a>
            </li>
            <li className='relative px-6 py-3'>
                <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-800 dark:text-gray-100' href="">
                    <span className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'></span>
                    <AlignJustify size={24} />
                    <span className='ml-4'>Dashboard</span>
                </a>
            </li>
        </ul>
    </aside>
  )
}
