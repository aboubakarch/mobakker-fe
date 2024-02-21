import { IHeaderInfoProps } from '@/@types/dashboard'
import { colorHelper } from '@/lib/helpers'
import { cn } from '@/lib/utils'
import { InfoArrowDownIcon, InfoArrowUpIcon } from '@/svgs'
import React, { FC } from 'react'
import { PercentagePie } from '../charts/percentPie'

const HeaderInfoItem: FC<IHeaderInfoProps> = ({ title, count, color, showIcon = false, hasGraph = false, percentage, className = "" }) => {
    const primaryColor = colorHelper[color];

    return (
        <div className={cn('bg-screen flex justify-between rounded-sm px-3 py-2 flex-1 items-center', className)}>
            <div className=' flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                    <h2 className={`font-semibold text-lg text-${primaryColor.name}`}>{count}</h2>
                    {percentage && <p className='text-xs'>{percentage + "% " + (percentage >= 0 ? "Increase" : "Decrease")}</p>}
                </div>
                <div className='text-icon text-xs'>{title}</div>
            </div>
            {showIcon && percentage && <div>
                {hasGraph ?
                    <div>
                        <PercentagePie color={primaryColor.color} percentage={percentage} />
                    </div>
                    :
                    <div>
                        {percentage >= 0 ?
                            <InfoArrowUpIcon stroke={primaryColor.color} /> :
                            <InfoArrowDownIcon stroke={primaryColor.color} />
                        }
                    </div>}

            </div>}
        </div>
    )
}

export default HeaderInfoItem