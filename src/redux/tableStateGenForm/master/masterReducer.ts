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

import { title } from "../../../utils/statesMappingKeys";

const initialState = {};

Object.keys(title).map((t) => {
  initialState[t] = [];
});
initialState["APP_DATA"] = {};
initialState["AUTH_DATA"] = {};
initialState["DROPDOWN_DATA"] = {};
initialState["DROPDOWN_DATA_INIT"] = {};
initialState["SELECTED_DATA"] = {};
initialState["NEXT_AVAILABLE_ID"] = "OM000001";
initialState["isLoading"] = true;

const costRecalc = (masters, data) => {
  //console.log("masters",masters)
  //console.log("payload",data)
  let results = null;

  results = masters.WORKSTATION_MASTER.filter(
    (t) => t.Workstation == data.Workstation
  );

  //console.log(results);
  data.Cost = parseFloat(
    (parseInt(data.Time_Min) * parseInt(results[0]["Per_Hrs_Rate"])) / 60
  ).toFixed(2);
  return data;
};

function masterReducer(masters = initialState, action) {
  var { type, payload, headerName, labelName } = action;

  if (headerName == "BILL_OF_PROCESS" && type == "UPDATE_MASTER") {
    payload = costRecalc(masters, payload);
    //console.log("payload",payload)
  }

  switch (type) {

    case SET_IS_LOADING:
      return {
        ...masters,
        ['isLoading']: false,
      };

    case CREATE_MASTER:
      return {
        ...masters,
        [`${headerName}`]: [...masters[`${headerName}`], payload],
      };

    case UPDATE_MASTER:
      return {
        ...masters,
        [`${headerName}`]: masters[`${headerName}`].map((element) => {
          if (element.ID === payload.ID) {
            return {
              ...element,
              ...payload,
            };
          } else {
            return element;
          }
        }),
      };

    case FETCH_MASTER:
      return {
        ...masters,
        [`${headerName}`]: payload,
      };

    // case DELETE_MASTER:
    //   return {
    //     ...masters,
    //     [`${headerName}`]: masters[`${headerName}`].filter((element) => {
    //       return element.id !== payload;
    //     }),
    //   };

    case DELETE_MASTER:
      return {
        ...masters,
        [`${headerName}`]: masters[`${headerName}`].map((element) => {
          if (element.id === payload.id) {
            return {
              ...element,
              ...payload,
            };
          } else {
            return element;
          }
        }),
      };

    case RETRIEVE_MASTERS:
      return {
        ...masters,
        ...Object.keys(payload.payload).reduce((acc, currKey) => {
          if (masters[currKey]) {
            acc[currKey] = payload.payload[currKey];
          }
          return acc;
        }, {}),
      };

    case DELETE_ALL_MASTERS:
      return { ...masters, tableData: [] };

    case UPDATE_METADATA:
      return {
        ...masters,
        ["APP_DATA"]: payload,
      };

    case UPDATE_USER_INFO:
      return {
        ...masters,
        ["AUTH_DATA"]: {
          ...masters["AUTH_DATA"],
          ["userData"]: payload,
        },
      };

    case UPDATE_AUTHDATA:
      return {
        ...masters,
        ["AUTH_DATA"]: {
          ...masters["AUTH_DATA"],
          [`${headerName}`]: {
            ...masters["AUTH_DATA"][`${headerName}`],
            [`${labelName}`]: payload,
          },
        },
      };

    case UPDATE_SELECT_METADATA:
      return {
        ...masters,
        ["DROPDOWN_DATA"]: payload,
      };

    case UPDATE_SELECTED_DROPDOWN:
      return {
        ...masters,
        ["DROPDOWN_DATA"]: {
          ...masters["DROPDOWN_DATA"],
          [`${headerName}`]: {
            ...masters["DROPDOWN_DATA"][`${headerName}`],
            [`${labelName}`]: payload,
          },
        },
      };

      case UPDATE_SELECTED_DROPDOWN_DYNA:
        return {
          ...masters,
          ["DROPDOWN_INIT_DYNA"]: {
            ...masters["DROPDOWN_INIT_DYNA"],
            [`${headerName}`]: {
              ...masters["DROPDOWN_INIT_DYNA"][`${headerName}`],
              [`${labelName}`]: payload,
            },
          },
        };

    case DROPDOWN_INIT_DYNA:
      return {
        ...masters,
        ["DROPDOWN_DATA_INIT"]: payload,
      };

    case GET_SELECTED_ITEM:
      return {
        ...masters,
        ["SELECTED_DATA"]: payload,
      };

    case GET_NEXT_ID:
      return {
        ...masters,
        ["NEXT_AVAILABLE_ID"]: payload,
      };

    case LOCAL_GET_NEXT_ID:
      return {
        ...masters,
        ["NEXT_AVAILABLE_ID"]: {...masters["NEXT_AVAILABLE_ID"],[`${headerName}`]:payload}
      };
      

    default:
      return masters;
  }
}

export default masterReducer;
