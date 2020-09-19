import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../utils/Auth";

export default function Register(props) {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const history = useHistory();

  function handleLoginRedirect() {
    props.onHeaderChange('login')
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
          setPassword('');
          setEmail('');
          props.onSigning('success')
          history.push('/signin');
        } else {
          props.onSigning('fail')
          console.log('Что то пошло не так');
        }
      })
      .finally(() => {
        props.onSubmit();
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
                  onClick={handleLoginRedirect}
          >
            Зарегистрироваться
          </button>
        </form>

        <p className="auth__redirect">
          Уже зарегистрированы? {<Link to="/signin"
                                       className="link"
                                       onClick={handleLoginRedirect}
        >
          Войти
        </Link>}
        </p>
      </section>
    </main>
  )
}
