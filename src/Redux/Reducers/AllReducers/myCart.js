import * as initialStates from "../initialState";
import * as actionTypes from "../../Actions/action_types";

export default function myCart(state = initialStates.default.myCart, action) {
  switch (action.type) {
    case actionTypes.DATA_ADDED_MYCART:
      const exists = state.some((item) => item._id === action.payload._id);
      if (!exists) {
        return [...state, { ...action.payload, count: 1 }]; // Yangi mahsulotni count = 1 bilan qo'shish
      }
      return state;

    case actionTypes.DATA_REMOVE_MYCART:
      return state.filter((item) => item._id !== action.payload); // Mahsulotni ID orqali o'chirish

    case actionTypes.INCEREMENT:
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, count: item.count + 1 } // Mahsulotning count qiymatini oshirish
          : item // Boshqa mahsulotlarni o'zgartirmaslik
      );

    case actionTypes.DECREMENT:
      return state.map((item) =>
        item._id === action.payload._id && item.count > 1
          ? { ...item, count: item.count - 1 } // count qiymatini kamaytirish
          : item // Boshqa mahsulotlarni o'zgartirmaslik
      );

    case actionTypes.INPUTAMOUNT:
      return state.map((item) =>
        item._id === action.payload.data._id
          ? { ...item, count: action.payload.inputNumber } // Yangi count qiymatini o'rnatish
          : item 
      );

    default:
      return state; // Standart holatda mavjud state qaytariladi
  }
}
