import React from 'react'

function Avatar({ url, className }) {
    return (
        <img
            src={url}
            className={`h-10 rounded-full cursor-pointer transition duration-150  transform hover:scale-110 ${className}`}
            alt="profile pic"
            loading="lazy"
        />
    )
}

export default Avatar
