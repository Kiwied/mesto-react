import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

export default function Main(props) {

  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserInfo()
        .then(res => {
          setUserName(res.name);
          setUserDescription(res.about);
          setUserAvatar(res.avatar);
        })
        .catch(err => {
          console.log(`Ошибка: ${err}`)
        })

    api.getInitialCards()
        .then(res => {
          setCards(res);
        })
        .catch(err => {
            console.log(`Ошибка: ${err}`)
        });
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__main">
          <div className="profile__avatar-container"
               onClick={props.onEditAvatar}>
            <img
              alt="Аватар профиля"
              className="profile__avatar"
              src={userAvatar}
            />
            <div className="profile__avatar_overlay"/>
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h2 className="profile__name">{userName}</h2>
              <button
                onClick={props.onEditProfile}
                type="button"
                className="profile__edit">
              </button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add">
        </button>
      </section>

      <section>
        <ul className="elements">
          {cards.map(currentCard => (
            <Card
              card={currentCard}
              key={currentCard._id}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}