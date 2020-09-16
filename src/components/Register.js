import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../utils/Auth";

export default function Register(props) {
  const [opacity, setOpacity] = React.useState(1);
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const history = useHistory();

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

  function handleLoginRedirect() {
    props.onHeaderChange('login')
  }

  const handleLoggedInRedirect = () => {
    props.onHeaderChange('loggedIn');
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth.register(password, email)
      .then(res => {
        if (res) {
          history.push('/signin');
        } else {
          console.log('Что то пошло не так')
        }
      })
  }

  return (
    <main>
      <section className="auth">

        <form className="auth-form"
              onSubmit={handleSubmit}
        >
          <h2 className="auth-form__title">Регистрация</h2>
          <input
            type="email"
            placeholder="Email"
            className="auth-form__input"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            className="auth-form__input"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit"
                  className="auth-form__submit"
                  onClick={handleLoggedInRedirect}
          >
            Зарегистрироваться
          </button>
        </form>

        <p className="auth__redirect">
          Уже зарегистрированы? {<Link to="/signin"
                                       style={linkStyle}
                                       onMouseEnter={handleMouseEnter}
                                       onMouseLeave={handleMouseLeave}
                                       onClick={handleLoginRedirect}
        >
          Войти
        </Link>}
        </p>
      </section>
    </main>
  )
}
