import React from "react";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return(
      <li className="element">
        <img className="element__image"
             onClick={handleClick}
             src={props.card.link}
             alt={`Фото ${props.card.name}`}
        />
        <div className="element__сaption">
          <h3 className="element__title">{props.card.name}</h3>
          <div className="element__likes">
            <button type="button" className="element__like"/>
            <p className="element__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
        <button type="button" className="element__delete"/>
      </li>
  )
}