import { ACTIONS, DELETE, DRAG_DROP } from "../actions/ActionTypes";

const initialState = {
  enable: true,
  items: [],
};
const honorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_HONOR:
      const { enable, id, title, subtitle, description } = action.payload;
      return {
        ...state,
        enable: enable,
        items: [
          ...state.items,
          {
            id: id,
            title,
            subtitle,
            description
          },
        ],
      };
      case DRAG_DROP.DRAG_DROP_HONORS:
        return {
          ...state,
          items: [...action.payload.result],
        };
  
      case DELETE.HONORS:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.id),
        };
    default:
      return state;
  }
};
export default honorsReducer;
