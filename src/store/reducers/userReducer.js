import { CART_LIST_KEY, USER_INFO_KEY } from "../../constants/common";
import { ADD_TO_CART, SET_USER_INFO } from "../types/userType";

let userInfo = localStorage.getItem(USER_INFO_KEY);

if (userInfo) {
  userInfo = JSON.parse(userInfo);
}

let cartList = [];

const DEFAULT_STATE = {
  userInfo,
  cartList,
};

export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO: {
      state.userInfo = payload;
      return { ...state };
    }

    case ADD_TO_CART: {
      state.cartList = [...state.cartList, payload];
      return { ...state };
    }

    default:
      return state;
  }
};
