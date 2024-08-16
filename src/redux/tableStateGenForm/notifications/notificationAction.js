import { SAVE_SUCCESSFUL } from "./notificationType";
export const saveSuccessTrigger = (data) => {
    ////console.log(headerName);
    return {
        type: SAVE_SUCCESSFUL,
        payload: data
    };
};
// export const fetchMaster = (data, headerName) => {
//   ////console.log(headerName);
//   return {
//     type: FETCH_MASTER,
//     payload: data,
//     headerName: headerName,
//   };
// };
// export const updateMaster = (data, headerName) => {
//   return {
//     type: UPDATE_MASTER,
//     payload: data,
//     headerName: headerName,
//   };
// };
// export const retrieveMasters = (data) => {
//   return {
//     type: RETRIEVE_MASTERS,
//     payload: data,
//   };
// };
// export const deleteMaster = (data, headerName) => {
//   return {
//     type: DELETE_MASTER,
//     payload: data,
//     headerName: headerName,
//   };
// };
// export const deleteAllMasters = (data) => () => {
//   return {
//     type: DELETE_ALL_MASTERS,
//     payload: data,
//   };
// };
// export const updateMetaData = (data) => {
//   return {
//     type: UPDATE_METADATA,
//     payload: data,
//   };
// };
// export const updateUserAuthDetails = (data) => {
//   return {
//     type: UPDATE_USER_INFO,
//     payload: data,
//   };
// };
// export const updateSelectMetaData = (data) => {
//   return {
//     type: UPDATE_SELECT_METADATA,
//     payload: data,
//   };
// };
// export const updateSelectedDropdown = (data, headerName, labelName) => {
//   return {
//     type: UPDATE_SELECTED_DROPDOWN,
//     payload: data,
//     headerName: headerName,
//     labelName: labelName,
//   };
// };
// // export const findTutorialsByTitle = (title) => () => {
// //   // try {
// //   //   const res = await TutorialDataService.findByTitle(title);
// //   dispatch({
// //     type: RETRIEVE_TUTORIALS,
// //     payload: res.data,
// //   });
// //   // } catch (err) {
// //   //   ////console.log(err);
// //   // }
// // };
