import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface MasterState {
  [key: string]: any;
  APP_DATA: any;
  AUTH_DATA: any;
  DROPDOWN_DATA: any;
  DROPDOWN_DATA_INIT: any;
  SELECTED_DATA: any;
  NEXT_AVAILABLE_ID: string;
  isLoading: boolean;
}

// Define initial state
const initialState: MasterState = {
  APP_DATA: {},
  AUTH_DATA: {},
  DROPDOWN_DATA: {},
  DROPDOWN_DATA_INIT: {},
  SELECTED_DATA: {},
  NEXT_AVAILABLE_ID: "OM000001",
  isLoading: true,
};

// Define action payload types


// Define a slice
const masterReducer = createSlice({
  name: "master",
  initialState,
  reducers: {
    isLoading(state) {

      state.isLoading = false;
    },
    createMaster(
      state,
      action: PayloadAction<{ headerName: string; payload: any }>
    ) {
      console.log(`Setting isLoading to ${action.payload}`);
      const { headerName, payload } = action.payload;
      state[headerName] = [...state[headerName], payload];
    },
    updateMaster(
      state,
      action: PayloadAction<{ headerName: string; payload: any }>
    ) {
      console.log(`Setting isLoading to ${action.payload}`);
      const { headerName, payload } = action.payload;
      state[headerName] = state[headerName].map((element: any) =>
        element.ID === payload.ID ? { ...element, ...payload } : element
      );
    },
    fetchMaster(
      state,
      action: PayloadAction<{  payload: any, headerName: string; }>
    ) {
      console.log(`Setting isLoading to ${action.payload}`);
      const { headerName, payload } = action.payload;
      state[headerName] = payload;
    },
    deleteMaster(
      state,
      action: PayloadAction<{ headerName: string; payload: any }>
    ) {
      console.log(`Setting isLoading to ${action.payload}`);
      const { headerName, payload } = action.payload;
      state[headerName] = state[headerName].map((element: any) =>
        element.id === payload.id ? { ...element, ...payload } : element
      );
    },
    retrieveMasters(state, action: PayloadAction<any>) {
      console.log("retrieveMasters" ,action.payload);
      const payload: any = action.payload.payload;
      Object.keys(payload).forEach((key) => {
       
          state[key] = payload[key];
        
      });
    },
    deleteAllMasters(state) {
      state.tableData = [];
    },
    updateMetaData(state, action: PayloadAction<any>) {
      console.log("updating Metadata", action.payload);
      state.APP_DATA = action.payload;
    },
    updateUserAuthDetails(state, action: PayloadAction<any>) {
      console.log(`Setting isLoading to ${action.payload}`);
      state.AUTH_DATA.userData = action.payload;
    },
    updateAuthData(
      state,
      action: PayloadAction<{
        headerName: string;
        labelName: string;
        payload: any;
      }>
    ) {
      const { headerName, labelName, payload } = action.payload;
      state.AUTH_DATA[headerName] = {
        ...state.AUTH_DATA[headerName],
        [labelName]: payload,
      };
    },
    updateSelectMetaData(state, action: PayloadAction<any>) {
      state.DROPDOWN_DATA = action.payload;
    },
    updateSelectedDropdown(
      state,
      action: PayloadAction<{
        headerName: string;
        labelName: string;
        payload: any;
      }>
    ) {
      const { headerName, labelName, payload } = action.payload;
      state.DROPDOWN_DATA[headerName] = {
        ...state.DROPDOWN_DATA[headerName],
        [labelName]: payload,
      };
    },
    updateSelectedDropdownDyna(
      state,
      action: PayloadAction<{
        headerName: string;
        labelName: string;
        payload: any;
      }>
    ) {
      const { headerName, labelName, payload } = action.payload;
      state.DROPDOWN_INIT_DYNA[headerName] = {
        ...state.DROPDOWN_INIT_DYNA[headerName],
        [labelName]: payload,
      };
    },
    createDynamicDropdown(state, action: PayloadAction<any>) {
      state.DROPDOWN_DATA_INIT = action.payload;
    },
    getSelectedItem(state, action: PayloadAction<any>) {
      state.SELECTED_DATA = action.payload;
    },
    getNextAvailableEmpID(state, action: PayloadAction<string>) {
      state.NEXT_AVAILABLE_ID = action.payload;
    },
    localUpdateNextAvailableEmpID(
      state: any,
      action: PayloadAction<{ headerName: string; payload: string }>
    ) {
      const { headerName, payload } = action.payload;
      state.NEXT_AVAILABLE_ID = {
        ...state.NEXT_AVAILABLE_ID,
        [headerName]: payload,
      };
    },
  },
});

export const {
  isLoading,
  createMaster,
  updateMaster,
  fetchMaster,
  deleteMaster,
  retrieveMasters,
  deleteAllMasters,
  updateMetaData,
  updateUserAuthDetails,
  updateAuthData,
  updateSelectMetaData,
  updateSelectedDropdown,
  updateSelectedDropdownDyna,
  createDynamicDropdown,
  getSelectedItem,
  getNextAvailableEmpID,
  localUpdateNextAvailableEmpID,
} = masterReducer.actions;

export default masterReducer.reducer;
