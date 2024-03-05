import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus;

  const nextCard = () => {
    if (byDateDesc) {
      setTimeout(
        () => {
          if (index < updatedByDateDesc.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        },
        5000
      );
    }
  };

  useEffect(() => {
    nextCard();
  });

  const updatedByDateDesc = byDateDesc?.map(evt => ({
    ...evt,
    monthName: getMonth(new Date(evt.date))
  }));

  return (
    <div className="SlideCardList">
      {updatedByDateDesc?.map((evt, idx) => (
        <div key={evt.id} className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}>
          <img src={evt.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{evt.title}</h3>
              <p>{evt.description}</p>
              <div>{evt.monthName}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {updatedByDateDesc?.map(evt => (
            <input
              key={`radio-button-${evt.id}`}
              type="radio"
              name="radio-button"
              checked={index === updatedByDateDesc.indexOf(evt)}
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;