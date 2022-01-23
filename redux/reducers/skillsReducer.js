import { ACTIONS, DELETE, DRAG_DROP } from "../actions/ActionTypes";

const initialState = {
    enable:true,
    items:[]
};
const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_SKILL:
      const {id, name, enable} = action.payload
      return {
        ...state,
        enable:enable,
        items: [...state.items,{id:id,name:name}]
      };

    case DRAG_DROP.DRAG_DROP_SKILLS:
      return{
        ...state,
        items:[...action.payload.result]
      }

    case DELETE.SKILL:
      return{
        ...state,
        items:state.items.filter((item) => item.id !== action.id)
      }
    default:
      return state;
  }
};
export default skillsReducer;
