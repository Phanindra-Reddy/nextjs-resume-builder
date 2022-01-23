import { ACTIONS } from "../actions/ActionTypes";

const initialState = {
  firstName: "",
  lastName: "",
  photoUrl: "",
  role: "",
  address: "",
  postalcode:"",
  city: "",
  country: "",
  phone: "",
  email: "",
  website: "",
  linkedin: "",
  github: "",
  objective: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PROFILE:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        photoUrl: action.payload.photoUrl,
        role: action.payload.role,
        address: action.payload.address,
        postalcode:action.payload.postalcode,
        city: action.payload.city,
        country: action.payload.country,
        phone: action.payload.phone,
        email: action.payload.email,
        website: action.payload.website,
        linkedin: action.payload.linkedin,
        github: action.payload.github,
        objective: action.payload.objective,
      };
    default:
      return state;
  }
};
export default profileReducer;
