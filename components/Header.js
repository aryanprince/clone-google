import React from 'react'
import { useRef } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { XIcon } from '@heroicons/react/outline'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'

import HeaderOptions from './HeaderOptions'

function Header() {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()

        const term = searchInputRef.current.value

        if (!term) return

        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.com/logos/doodles/2022/oskar-salas-112th-birthday-6753651837108454.2-s.png"
                    height={40}
                    width={120}
                    onClick={() => router.push('/')}
                    className="cursor-pointer"
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
                    <XIcon
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => {
                            searchInputRef.current.value = ''
                        }}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>

                <img
                    loading="lazy"
                    className="h-10 rounded-full cursor-pointer transition duration-150  transform hover:scale-110 ml-auto"
                    src="https://coaching.papareact.com/ai9"
                    alt="profile pic"
                />
            </div>

            {/* Header Options */}
            <HeaderOptions />
        </header>
    )
}

export default Header
