import React from 'react'
import HeaderInfoItem from './HeaderInfoItem'
import { ColorsEnum } from '@/constants/enums'

const InfoHeader = () => {
    return (
        <div className='w-full bg-background grid md:grid-cols-4 grid-cols-2 px-5 py-3 gap-4 rounded-sm shadow-md dark:shadow-white/05'>
            <HeaderInfoItem color={ColorsEnum.Blue} heading={100} percentage={12} title='Yolo jnnds' showIcon />
            <HeaderInfoItem color={ColorsEnum.Red} heading={100} percentage={-12} title='Yolo jnnds' showIcon />
            <HeaderInfoItem color={ColorsEnum.Green} heading={100} percentage={12} title='Yolo jnnds' showIcon hasGraph />
            <HeaderInfoItem color={ColorsEnum.Yellow} heading={100} percentage={-12} title='Yolo jnnds' showIcon />
        </div>
    )
}

export default InfoHeader