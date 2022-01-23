import { ACTIONS, DELETE, DRAG_DROP } from "../actions/ActionTypes";

const initialState = {
  enable: true,
  items: [],
};
const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_EDUCATION:
      const {
        enable,
        id,
        institution,
        major,
        grade,
        startDate,
        endDate,
        description,
        city,
      } = action.payload;
      return {
        ...state,
        enable: enable,
        items: [
          ...state.items,
          {
            id: id,
            institution,
            major,
            grade,
            startDate,
            endDate,
            description,
            city,
          },
        ],
      };

    case DRAG_DROP.DRAG_DROP_EDUCATION:
      return {
        ...state,
        items: [...action.payload.result],
      };

    case DELETE.EDUCATION:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
export default educationReducer;
