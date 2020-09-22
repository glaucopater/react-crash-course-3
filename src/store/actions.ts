import * as actionTypes from "./actionTypes";

export const createNewCard = (boardStore: any, destinationCategory: string) => {
  boardStore[destinationCategory] = [
    "newCard",
    ...boardStore[destinationCategory]
  ];

  return {
    type: actionTypes.ADD_CARD,
    boardStore
  };
};

export const addCard = (destinationCategory: string) => {
  return (dispatch: any, getState: any) => {
    const boardStore = getState().boardStore;
    dispatch(createNewCard(boardStore, destinationCategory));
  };
};
