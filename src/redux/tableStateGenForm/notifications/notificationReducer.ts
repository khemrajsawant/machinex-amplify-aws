import {
  SAVE_SUCCESSFUL
} from "./notificationType";

const initialState = {};

function notificationReducer(notifications = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SAVE_SUCCESSFUL:
      return {
        ...notifications,
        ['SAVE_SUCCESSFUL']: payload
      };

    // case UPDATE_MASTER:
    //   return {
    //     ...masters,
    //     [`${headerName}`]: masters[`${headerName}`].map((element) => {
    //       if (element.id === payload.id) {
    //         return {
    //           ...element,
    //           ...payload,
    //         };
    //       } else {
    //         return element;
    //       }
    //     }),
    //   };

    // case FETCH_MASTER:
    //   return {
    //     ...masters,
    //     [`${headerName}`]: payload,
    //   };

    // // case DELETE_MASTER:
    // //   return {
    // //     ...masters,
    // //     [`${headerName}`]: masters[`${headerName}`].filter((element) => {
    // //       return element.id !== payload;
    // //     }),
    // //   };

    // case DELETE_MASTER:
    //   return {
    //     ...masters,
    //     [`${headerName}`]: masters[`${headerName}`].map((element) => {
    //       if (element.id === payload.id) {
    //         return {
    //           ...element,
    //           ...payload,
    //         };
    //       } else {
    //         return element;
    //       }
    //     }),
    //   };

    // case RETRIEVE_MASTERS:
    //   return{...masters, ...Object.keys(payload.payload).reduce((acc, currKey) => {
    //     if (masters[currKey]) {
    //       acc[currKey] = payload.payload[currKey];
    //     }
    //     return acc;
    //   }, {})}

    // case DELETE_ALL_MASTERS:
    //   return { ...masters, tableData: [] };

    // case UPDATE_METADATA:
    //   return {
    //     ...masters,
    //     ["APP_DATA"]: payload,
    //   };

    // case UPDATE_USER_INFO:
    //   return {
    //     ...masters,
    //     ["AUTH_DATA"]: payload,
    //   };

    // case UPDATE_SELECT_METADATA:
    //   return {
    //     ...masters,
    //     ["DROPDOWN_DATA"]: payload,
    //   };

    // case UPDATE_SELECTED_DROPDOWN:
    //   return {
    //     ...masters,
    //     ["DROPDOWN_DATA"]: {
    //       ...masters["DROPDOWN_DATA"],
    //       [`${headerName}`]:{...masters['DROPDOWN_DATA'][`${headerName}`],
    //       [`${labelName}`]: payload}}
    //     }
      

    default:
      return notifications;
  }
}

export default notificationReducer;
