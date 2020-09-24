import * as React from "react";
import Card from "../../components/Card";
import { Deck } from "../../components/Deck/template";
import "./styles.css";

export const Board = ({
  boardStore,
  addCard
}: {
  boardStore: any;
  addCard: (category: string) => void;
}) => {
  const [counter, setCounter] = React.useState(0);
  const handleCounterClick = () => {
    setCounter(counter + 1);
  };


  console.log("boardStore", boardStore);


  return (
    <div className="Board">
      <h3>Global Click Counter {counter}</h3>
      <div className="DeckContainer">
        {Object.keys(boardStore).map((category, index) => {
          const cards = boardStore[
            category
          ].map((item: { id: number, text: string }, index: any) => (
            <Card
              key={index.toString()}
              name={"Card_" + index}
              value={item.id}
              text={item.text}
              initialValue={item.id}
              counterClick={handleCounterClick}
            />
          ));

          return (
            <Deck
              key={"deck" + index.toString()}
              cards={cards}
              category={category}
              addCard={addCard}
            />
          );
        })}
      </div>
    </div>
  );
};
