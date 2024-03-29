/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'

import Footer from '../components/Footer'

export default function Home() {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value

        if (!term) return

        router.push(`/search?term=${term}`)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>Google Clone</title>
                <meta name="description" content="A fully functional Google clone, made by @aryanprince" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className="flex w-full p-5 justify-between text-sm text-gray-700">
                {/* Left Div */}
                <div className="flex space-x-4 items-center">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>

                {/* Right Div */}
                <div className="flex space-x-4 items-center">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>

                    {/* Icon */}
                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

                    {/* Avatar */}
                    <img
                        loading="lazy"
                        className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
                        src="https://avatars.githubusercontent.com/u/45622345?v=4"
                        alt="profile pic"
                        title="Click here to go to my GitHub profile"
                    />
                </div>
            </header>

            {/* Body */}
            <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
                <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google doodle" height={100} width={300} />

                <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                    <SearchIcon className="h-5 mr-3 text-gray-500" />
                    <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none " />
                    <MicrophoneIcon className="h-5" />
                </div>

                <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button className="button" onClick={search}>
                        Google Search
                    </button>
                    <button className="button" onClick={search}>
                        {`I'm Feeling Lucky`}
                    </button>
                </div>
            </form>

            {/* Footer */}
            <Footer />
        </div>
    )
}
