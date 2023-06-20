import { useState } from "react"
import IconLang from "../IconLang/IconLang"
import "./HeaderSelect.css"

interface IButtonLang {
    id: number,
    lang: "US" | "NL" | "BY" | "RU" | "KZ" | "TR",
    text: string
}

const buttonsLang: IButtonLang[] = [
    {
        id: 1,
        lang: "US",
        text: "United States"
    },
    {
        id: 2,
        lang: "NL",
        text: "Netherlands"
    },
    {
        id: 3,
        lang: "BY",
        text: "Беларусь"
    },
    {
        id: 4,
        lang: "RU",
        text: "Россия"
    },
    {
        id: 5,
        lang: "KZ",
        text: "Казахстан"
    },
    {
        id: 6,
        lang: "TR",
        text: "Türkiye"
    }
]

const HeaderSelect = () => {
    const [active, setActive] = useState<boolean>(false)
    const [selectItem, setSelectItem] = useState<number>(3)
    

    return (
        <div className="header-select__wrapper">
            <div onClick={() => setActive(!active)} className={`header-select ${active ? "active" : ""}`}>
                <IconLang lang={"RU"} size={"18"} />
                Ru
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646484 1.35354L1.35359 0.646432L7.00004 6.29288L12.6465 0.646432L13.3536 1.35354L7.00004 7.70709L0.646484 1.35354Z"
                        fill={active ? "#1D7DED" : "#849BAF"} />
                </svg>
            </div>
            <div className={`header-select__menu ${active ? "active" : ""}`}>
                <h4 className="header-select__title">
                    Страны
                </h4>
                <div className="header-select__list">
                    {buttonsLang.map((btn, index) =>
                        <div key={btn.id} onClick={() => setSelectItem(index)} className={`header-select__item ${selectItem === index ? "active" : ""}`}>
                            <div className="header-select__content">
                                <IconLang lang={btn.lang} size={"12"} />
                                <span className="header-select__text">
                                    {btn.text}
                                </span>
                            </div>
                            {selectItem === index && (
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646484 3.35348L1.35359 2.64637L5.00004 6.29282L11 0.292893L11.7071 1L5.00004 7.70703L0.646484 3.35348Z" fill="#1D7DED" />
                                </svg>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderSelect