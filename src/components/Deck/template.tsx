import * as React from "react";
import "./styles.css";

export const Deck = (props: {
  cards: JSX.Element[];
  category: string;
  addCard: (category: string) => void;
}) => {
  const { cards, category, addCard } = props;
  const cssClasses = ["Deck", category];
  const handleOnClick = () => {
    console.log("add new card to category", category);
    addCard(category);
  };

  return (
    <div className={cssClasses.join(" ")}>
      <button onClick={handleOnClick}>+</button>
      {cards}
    </div>
  );
};
