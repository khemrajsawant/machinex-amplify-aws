import {
  UPDATE_METADATA,
  CREATE_METADATA,
  CREATE_MASTER,
  UPDATE_MASTER,
  DELETE_MASTER,
  RETRIEVE_MASTERS,
  DELETE_ALL_MASTERS,
  FETCH_MASTER,
  UPDATE_USER_INFO,
  UPDATE_SELECT_METADATA,
  UPDATE_SELECTED_DROPDOWN,
  UPDATE_SELECTED_DROPDOWN_DYNA,
  GET_SELECTED_ITEM,
  GET_NEXT_ID,
  UPDATE_AUTHDATA,
  DROPDOWN_INIT_DYNA,
  LOCAL_GET_NEXT_ID,
  SET_IS_LOADING
} from "./masterType";

export const isLoading = () => {
  ////console.log(headerName);

  return {
    type: SET_IS_LOADING
  };
};

export const createMaster = (data:any, headerName:any) => {
  ////console.log(headerName);

  return {
    type: CREATE_MASTER,
    payload: data,
    headerName: headerName,
  };
};

export const fetchMaster = (data:any, headerName:any) => {
  ////console.log(headerName);

  return {
    type: FETCH_MASTER,
    payload: data,
    headerName: headerName,
  };
};

export const updateMaster = (data:any, headerName:any) => {
  return {
    type: UPDATE_MASTER,
    payload: data,
    headerName: headerName,
  };
};

export const retrieveMasters = (data:any) => {
  return {
    type: RETRIEVE_MASTERS,
    payload: data,
  };
};

export const deleteMaster = (data:any, headerName:any) => {
  return {
    type: DELETE_MASTER,
    payload: data,
    headerName: headerName,
  };
};

export const deleteAllMasters = (data:any) => () => {
  return {
    type: DELETE_ALL_MASTERS,
    payload: data,
  };
};

export const updateMetaData = (data:any) => {
  return {
    type: UPDATE_METADATA,
    payload: data,
  };
};

export const updateUserAuthDetails = (data:any) => {
  return {
    type: UPDATE_USER_INFO,
    payload: data,
  };
};

export const updateAuthData = (data:any, headerName:any, labelName:any) => {
  return {
    type: UPDATE_AUTHDATA,
    payload: data,
    headerName: headerName,
    labelName: labelName,
  };
};

export const updateSelectMetaData = (data:any) => {
  return {
    type: UPDATE_SELECT_METADATA,
    payload: data,
  };
};

export const createDynamicDropdown = (data:any) => {
  return {
    type: DROPDOWN_INIT_DYNA,
    payload: data,
  };
};



export const updateSelectedDropdown = (data:any, headerName:any, labelName:any) => {
  return {
    type: UPDATE_SELECTED_DROPDOWN,
    payload: data,
    headerName: headerName,
    labelName: labelName,
  };
};

export const updateSelectedDropdownDyna = (data:any, headerName:any, labelName:any) => {
  return {
    type: UPDATE_SELECTED_DROPDOWN_DYNA,
    payload: data,
    headerName: headerName,
    labelName: labelName,
  };
};

export const getSelectedItem = (data:any) => {
  return {
    type: GET_SELECTED_ITEM,
    payload: data
  };
};


export const getNextAvailableEmpID = (data:any) => {
  return {
    type: GET_NEXT_ID,
    payload: data
  };
};

export const localUpdateNextAvailableEmpID = (data:any, headerName:any) => {
  return {
    type: LOCAL_GET_NEXT_ID,
    payload: data,
    headerName: headerName,
  };
};

// export const findTutorialsByTitle = (title) => () => {
//   // try {
//   //   const res = await TutorialDataService.findByTitle(title);

//   dispatch({
//     type: RETRIEVE_TUTORIALS,
//     payload: res.data,
//   });
//   // } catch (err) {
//   //   ////console.log(err);
//   // }
// };
