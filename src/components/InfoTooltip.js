import React from "react";
import { InfoTooltipContext } from "../contexts/infoTooltipContext";

export default function InfoTooltip(props) {
  const infoTooltipContext = React.useContext(InfoTooltipContext);

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
             src={infoTooltipContext.imgPath}
             alt="Результат регистрации"
        />
        <p className="infoTooltip__caption">
          {infoTooltipContext.text}
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
