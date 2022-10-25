const initialState = {
  numOfCakes: 0
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    case "SUB_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
}

export default cakeReducer
