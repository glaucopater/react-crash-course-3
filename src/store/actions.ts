import * as actionTypes from "./actionTypes";

export const createNewCard = (boardStore: any, destinationCategory: string) => {
  boardStore[destinationCategory] = [
    {
      text: "newCard",
      id: 777
    },
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


export const updateSingleCard = (boardStore: any, cardId: number) => {
  return {
    type: actionTypes.UPDATE_BOARD,
    boardStore
  };
};

export const updateCard = (cardId: number) => {
  return (dispatch: any, getState: any) => {
    const boardStore = getState().boardStore;
    dispatch(updateSingleCard(boardStore, cardId));
  };
};


