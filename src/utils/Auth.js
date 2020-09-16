class Auth {
  constructor() {
    this._baseUrl = 'https://auth.nomoreparties.co'
  }

  register(pass, email) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ pass, email })
    })
      .then((res) => {
        try {
          if (res.status === 200){
            return res.json();
          }
        } catch(err){
          return (err);
        }
      })
      .then(res => {
        return res;
      })
      .catch(err => console.log(err))
  }

  singIn(pass, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        "password": pass,
        "email": email
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          return data;
        } else {
          return;
        }
      })
      .catch(err => console.log(err))
  }

  getContent(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }
}

export const auth = new Auth();
