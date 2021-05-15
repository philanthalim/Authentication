const loadingReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "NOT_LOADING":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default loadingReducer;
