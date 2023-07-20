import React from 'react'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className='z-40 py-4 bg-white shadow-bottom dark:bg-gray-800'>
        <div className='container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300'>
            <div className='flex justify-center flex-1 lg:mr-32'>
                <div className='relative w-full max-w-xl mr-6 focus-within:text-purple-500'>
                    <div className='absolute inset-y-0 flex items-center pl-2'>
                        <Search size={16} />
                    </div>
                    <input type="text" className='block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 pl-8 text-gray-700' />
                </div>
            </div>
            <ul className='flex items-center flex-shrink-0 space-x-6'></ul>
        </div>
    </header>
  )
}
