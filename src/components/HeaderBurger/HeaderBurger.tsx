import React, {FC, useState} from 'react';
import "./HeaderBurger.css"

interface IHeaderBurger {
    activeBurger: boolean,
    setActiveBurger: (arg: boolean) => void
}

const HeaderBurger: FC<IHeaderBurger> = () => {
    const [activeBurger, setActiveBurger] = useState<boolean>(false)

    return (
        <div className="header-burger__wrapper">
            <div
                onClick={() => setActiveBurger(!activeBurger)}
                className={activeBurger ? "header-burger active" : "header-burger"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default HeaderBurger;