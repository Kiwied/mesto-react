import React from "react";
import {Link} from "react-router-dom";

export default function Register() {
  const [opacity, setOpacity] = React.useState(1);

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'opacity .15s linear',
    opacity: opacity
  }

  function handleMouseEnter() {
    setOpacity(0.6);
  }

  function handleMouseLeave() {
    setOpacity(1);
  }

  return (
    <main>
      <section className="auth">

        <form className="auth-form">
          <h2 className="auth-form__title">Регистрация</h2>
          <input
            type="email"
            placeholder="Email"
            className="auth-form__input"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            className="auth-form__input"
            required
          />
          <button type="submit"
                  className="auth-form__submit"
          >
            Зарегистрироваться
          </button>
        </form>

        <p className="auth__redirect">
          Уже зарегистрированы? {<Link to="/sign-in"
                                       style={linkStyle}
                                       onMouseEnter={handleMouseEnter}
                                       onMouseLeave={handleMouseLeave}>
          Войти
        </Link>}
        </p>
      </section>
    </main>
  )
}
