import { ACTIONS, DELETE, DRAG_DROP } from "../actions/ActionTypes";

const initialState = {
  enable: true,
  items: [],
};
const workexperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_WORK_EXPERIENCE:
      const { enable, id, companyName, role, companyUrl, startDate, endDate, description } = action.payload;
      return {
        ...state,
        enable: enable,
        items: [
          ...state.items,
          {
            id: id,
            companyName,
            role,
            companyUrl,
            startDate,
            endDate,
            description,
          },
        ],
      };

      case DRAG_DROP.DRAG_DROP_WORK_EXPERIENCE:
        return {
          ...state,
          items: [...action.payload.result],
        };
  
      case DELETE.WORK_EXPERIENCE:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.id),
        };
    default:
      return state;
  }
};
export default workexperienceReducer;
