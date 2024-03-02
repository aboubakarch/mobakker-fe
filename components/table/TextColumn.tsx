import React, { FC } from 'react'

const TextColumn: FC<ITextColumnProps> = ({ text }) => {
    return (
        <div className=" flex items-center justify-center w-max text-center">
            <div className="text-gray-500 text-sm flex items-center font-normal line-clamp-1  leading-snug">{text}</div>
        </div>
    )
}

export default TextColumn