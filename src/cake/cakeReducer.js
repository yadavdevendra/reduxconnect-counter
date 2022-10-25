const initialState = {
  numOfCakes: 0
}


export const addbuyCake = () => {
  return {
    type: "ADD_CAKE",
    payload: 0,
  };
};

export const subsbuyCake = () => {
  return {
    type: "SUB_CAKE",
    payload: 0,
  };
};

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
