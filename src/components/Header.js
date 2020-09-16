import logoPath from "../images/logo.svg";
import React from "react";
import { HeaderContext } from "../contexts/HeaderContext";

export default function Header() {
  const headerContext = React.useContext(HeaderContext);

  return (
      <header className="header">
          <img src={logoPath}
               alt="Логотип сервиса Mesto"
               className="header__logo"
          />

          <p className="header__auth">{headerContext.text}</p>
      </header>
  )
}
