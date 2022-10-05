import { INC_COUNT, DEC_COUNT } from "./actionConstants";

export const incremnet = (data) => {
  return { type: INC_COUNT, payload: data };
};

export const decrement = (data) => {
  return { type: DEC_COUNT, payload: data };
};
