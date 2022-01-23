import {combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import loadFromLocalStorage from "../localStorage/loadFromLocalStorage";

import profileReducer from "./reducers/profileReducer";
import skillsReducer from "./reducers/skillsReducer";
import aboutmeReducer from "./reducers/aboutmeReducer";
import workexperienceReducer from "./reducers/workexperienceReducer";
import educationReducer from "./reducers/educationReducer";
import honorsReducer from "./reducers/honorsReducer";
import certificationsReducer from "./reducers/certificationsReducer";
import hobbiesReducer from "./reducers/hobbiesReducer";
import languagesReducer from "./reducers/languagesReducer";
import projectsReducer from "./reducers/projectsReducer";
import templateReducer from "./reducers/templateReducer";
import fontsReducer from "./reducers/fontsReducer";
import colorsReducer from "./reducers/colorsReducer";


const rootReducer = combineReducers({
    profile:profileReducer,
    aboutme:aboutmeReducer,
    workExperience:workexperienceReducer,
    skills:skillsReducer,
    education:educationReducer,
    honorsnawards:honorsReducer,
    certifications:certificationsReducer,
    hobbies:hobbiesReducer,
    languages:languagesReducer,
    projects:projectsReducer,
    template:templateReducer,
    font:fontsReducer,
    colors:colorsReducer,
});


export const store = configureStore({
  devTools: true,
  reducer:rootReducer,
  preloadedState: loadFromLocalStorage(),
});

// export const store = createStore(
//   rootReducer,
//   persistedState,
//   typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// );
