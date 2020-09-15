import React from "react";

export default function Register() {
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
          Уже зарегистрированы? Войти
        </p>
      </section>
    </main>
  )
}
