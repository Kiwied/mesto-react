import React from "react";

export default function Login() {
  return (
    <main>
      <section className="auth">

        <form className="auth-form">
          <h2 className="auth-form__title">Вход</h2>
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
            Войти
          </button>
        </form>

        <p className="auth__redirect">
          Ещё не зарегистрированы? Регистрация
        </p>
      </section>
    </main>
  )
}
