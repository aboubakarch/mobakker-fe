import * as React from "react"
import { SVGProps } from "react"

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
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

export const BulbIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_9265)">
            <path d="M3 12H4M12 3V4M20 12H21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 16C8.16047 15.3704 7.54033 14.4925 7.22743 13.4908C6.91453 12.4892 6.92473 11.4144 7.25658 10.4189C7.58844 9.4233 8.22512 8.55739 9.07645 7.94379C9.92778 7.33019 10.9506 7 12 7C13.0494 7 14.0722 7.33019 14.9236 7.94379C15.7749 8.55739 16.4116 9.4233 16.7434 10.4189C17.0753 11.4144 17.0855 12.4892 16.7726 13.4908C16.4597 14.4925 15.8395 15.3704 15 16C14.6096 16.3865 14.3156 16.8594 14.1419 17.3806C13.9681 17.9018 13.9195 18.4566 14 19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19C10.0805 18.4566 10.0319 17.9018 9.85813 17.3806C9.6844 16.8594 9.39043 16.3865 9 16Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.69995 17H14.3" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_9265">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>

)

export const BellIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_9272)">
            <path d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_9272">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>

)



export const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
export const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props} >
        <g clipPath="url(#clip0_1777_16683)">
            <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16683">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>

)
export const PaymentIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_16678)">
            <path d="M9 7H15M9 11H15M13 15H15M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21L16 19L14 21L12 19L10 21L8 19L5 21Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16678">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
export const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_16671)">
            <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 7C14 7.79565 14.3161 8.55871 14.8787 9.12132C15.4413 9.68393 16.2044 10 17 10C17.7956 10 18.5587 9.68393 19.1213 9.12132C19.6839 8.55871 20 7.79565 20 7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4C16.2044 4 15.4413 4.31607 14.8787 4.87868C14.3161 5.44129 14 6.20435 14 7Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16671">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_16666)">
            <path d="M12 2L15 7H21L18 12L21 17H15L12 22L9 17H3L6 12L3 7H9L12 2Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16666">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
export const SpeakerIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_16659)">
            <path d="M18 8C18.7956 8 19.5587 8.31607 20.1213 8.87868C20.6839 9.44129 21 10.2044 21 11C21 11.7956 20.6839 12.5587 20.1213 13.1213C19.5587 13.6839 18.7956 14 18 14" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 8V19C10 19.2652 9.89464 19.5196 9.70711 19.7071C9.51957 19.8946 9.26522 20 9 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V14" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7.99995L16.524 4.22995C16.6555 4.12046 16.8154 4.0507 16.9851 4.02885C17.1548 4.00701 17.3271 4.03398 17.482 4.1066C17.6369 4.17922 17.7679 4.29449 17.8597 4.4389C17.9514 4.5833 18.0001 4.75087 18 4.92195V17.0779C18.0001 17.249 17.9514 17.4166 17.8597 17.561C17.7679 17.7054 17.6369 17.8207 17.482 17.8933C17.3271 17.9659 17.1548 17.9929 16.9851 17.971C16.8154 17.9492 16.6555 17.8794 16.524 17.7699L12 13.9999H4C3.73478 13.9999 3.48043 13.8946 3.29289 13.7071C3.10536 13.5195 3 13.2652 3 12.9999V8.99995C3 8.73473 3.10536 8.48038 3.29289 8.29284C3.48043 8.1053 3.73478 7.99995 4 7.99995H12Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16659">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
export const PageIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_16650)">
            <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V12" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 21H19" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 18H19" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 15H19" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16650">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
export const PersonStarIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_16643)">
            <path d="M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H10.5" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.8 20.817L15.628 21.955C15.5635 21.9885 15.491 22.0035 15.4186 21.9982C15.3461 21.9929 15.2765 21.9676 15.2176 21.9251C15.1587 21.8826 15.1127 21.8245 15.0849 21.7574C15.0571 21.6903 15.0485 21.6167 15.06 21.545L15.475 19.134L13.718 17.427C13.6656 17.3763 13.6284 17.3119 13.6108 17.2411C13.5933 17.1703 13.5959 17.096 13.6186 17.0266C13.6412 16.9573 13.6829 16.8957 13.7388 16.8489C13.7948 16.8021 13.8627 16.772 13.935 16.762L16.363 16.41L17.449 14.217C17.4815 14.1517 17.5315 14.0967 17.5935 14.0583C17.6556 14.0199 17.727 13.9995 17.8 13.9995C17.8729 13.9995 17.9444 14.0199 18.0064 14.0583C18.0685 14.0967 18.1185 14.1517 18.151 14.217L19.237 16.41L21.665 16.762C21.737 16.7723 21.8047 16.8027 21.8604 16.8495C21.9162 16.8963 21.9576 16.9578 21.9802 17.027C22.0028 17.0962 22.0056 17.1703 21.9882 17.241C21.9708 17.3117 21.9341 17.3761 21.882 17.427L20.125 19.134L20.539 21.544C20.5514 21.6158 20.5434 21.6898 20.516 21.7573C20.4885 21.8249 20.4426 21.8834 20.3836 21.9262C20.3245 21.969 20.2547 21.9944 20.1819 21.9995C20.1092 22.0046 20.0364 21.9891 19.972 21.955L17.8 20.817Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16643">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
export const PeopleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_16633)">
            <path d="M10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 21V20C8 19.4696 8.21071 18.9609 8.58579 18.5858C8.96086 18.2107 9.46957 18 10 18H14C14.5304 18 15.0391 18.2107 15.4142 18.5858C15.7893 18.9609 16 19.4696 16 20V21" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 5C15 5.53043 15.2107 6.03914 15.5858 6.41421C15.9609 6.78929 16.4696 7 17 7C17.5304 7 18.0391 6.78929 18.4142 6.41421C18.7893 6.03914 19 5.53043 19 5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3C16.4696 3 15.9609 3.21071 15.5858 3.58579C15.2107 3.96086 15 4.46957 15 5Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 10H19C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12V13" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 5C5 5.53043 5.21071 6.03914 5.58579 6.41421C5.96086 6.78929 6.46957 7 7 7C7.53043 7 8.03914 6.78929 8.41421 6.41421C8.78929 6.03914 9 5.53043 9 5C9 4.46957 8.78929 3.96086 8.41421 3.58579C8.03914 3.21071 7.53043 3 7 3C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 13V12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10H7" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16633">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
export const TicketIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_16625)">
            <path d="M15 5V7" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 11V13" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 17V19" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V10C20.4696 10 19.9609 10.2107 19.5858 10.5858C19.2107 10.9609 19 11.4696 19 12C19 12.5304 19.2107 13.0391 19.5858 13.4142C19.9609 13.7893 20.4696 14 21 14V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V14C3.53043 14 4.03914 13.7893 4.41421 13.4142C4.78929 13.0391 5 12.5304 5 12C5 11.4696 4.78929 10.9609 4.41421 10.5858C4.03914 10.2107 3.53043 10 3 10V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16625">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>

)
export const ClipboardIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_16614)">
            <path d="M8 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H11.697" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 14V18H22" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 11V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5H14" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H12C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C14 5.53043 13.7893 6.03914 13.4142 6.41421C13.0391 6.78929 12.5304 7 12 7H10C9.46957 7 8.96086 6.78929 8.58579 6.41421C8.21071 6.03914 8 5.53043 8 5Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 18C14 19.0609 14.4214 20.0783 15.1716 20.8284C15.9217 21.5786 16.9391 22 18 22C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18C22 16.9391 21.5786 15.9217 20.8284 15.1716C20.0783 14.4214 19.0609 14 18 14C16.9391 14 15.9217 14.4214 15.1716 15.1716C14.4214 15.9217 14 16.9391 14 18Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 11H12" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 15H11" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16614">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
export const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1777_16607)">
            <path d="M5 12H3L12 3L21 12H19" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 12H14V16H10V12Z" stroke="#637381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1777_16607">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
export const InfoArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1574_31775)">
            <path d="M5.5 31.1668L16.5 20.1668L23.8333 27.5002L38.5 12.8335" stroke={props?.stroke ?? "#000"} strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.6667 12.8335H38.5001V25.6668" stroke={props?.stroke ?? "#000"} strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1574_31775">
                <rect width="44" height="44" fill="white" />
            </clipPath>
        </defs>
    </svg>

)
export const InfoArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1574_31785)">
            <path d="M5.5 12.8335L16.5 23.8335L23.8333 16.5002L38.5 31.1668" stroke={props?.stroke ?? "#000"} strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.5 18.3335V31.1668H25.6666" stroke={props?.stroke ?? "#000"} strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1574_31785">
                <rect width="44" height="44" fill="white" />
            </clipPath>
        </defs>
    </svg>


)




