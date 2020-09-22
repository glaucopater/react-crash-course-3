import * as React from "react";
import "./styles.css";

export const Card = (props: {
  name: string;
  value: number;
  initialValue: number;
  counterClick: (cardValue: number) => void;
}) => {
  const { value, counterClick, name, initialValue } = props;
  const [currentValue, setCurrentValue] = React.useState(initialValue);

  const handleOnClick = () => {
    setCurrentValue(currentValue + 1);
    counterClick(value);
  };

  return (
    <div className="Card" onClick={handleOnClick}>
      <h3>{name}</h3>
      <h4>Value {currentValue}</h4>
    </div>
  );
};
