import { FC } from "react"
import "./HeaderButton.css"

interface IHeaderButton {
    type: "next" | "prev"
    view: "first" | "second" | "zero"
    children: React.ReactNode
}

const HeaderButton: FC<IHeaderButton> = ({ type, view, children }) => {
    switch (type) {
        case "next":
            return (
                <button className={`header-button next ${view}`}>
                    {children}
                    {view !== "zero" && (
                        <svg
                            style={{ marginLeft: "10px" }}
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.35348 0.646484L0.646371 1.35359L6.29282 7.00004L0.646371 12.6465L1.35348 13.3536L7.70703 7.00004L1.35348 0.646484Z" fill="#1D7DED" />
                        </svg>
                    )}
                </button>
            )
        case "prev":
            return (
                <div className={`header-button__wrapper prev ${view}`}>
                    <button className={`header-button prev ${view}`}>
                        <svg style={{ marginRight: "10px" }} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.64652 0.646484L7.35363 1.35359L1.70718 7.00004L7.35363 12.6465L6.64652 13.3536L0.292969 7.00004L6.64652 0.646484Z" fill="#1D7DED" />
                        </svg>
                        {children}
                    </button>
                </div>
            )
        default:
            return null
    }
}

export default HeaderButton