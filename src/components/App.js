import React from 'react';
import '../index.css';
import Header from "./header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups(evt) {
    //document.getElementById(`popup__${popupSelector}`).classList.remove('popup_opened');
    evt.target.closest('.popup').classList.remove('popup_opened');
    //document.querySelectorAll('.popup').classList.remove('popup_opened');
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="content">
        <Header/>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer/>

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="profile"
          title="Редактировать профиль"
          button="Сохранить"
          children={(
            <>
              <input
                type="text"
                id="name-input"
                name="name"
                placeholder="Имя"
                className="form__input form__input_name"
                minLength="2" maxLength="40"
                pattern="^[A-Za-zА-Яа-яЁё \-]+$"
                required
              />
              <span className="form__input-error"
                    id="name-input-error">
              </span>
              <input
                type="text"
                id="description-input"
                name="about"
                placeholder="Описание"
                className="form__input form__input_description"
                minLength="2" maxLength="200"
                pattern="^[A-Za-zА-Яа-яЁё, \-]+$"
                required
              />
              <span className="form__input-error"
                    id="description-input-error">
              </span>
            </>
          )}
        />

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="new-card"
          title="Новое место"
          button="Создать"
          children={(
            <>
              <input
                type="text"
                id="place-input"
                name="name"
                placeholder="Название"
                className="form__input form__input_name"
                minLength="2" maxLength="30"
                pattern="^[A-Za-zА-Яа-яЁё \-]+$"
                required
              />
              <span className="form__input-error"
                    id="place-input-error">
              </span>
              <input
                type="url"
                id="link-input"
                name="link"
                placeholder="Ссылка на картинку"
                className="form__input form__input_link"
                required
              />
              <span className="form__input-error"
                    id="link-input-error">
              </span>
            </>
          )}
        />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="avatar"
          title="Обновить аватар"
          button="Сохранить"
          children={(
            <>
              <input type="url"
                     id="avatar-link-input"
                     name="avatar"
                     placeholder="Ссылка на картинку"
                     className="form__input form__input_link"
                     required
              />
              <span className="form__input-error"
                    id="avatar-link-input-error">
              </span>
            </>
          )}
        />

        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          button="Да"
        />

        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />
      </div>
    </div>
  );
}

export default App;
