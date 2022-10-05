import { INC_COUNT, DEC_COUNT } from "./actionConstants";

export const reducerFn = (state = { counter: 0 }, action) => {
  console.log("action", action);
  switch (action.type) {
    case INC_COUNT:
      return {
        ...state,
        counter: state.counter + action.payload
      };

    default: {
      return { ...state };
    }
  }
};
