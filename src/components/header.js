import logoPath from "../images/logo.svg";
import React from "react";

export default function Header() {
    return (
        <header className="header">
            <img src={logoPath}
                 alt="Логотип сервиса Mesto"
                 className="header__logo"/>
        </header>
    )
}