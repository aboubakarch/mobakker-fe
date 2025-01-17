import { IHeaderInfoProps } from '@/@types/dashboard'
import { colorHelper } from '@/lib/helpers'
import { cn } from '@/lib/utils'
import { InfoArrowDownIcon, InfoArrowUpIcon } from '@/svgs'
import React, { FC } from 'react'
import { PercentagePie } from '../charts/PercentPie'

const HeaderInfoItem: FC<IHeaderInfoProps> = ({ title, heading, color, showIcon = false, hasGraph = false, percentage, className = "", loading = false, iconPosition = false }) => {
    const primaryColor = colorHelper[color];

    return (
        <div className={cn('bg-screen flex justify-between rounded-sm px-3 py-2 flex-1 items-center', className)}>
            <div className=' flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                    <h2 className={`font-semibold text-lg text-${primaryColor.name}`}>{heading}</h2>
                    {percentage !== undefined && <p className='text-xs'>{percentage + "%"}</p>}
                </div>
                <div className='text-icon text-xs'>{title}</div>
            </div>
            {showIcon && <div>
                {hasGraph && percentage !== undefined ?
                    <div>
                        <PercentagePie color={primaryColor.color} percentage={percentage} />
                    </div>
                    :
                    <div>
                        {iconPosition ?
                            <InfoArrowUpIcon stroke={primaryColor.color} /> :
                            <InfoArrowDownIcon stroke={primaryColor.color} />
                        }
                    </div>}

            </div>}
        </div>
    )
}

export default HeaderInfoItem