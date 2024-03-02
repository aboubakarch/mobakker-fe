import React, { FC } from 'react'

const PageHeader: FC<IPageHeaderProps> = ({
    title,
    description,
    children
}) => {
    return (

        <div className='w-full flex justify-between'>
            <div className="md:w-1/2 w-full flex flex-col">
                <h1 className="font-medium text-2xl ">{title}</h1>
                <p className="line-clamp-2 text-sm">{description}</p>
            </div>
            {children}
        </div>

    )
}

export default PageHeader