import { ADD_NEWS_LETTER,REMOVE_NEWS_LETTER } from "../type";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case ADD_NEWS_LETTER:
      return { ...state, ...action.payload };
      case REMOVE_NEWS_LETTER:
      return {};
    default:
      return state;
  }
}
