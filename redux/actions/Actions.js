import { ACTIONS, DELETE } from "./ActionTypes";
import { v4 as uuidv4 } from "uuid";

export const addSkill = (enable, name) => {
  return {
    type: ACTIONS.ADD_SKILL,
    payload: {
      enable: enable,
      id: uuidv4(),
      name: name,
    },
  };
};

export const addWorkExperience = (
  enable,
  companyName,
  role,
  companyUrl,
  startDate,
  endDate,
  description
) => {
  return {
    type: ACTIONS.ADD_WORK_EXPERIENCE,
    payload: {
      enable: enable,
      id: uuidv4(),
      companyName,
      role,
      companyUrl,
      startDate,
      endDate,
      description,
    },
  };
};

export const addEducation = (
  enable,
  institution,
  major,
  grade,
  startDate,
  endDate,
  description,
  city
) => {
  return {
    type: ACTIONS.ADD_EDUCATION,
    payload: {
      enable: enable,
      id: uuidv4(),
      institution,
      major,
      grade,
      startDate,
      endDate,
      description,
      city,
    },
  };
};

export const addHonors = (enable, id, title, subtitle, description) => {
  return {
    type: ACTIONS.ADD_HONOR,
    payload: {
      enable,
      id: uuidv4(),
      title,
      subtitle,
      description,
    },
  };
};

export const addCertificates = (
  enable,
  id,
  name,
  authority,
  certificateUrl,
  description
) => {
  return {
    type: ACTIONS.ADD_CERTIFICATES,
    payload: {
      enable,
      id: uuidv4(),
      name,
      authority,
      certificateUrl,
      description,
    },
  };
};

export const addHobbie = (enable, name) => {
  return {
    type: ACTIONS.ADD_HOBBIE,
    payload: {
      enable: enable,
      id: uuidv4(),
      name: name,
    },
  };
};

export const addLanguage = (enable, name) => {
  return {
    type: ACTIONS.ADD_LANGUAGE,
    payload: {
      enable: enable,
      id: uuidv4(),
      name: name,
    },
  };
};

export const addProject = (enable, id, title, demoUrl, description) => {
  return {
    type: ACTIONS.ADD_PROJECT,
    payload: {
      enable,
      id: uuidv4(),
      title,
      demoUrl,
      description,
    },
  };
};

export const selectTemplate = (id) => {
  return{
    type:ACTIONS.SELECT_TEMPLATE,
    payload:{
      id
    }
  }
}

export const selectFont = (font) => {
  return{
    type:ACTIONS.SELECT_FONT,
    payload:{
      font
    }
  }
}

export const selectColors = (primaryColor, secondColor) => {
  return{
    type:ACTIONS.SELECT_COLORS,
    payload:{
      primaryColor, 
      secondColor
    }
  }
}


// ----------------------------------------------------------------------------

export const deleteWorkExperience = (id) => {
  return {
    type:DELETE.WORK_EXPERIENCE,
    id
  }
}

export const deleteEducation = (id) => {
  return {
    type:DELETE.EDUCATION,
    id
  }
}

export const deleteHonor = (id) => {
  return {
    type:DELETE.HONORS,
    id
  }
}

export const deleteCertificate = (id) => {
  return {
    type:DELETE.CERTIFICATIONS,
    id
  }
}

export const deleteSkill = (id) => {
  return {
    type:DELETE.SKILL,
    id
  }
}

export const deleteHobby = (id) => {
  return {
    type:DELETE.HOBBY,
    id
  }
}

export const deleteLanguage = (id) => {
  return {
    type:DELETE.LANGUAGE,
    id
  }
}

export const deleteProject = (id) => {
  return {
    type:DELETE.PROJECT,
    id
  }
}
