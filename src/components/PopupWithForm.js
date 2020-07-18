import React from "react";

export default function PopupWithForm(props) {
  React.useEffect(() => {
    /*function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        console.log('321');
        document
          .getElementById(`popup__${props.name}`)
          .classList.remove('popup_opened');
        props.isOpen = false;
      }
    }*/

    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        props.onClose(evt);
      }
    }

    //document.addEventListener('keydown', handleEscClose);
    document
      .getElementById(`popup__${props.name}`)
      .addEventListener('click', handleOverlayClose)

    return() => {
      //document.removeEventListener('keydown', handleEscClose);
      document
        .getElementById(`popup__${props.name}`)
        .removeEventListener('click', handleOverlayClose)
    }
  })

  return (
      <section
        onKeyDown={props.onEsc}
        className={`popup${props.isOpen ? ' popup_opened' : ''}`}
        id={`popup__${props.name}`}
      >
        <form className="form" noValidate>
          <h3 className="form__title">{props.title}</h3>
          {props.children}
          <button type="submit"
                  name={props.button}
                  className="form__save">
            {props.button}
          </button>
          <button onClick={props.onClose}
                  type="button"
                  className="popup__close">
          </button>
        </form>
      </section>
  )
}
