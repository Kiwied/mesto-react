import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../utils/Auth";

export default function Login(props) {
  const [opacity, setOpacity] = React.useState(1);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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

  function handleRegisterRedirect() {
    props.onHeaderChange('register')
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!password || !email) {
      return;
    }
    auth.singIn(password, email)
      .then(data => {
        if (data.token) {
          setPassword('');
          setEmail('');
          props.handleLogin();
          history.push('/');
        }
      })
      .catch(() => {
        props.onError();
      })
  }

  return (
    <main>
      <section className="auth">

        <form className="auth-form"
              onSubmit={handleSubmit}
        >
          <h2 className="auth-form__title">Вход</h2>
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
                  value="loggedIn"
                  onClick={handleSubmit}
          >
            Войти
          </button>
        </form>

        <p className="auth__redirect">
          Ещё не зарегистрированы? {<Link to="/signup"
                                          style={linkStyle}
                                          onMouseEnter={handleMouseEnter}
                                          onMouseLeave={handleMouseLeave}
                                          onClick={handleRegisterRedirect}
        >
          Регистриация
        </Link>}
        </p>
      </section>
    </main>
  )
}

