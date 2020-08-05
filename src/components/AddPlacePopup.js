import PopupWithForm from "./PopupWithForm";
import React from "react";

export default function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleClose() {
    props.onClose();
    setName('');
    setLink('');
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name: name,
      link: link
    })
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
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
            value={name}
            onChange={handleNameChange}
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
            value={link}
            onChange={handleLinkChange}
            className="form__input form__input_link"
            required
          />
          <span className="form__input-error"
                id="link-input-error">
          </span>
        </>
      )}
    />
  )
}
