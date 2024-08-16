import { createSlice } from "@reduxjs/toolkit";
// Define initial state
const initialState = {
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
        createMaster(state, action) {
            console.log(`Setting isLoading to ${action.payload}`);
            const { headerName, payload } = action.payload;
            state[headerName] = [...state[headerName], payload];
        },
        updateMaster(state, action) {
            console.log(`Setting isLoading to ${action.payload}`);
            const { headerName, payload } = action.payload;
            state[headerName] = state[headerName].map((element) => element.ID === payload.ID ? { ...element, ...payload } : element);
        },
        fetchMaster(state, action) {
            console.log(`Setting isLoading to ${action.payload}`);
            const { headerName, payload } = action.payload;
            state[headerName] = payload;
        },
        deleteMaster(state, action) {
            console.log(`Setting isLoading to ${action.payload}`);
            const { headerName, payload } = action.payload;
            state[headerName] = state[headerName].map((element) => element.id === payload.id ? { ...element, ...payload } : element);
        },
        retrieveMasters(state, action) {
            console.log(`Setting isLoading to ${action.payload}`);
            const payload = action.payload;
            Object.keys(payload).forEach((key) => {
                if (state[key]) {
                    state[key] = payload[key];
                }
            });
        },
        deleteAllMasters(state) {
            state.tableData = [];
        },
        updateMetaData(state, action) {
            console.log("Dispatching updateMetaData with data:", action.payload);
            state.APP_DATA = action.payload;
        },
        updateUserAuthDetails(state, action) {
            console.log(`Setting isLoading to ${action.payload}`);
            state.AUTH_DATA.userData = action.payload;
        },
        updateAuthData(state, action) {
            const { headerName, labelName, payload } = action.payload;
            state.AUTH_DATA[headerName] = {
                ...state.AUTH_DATA[headerName],
                [labelName]: payload,
            };
        },
        updateSelectMetaData(state, action) {
            state.DROPDOWN_DATA = action.payload;
        },
        updateSelectedDropdown(state, action) {
            const { headerName, labelName, payload } = action.payload;
            state.DROPDOWN_DATA[headerName] = {
                ...state.DROPDOWN_DATA[headerName],
                [labelName]: payload,
            };
        },
        updateSelectedDropdownDyna(state, action) {
            const { headerName, labelName, payload } = action.payload;
            state.DROPDOWN_INIT_DYNA[headerName] = {
                ...state.DROPDOWN_INIT_DYNA[headerName],
                [labelName]: payload,
            };
        },
        createDynamicDropdown(state, action) {
            state.DROPDOWN_DATA_INIT = action.payload;
        },
        getSelectedItem(state, action) {
            state.SELECTED_DATA = action.payload;
        },
        getNextAvailableEmpID(state, action) {
            state.NEXT_AVAILABLE_ID = action.payload;
        },
        localUpdateNextAvailableEmpID(state, action) {
            const { headerName, payload } = action.payload;
            state.NEXT_AVAILABLE_ID = {
                ...state.NEXT_AVAILABLE_ID,
                [headerName]: payload,
            };
        },
    },
});
export const { isLoading, createMaster, updateMaster, fetchMaster, deleteMaster, retrieveMasters, deleteAllMasters, updateMetaData, updateUserAuthDetails, updateAuthData, updateSelectMetaData, updateSelectedDropdown, updateSelectedDropdownDyna, createDynamicDropdown, getSelectedItem, getNextAvailableEmpID, localUpdateNextAvailableEmpID, } = masterReducer.actions;
export default masterReducer.reducer;
