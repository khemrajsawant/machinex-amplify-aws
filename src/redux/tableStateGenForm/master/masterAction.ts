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

interface Action {
  type: string;
  payload?: any;
  headerName?: string;
  labelName?: string;
}

export const isLoading = (data: any, headerName: string): Action => {
  ////console.log(headerName);

  return {
    type: SET_IS_LOADING
  };
};

export const createMaster = (data: any, headerName: string): Action => {
  ////console.log(headerName);

  return {
    type: CREATE_MASTER,
    payload: data,
    headerName: headerName,
  };
};

export const fetchMaster = (data: any, headerName: string): Action => {
  ////console.log(headerName);

  return {
    type: FETCH_MASTER,
    payload: data,
    headerName: headerName,
  };
};

export const updateMaster = (data: any, headerName: string): Action => {
  return {
    type: UPDATE_MASTER,
    payload: data,
    headerName: headerName,
  };
};

export const retrieveMasters = (data: any): Action => {
  return {
    type: RETRIEVE_MASTERS,
    payload: data,
  };
};

export const deleteMaster = (data: any, headerName: string): Action => {
  return {
    type: DELETE_MASTER,
    payload: data,
    headerName: headerName,
  };
};

export const deleteAllMasters = (data: any): Action => {
  return {
    type: DELETE_ALL_MASTERS,
    payload: data,
  };
};

export const updateMetaData = (data: any): Action => {
  return {
    type: UPDATE_METADATA,
    payload: data,
  };
};

export const updateUserAuthDetails = (data: any): Action => {
  return {
    type: UPDATE_USER_INFO,
    payload: data,
  };
};

export const updateAuthData = (data: any, headerName: string, labelName: string): Action => {
  return {
    type: UPDATE_AUTHDATA,
    payload: data,
    headerName: headerName,
    labelName: labelName,
  };
};

export const updateSelectMetaData = (data: any): Action => {
  return {
    type: UPDATE_SELECT_METADATA,
    payload: data,
  };
};

export const createDynamicDropdown = (data: any): Action => {
  return {
    type: DROPDOWN_INIT_DYNA,
    payload: data,
  };
};

export const updateSelectedDropdown = (data: any, headerName: string, labelName: string): Action => {
  return {
    type: UPDATE_SELECTED_DROPDOWN,
    payload: data,
    headerName: headerName,
    labelName: labelName,
  };
};

export const updateSelectedDropdownDyna = (data: any, headerName: string, labelName: string): Action => {
  return {
    type: UPDATE_SELECTED_DROPDOWN_DYNA,
    payload: data,
    headerName: headerName,
    labelName: labelName,
  };
};

export const getSelectedItem = (data: any): Action => {
  return {
    type: GET_SELECTED_ITEM,
    payload: data
  };
};

export const getNextAvailableEmpID = (data: any): Action => {
  return {
    type: GET_NEXT_ID,
    payload: data
  };
};

export const localUpdateNextAvailableEmpID = (data: any, headerName: string): Action => {
  return {
    type: LOCAL_GET_NEXT_ID,
    payload: data,
    headerName: headerName,
  };
};
