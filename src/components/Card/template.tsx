import * as React from "react";
import "./styles.css";

export const Card = (props: {
  name: string;
  value: number;
  initialValue: number;
  counterClick: (cardValue: number) => void;
  text: string;
  updateCard: (cardId: number) => void;
}) => {
  const { value, counterClick, name, initialValue, text, updateCard } = props;
  const [currentValue, setCurrentValue] = React.useState(initialValue);

  const handleOnClick = () => {
    setCurrentValue(currentValue + 1);
    counterClick(value);
    updateCard(value);
  };

  return (
    <div className="Card" onClick={handleOnClick}>
      <h3>{name}</h3>
      <h4>Value {currentValue}</h4>
      <h4>{text}</h4>
    </div>
  );
};
