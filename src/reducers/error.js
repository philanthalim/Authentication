//reducer contains state

const errorReducer = (state = { errorMsg: "" }, action) => {
  switch (action.type) {
    case "ERROR":
      console.log(action.data);
      return { ...state, errorMsg: action.data };
    default:
      return state;
  }
};

export default errorReducer;
