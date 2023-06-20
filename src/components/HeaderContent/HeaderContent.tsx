import { FC } from "react"
import "./HeaderContent.css"

interface IHeaderContent {
    title: string
    children: React.ReactNode
}

const HeaderContent: FC<IHeaderContent> = ({ title, children }) => {
    return (
        <div className="header-content">
            <h4 className="header-content__title">
                {title}
            </h4>
            <p className="header-content__text">
                {children}
            </p>
        </div>
    )
}

export default HeaderContent