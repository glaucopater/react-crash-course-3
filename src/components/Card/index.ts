import { connect } from "react-redux";
import { Card } from "./template";
import { updateCard, addCard } from "../../store/actions";

const mapStateToProps = (state: any) => {
    return {
        boardStore: state.boardStore
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateCard: (cardId: number) => {
            dispatch(updateCard(cardId));
        },
        addCard: (destinationCategory: string) => {
            dispatch(addCard(destinationCategory));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
