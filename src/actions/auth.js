import * as api from "../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const response = await api.signIn(formData);

    if (response.status === 200) {
      const dataResult = response.data; //results from data object when fetched from DB
      dispatch({ type: "AUTH", data: dataResult });
      dispatch({ type: "ERROR", data: "" });
      history.push("/home");
    }
  } catch (err) {
    if (err.response) {
      dispatch({ type: "ERROR", data: err.response.data?.message });
    }
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const data = await api.signUp(formData);
    dispatch({ type: "AUTH", data: data });
    history.push("/home");
  } catch (err) {
    if (err.response) {
      dispatch({ type: "ERROR", data: err.response.data?.message });
    }
  }
};
