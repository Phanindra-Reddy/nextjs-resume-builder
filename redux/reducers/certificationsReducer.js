import { ACTIONS, DELETE, DRAG_DROP } from "../actions/ActionTypes";

const initialState = {
  enable: true,
  items: [],
};
const certificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CERTIFICATES:
      const { enable, id, name, authority, certificateUrl, description } =
        action.payload;
      return {
        ...state,
        enable: enable,
        items: [
          ...state.items,
          {
            id: id,
            name,
            authority,
            certificateUrl,
            description,
          },
        ],
      };

    case DRAG_DROP.DRAG_DROP_CERTIFICATIONS:
      return {
        ...state,
        items: [...action.payload.result],
      };

    case DELETE.CERTIFICATIONS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
export default certificationsReducer;
