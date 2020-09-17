import logoPath from "../images/logo.svg";
import React from "react";
import { useHistory, Link } from 'react-router-dom';
import { HeaderContext } from "../contexts/HeaderContext";

export default function Header(props) {
  const headerContext = React.useContext(HeaderContext);
  const [opacity, setOpacity] = React.useState(1);
  const history = useHistory();

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'opacity .15s linear',
    opacity: opacity,
    marginLeft: 24
  }

  function handleMouseEnter() {
    setOpacity(0.6);
  }

  function handleMouseLeave() {
    setOpacity(1);
  }

  function handleSignOut() {
    props.onSignOut();
    localStorage.removeItem('token');
    history.push('/signin');
  }

  function handleLinkClick() {
    if (headerContext.text === 'Войти') {
      props.onHeaderChange('login')
    }
    if (headerContext.text === 'Регистрация') {
      props.onHeaderChange('register')
    }
    console.log(headerContext);
  }

  return (
      <header className="header">
          <img src={logoPath}
               alt="Логотип сервиса Mesto"
               className="header__logo"
          />

          <div className="header__container">
            <p className="header__auth">
              { props.loggedIn
                ? (`${props.email} `)
                : (
                  <Link to={headerContext.redirectPath}
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleLinkClick}
                  >
                    {headerContext.text}
                  </Link>
                )
              }
            </p>
            {props.loggedIn && <Link to=""
                                  style={linkStyle}
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}
                                  onClick={handleSignOut}
            >
              Выйти
            </Link>}
          </div>
      </header>
  )
}
