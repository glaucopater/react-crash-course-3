import { Board } from "./template";
import { connect } from "react-redux";
import { addCard } from "../../store/actions";

const mapStateToProps = (state: any) => {
  return {
    boardStore: state.boardStore
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addCard: (destinationCategory: string) => {
      dispatch(addCard(destinationCategory));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
