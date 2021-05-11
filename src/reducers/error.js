//reducer contains state

const errorReducer = (state = { errorMsg: "" }, action) => {
  switch (action.type) {
    case "ERROR":
      
      return { ...state, errorMsg: action.data };
    default:
      return state;
  }
};

export default errorReducer;
