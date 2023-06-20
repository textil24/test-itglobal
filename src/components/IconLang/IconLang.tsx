import React, { FC } from 'react'

interface IIconLang {
    lang: "US" | "NL" | "BY" | "RU" | "KZ" | "TR"
    size: string
}

const IconLang: FC<IIconLang> = ({ lang, size }) => {
    switch (lang) {
        case "US":
            return (
                <svg style={{ borderRadius: "50%" }} width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0H0V12H12V0Z" fill="#F1F8FE" />
                    <path d="M12 -1H0V1H12V-1Z" fill="#F5222D" />
                    <path d="M12 3H0V5H12V3Z" fill="#F5222D" />
                    <path d="M7 0H0V5H7V0Z" fill="#2F54EB" />
                    <path d="M12 7H0V9H12V7Z" fill="#F5222D" />
                    <path d="M12 11H0V13H12V11Z" fill="#F5222D" />
                    <circle cx="5.5" cy="1.5" r="0.5" fill="#F1F8FE" />
                    <circle cx="3.5" cy="1.5" r="0.5" fill="#F1F8FE" />
                    <circle cx="1.5" cy="1.5" r="0.5" fill="#F1F8FE" />
                    <circle cx="5.5" cy="3.5" r="0.5" fill="#F1F8FE" />
                    <circle cx="3.5" cy="3.5" r="0.5" fill="#F1F8FE" />
                    <circle cx="1.5" cy="3.5" r="0.5" fill="#F1F8FE" />
                </svg>
            )
        case "NL":
            return (
                <svg style={{ borderRadius: "50%" }} width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0H0V12H12V0Z" fill="#F1F8FE" />
                    <path d="M12 0H0V4H12V0Z" fill="#F5222D" />
                    <path d="M12 8H0V12H12V8Z" fill="#2F54EB" />
                </svg>
            )
        case "BY":
            return (
                <svg style={{ borderRadius: "50%" }} width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0H0V12H12V0Z" fill="#F5222D" />
                    <path d="M12 8H0V12H12V8Z" fill="#01953F" />
                </svg>
            )
        case "RU":
            return (
                <svg style={{ borderRadius: "50%" }} width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0H0V12H12V0Z" fill="#F1F8FE" />
                    <path d="M12 4H0V8H12V4Z" fill="#2F54EB" />
                    <path d="M12 8H0V12H12V8Z" fill="#F5222D" />
                </svg>
            )
        case "KZ":
            return (
                <svg style={{ borderRadius: "50%" }} width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6Z" fill="#00AFCA" />
                    <path d="M9.55402 6.83547C9.22308 7.47627 8.72504 8.01567 8.11263 8.39659C7.50021 8.7775 6.7962 8.98575 6.07512 8.99929C5.35403 9.01284 4.6427 8.83117 4.01641 8.47353C3.39012 8.11588 2.87218 7.59556 2.51741 6.96764L3.47045 6.42918C3.72813 6.88527 4.10433 7.2632 4.55923 7.52297C5.01413 7.78275 5.53081 7.9147 6.05456 7.90486C6.57832 7.89502 7.08967 7.74376 7.53449 7.46709C7.97932 7.19041 8.34106 6.79862 8.58144 6.33318L9.55402 6.83547Z" fill="#FADB14" />
                    <circle cx="6" cy="5" r="2" fill="#FADB14" />
                </svg>
            )
        case "TR":
            return (
                <svg style={{ borderRadius: "50%" }} width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6Z" fill="#F5222D" />
                    <path d="M6.54724 3.47449C5.91947 3.47449 5.31743 3.72389 4.87354 4.16779C4.42964 4.61169 4.1803 5.21373 4.1803 5.8415C4.1803 6.46927 4.42964 7.07131 4.87354 7.5152C5.31743 7.9591 5.91947 8.2085 6.54724 8.2085C7.04694 8.21205 7.53445 8.05421 7.93726 7.75849C7.55074 8.18105 7.04554 8.47696 6.48792 8.60737C5.93029 8.73778 5.34633 8.69659 4.8125 8.48926C4.27867 8.28194 3.8199 7.91815 3.49646 7.44556C3.17302 6.97297 3 6.41368 3 5.84101C3 5.26834 3.17302 4.70905 3.49646 4.23646C3.8199 3.76387 4.27867 3.40002 4.8125 3.19269C5.34633 2.98537 5.93029 2.94424 6.48792 3.07465C7.04554 3.20506 7.55074 3.50091 7.93726 3.92347C7.53435 3.62804 7.04683 3.47059 6.54724 3.47449Z" fill="#F1F8FE" />
                    <path d="M7.90822 6.78853C8.43786 6.78853 8.86722 6.36454 8.86722 5.84153C8.86722 5.31852 8.43786 4.89453 7.90822 4.89453C7.37858 4.89453 6.94922 5.31852 6.94922 5.84153C6.94922 6.36454 7.37858 6.78853 7.90822 6.78853Z" fill="#F1F8FE" />
                </svg>
            )
        default:
            return null
    }
}

export default IconLang