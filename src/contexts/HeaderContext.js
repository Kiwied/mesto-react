import React from "react";

export const HeaderContext = React.createContext();

export const headers = {
  register: {
    text: 'Войти'
  },
  login: {
    text: 'Регистрация'
  },
  loggedIn: {
    text: 'email@mail.com Выйти'
  }
}
