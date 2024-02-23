import { useContext, useEffect, useState } from "react";
import DataContext, { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const byDateDesc = data.focus;

  let event = 0; 

  byDateDesc.map((evt, idx) => {
    evt.id = idx;
  })

  const nextCard = () => {
    setTimeout(
      () => {
        if(index < byDateDesc.length - 1) {/* Réécriture du code afin qu'il soit plus lisible et modification de la condition afin que l'indice n'aille pas plus loin que l'indice du dernier élément. */
          event++;
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      },
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });

  byDateDesc.map(evt => {
    evt.monthName = getMonth(new Date(evt.date))
  })

  /* const slideCardDescriptionRender = () => {
    return (

    );
  } */

  return (
    <div className="SlideCardList">
      {byDateDesc.map((evt, idx) => (
        <>
          <div
            key={evt.id} /* Modification de l'identifiant de la clé pour chaque événement à afficher dans le slider. */
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={evt.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{evt.title}</h3>
                <p>{evt.description}</p>
                <div>{evt.monthName}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={`radio-button-${evt.id}${radioIdx}`}
                  type="radio"
                  name="radio-button"
                  checked={radioIdx === index} /* Modification de la condition afin que le bouton radio correspondant à l'événement sélectionné soit coché. */
                  readOnly /* Ajout de cette propriété afin d'indiquer à react que cet entrée radio ne prend pas en charge l'événement de changement. */
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider;
