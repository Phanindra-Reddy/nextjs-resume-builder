import { ACTIONS, DELETE, DRAG_DROP } from "../actions/ActionTypes";

const initialState = {
  enable: true,
  items: [],
};
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PROJECT:
      const { enable, id, title, demoUrl, description } = action.payload;
      return {
        ...state,
        enable: enable,
        items: [
          ...state.items,
          {
            id: id,
            title,
            demoUrl,
            description,
          },
        ],
      };

    case DRAG_DROP.DRAG_DROP_PROJECTS:
      return {
        ...state,
        items: [...action.payload.result],
      };

    case DELETE.PROJECT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
};
export default projectsReducer;
