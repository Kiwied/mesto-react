const jwt = localStorage.getItem('token');

export const apiInfo = {
  baseUrl: 'https://www.api.kiwied.students.nomoreparties.xyz',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwt}`
  }
}
