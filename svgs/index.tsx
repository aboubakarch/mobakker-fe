import * as React from "react"
import { SVGProps } from "react"

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#6B7280"
                stroke="#6B7280"
                d="m15.035 14.313.003.003c.01.007.013.013.016.018.002.004.004.01.004.016.001.012-.002.036-.023.063a.027.027 0 0 1-.01.008.056.056 0 0 1-.025.004c.004 0 0 0-.011-.003a.151.151 0 0 1-.034-.018l-4.166-3.368-.333-.27-.318.29c-1.036.944-2.343 1.47-3.738 1.47a5.438 5.438 0 0 1-3.871-1.604c-2.13-2.13-2.13-5.614 0-7.743A5.438 5.438 0 0 1 6.4 1.575c1.467 0 2.84.572 3.871 1.604l.003.002c1.942 1.92 2.107 4.967.547 7.1l-.28.383.369.3 4.125 3.35ZM2.62 10.83A5.283 5.283 0 0 0 6.4 12.4c1.428 0 2.783-.55 3.78-1.572 2.096-2.073 2.091-5.464-.001-7.556A5.283 5.283 0 0 0 6.4 1.7c-1.433 0-2.76.553-3.777 1.57C.524 5.343.528 8.735 2.62 10.83Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
)

const BulbIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clip-path="url(#clip0_1777_9265)">
            <path d="M3 12H4M12 3V4M20 12H21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 16C8.16047 15.3704 7.54033 14.4925 7.22743 13.4908C6.91453 12.4892 6.92473 11.4144 7.25658 10.4189C7.58844 9.4233 8.22512 8.55739 9.07645 7.94379C9.92778 7.33019 10.9506 7 12 7C13.0494 7 14.0722 7.33019 14.9236 7.94379C15.7749 8.55739 16.4116 9.4233 16.7434 10.4189C17.0753 11.4144 17.0855 12.4892 16.7726 13.4908C16.4597 14.4925 15.8395 15.3704 15 16C14.6096 16.3865 14.3156 16.8594 14.1419 17.3806C13.9681 17.9018 13.9195 18.4566 14 19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19C10.0805 18.4566 10.0319 17.9018 9.85813 17.3806C9.6844 16.8594 9.39043 16.3865 9 16Z" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.69995 17H14.3" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_9265">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>

)

const BellIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clip-path="url(#clip0_1777_9272)">
            <path d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_9272">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>

)



const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <path
            fill="#637381"
            fillRule="evenodd"
            d="M4.41 6.91a.833.833 0 0 1 1.18 0L10 11.322l4.41-4.41a.833.833 0 1 1 1.18 1.178l-5 5a.833.833 0 0 1-1.18 0l-5-5a.833.833 0 0 1 0-1.178Z"
            clipRule="evenodd"
        />
    </svg>
)

export { SearchIcon, BulbIcon, BellIcon, ChevronDownIcon }
