import React from 'react'
import HeaderInfoItem from './HeaderInfoItem'
import { ColorsEnum } from '@/constants/enums'

const InfoHeader = () => {
    return (
        <div className='w-full bg-white grid md:grid-cols-4 grid-cols-2 px-5 py-3 gap-4 rounded-sm shadow-sm'>
            <HeaderInfoItem color={ColorsEnum.Blue} count={100} percentage={12} title='Yolo jnnds' showIcon />
            <HeaderInfoItem color={ColorsEnum.Red} count={100} percentage={-12} title='Yolo jnnds' showIcon />
            <HeaderInfoItem color={ColorsEnum.Green} count={100} percentage={12} title='Yolo jnnds' showIcon hasGraph />
            <HeaderInfoItem color={ColorsEnum.Yellow} count={100} percentage={-12} title='Yolo jnnds' showIcon />
        </div>
    )
}

export default InfoHeader