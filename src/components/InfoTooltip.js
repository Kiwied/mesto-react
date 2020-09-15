import React from "react";
import okPath from "../images/icon-ok.svg"
import crossPath from "../images/icon-cross.svg";

export default function InfoTooltip(props) {
  React.useEffect(() => {
    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        props.onClose(evt);
      }
    }

    document
      .getElementById(`popup__${props.name}`)
      .addEventListener('click', handleOverlayClose)

    return() => {
      document
        .getElementById(`popup__${props.name}`)
        .removeEventListener('click', handleOverlayClose)
    }
  }, [])

  return (
    <section className={`popup ${props.isOpen && 'popup_opened'}`}
             id="popup__infoTooltip"
    >
      <div className="infoTooltip">
        <img className="infoTooltip__icon"
             src={props.loggedIn
               ? okPath
               : crossPath
             }
             alt="Результат регистрации"
        />
        <p className="infoTooltip__caption">
          {props.loggedIn
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так!\n' +
            'Попробуйте ещё раз.'
          }
        </p>
        <button onClick={props.onClose}
                type="button"
                className="popup__close"
        >
        </button>
      </div>
    </section>
  )
}
