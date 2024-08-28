import React, { FC, ReactNode } from 'react'
import { Button } from '../ui'

const IconButton: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Button variant={"outline"} className='h-8 p-1 bg-screen relative'>
            {children}
        </Button>
    )
}

export default IconButton