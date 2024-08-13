import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import metadataSelect from "../utils/metadataSelect.json";
import master_data from "../utils/master_data.json";
import metadataLocal from "../utils/metadataLocal.json";
import dynaDropdown from "../utils/dynaDropdown.json";
import {
  updateMetaData,
  updateUserAuthDetails,
  updateSelectMetaData,
  retrieveMasters,
  getNextAvailableEmpID,
  fetchMaster,
  createDynamicDropdown,
} from "../redux/tableStateGenForm/master/masterAction";

export default function initData() {
  const dispatch = useDispatch();

  const userEmail = useSelector((state) =>
  state.master.AUTH_DATA.ROUTES.label
  ? state.master.AUTH_DATA.ROUTES.label[3].email
  : "")
  // Get Metadata
  const metaDataInStore = (data) => {
    dispatch(updateMetaData(data));
  };

  // Get UserInfo
  const setUserInfo = (data) => {
    dispatch(updateUserAuthDetails(data));
  };

  // Get getUniqueRecordsSelect
  const setDropDowns = (data) => {
    dispatch(updateSelectMetaData(data));
  };

  // getUniqueRecordsSelect [dynamic dependent dropdowns]
  const setSelectedDropDowns = (data) => {
    dispatch(createDynamicDropdown(data));
  };

  // only works locally or when google is not defined in env

  const setData = (k) => {
    ////console.log("allData", k);

    dispatch(retrieveMasters(k));
  };

  // Get emp data

  const setNextEmpIDData = (k) => {
    //console.log(k)
    dispatch(getNextAvailableEmpID(k));
  };
  useEffect(() => {
    try {
      google.script.run
        .withSuccessHandler(setNextEmpIDData)
        .withFailureHandler((er) => {
          alert(er);
        })
        .getIDs();
    } catch (error) {
      setNextEmpIDData(
        (k = {
          PAYMENT: "PAY000002",
          WORK_ORDER: "WO000015",
          EMPLOYEE_MASTER: "OM000015",
          REJECTION_REPORT: "REJ000002",
          JOB_WORK_ORDER: "JWO000009",
          JOB_WORK_RECEIPT: "JWI000002",
          SALE_CHALLAN: "SC000002",
        })
      );
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, []);

  useEffect(() => {
    // get config file to load components

    try {
      google.script.run
        .withSuccessHandler(metaDataInStore)
        .withFailureHandler((er) => {
          metaDataInStore(metadataLocal);
          ////console.log("using local copy of config");
          alert(er);
        })
        .getMetaData();
    } catch (error) {
      ////console.log("You are offline");
      setUserInfo(
        (k = {
          userName: "Offline User",
          loggedInUserData: [
            {
              Emp_ID: "OM000014",
              Middle_Name: "User",
              isServer: true,
              Email: "khemrajsawant@gmail.com",
              Joining_Date: "2023-11-05",
              Address: "Bengaluru",
              isNew: false,
              Gender: "male",
              Aadhar_No: "11111111111",
              First_Name: "Test",
              isDeleted: false,
              isModified: false,
              Mobile_No: "9284074933",
              Release_Date: "2023-11-05",
              DOB: "2023-11-05",
              id: 14,
              ID: "185708ad-9f98-4be1-b9ef-0f52615c681a",
              Surname: "1",
            },
          ],
        })
      );
      setData(retrieveMasters(master_data));
      // console.error(error); // You might send an exception to your error tracker like AppSignal
      metaDataInStore(metadataLocal);
    }

    // get logged in user info
    try {
      google.script.run
        .withSuccessHandler(setUserInfo)
        .withFailureHandler((er) => {
          ////console.log("using local copy of configlocalhost");
          setUserInfo(
            (k = {
              userName: "Guest",
              loggedInUserData: [
                {
                  Emp_ID: "OM000014",
                  Middle_Name: "User",
                  isServer: true,
                  Email: "khemrajsawant@gmail.com",
                  Joining_Date: "2023-11-05",
                  Address: "Bengaluru",
                  isNew: false,
                  Gender: "male",
                  Aadhar_No: "11111111111",
                  First_Name: "Test",
                  isDeleted: false,
                  isModified: false,
                  Mobile_No: "9284074933",
                  Release_Date: "2023-11-05",
                  DOB: "2023-11-05",
                  id: 14,
                  ID: "185708ad-9f98-4be1-b9ef-0f52615c681a",
                  Surname: "1",
                },
              ],
            })
          );
          alert("Unauthorised / Guest user");
        })
        .getUserInfo(userEmail);
    } catch (error) {
      ////console.log("You are offline");
      setUserInfo(
        (k = {
          userName: "Offline User",
          loggedInUserData: [
            {
              Emp_ID: "OM000014",
              Middle_Name: "User",
              isServer: true,
              Email: "khemrajsawant@gmail.com",
              Joining_Date: "2023-11-05",
              Address: "Bengaluru",
              isNew: false,
              Gender: "male",
              Aadhar_No: "11111111111",
              First_Name: "Test",
              isDeleted: false,
              isModified: false,
              Mobile_No: "9284074933",
              Release_Date: "2023-11-05",
              DOB: "2023-11-05",
              id: 14,
              ID: "185708ad-9f98-4be1-b9ef-0f52615c681a",
              Surname: "1",
            },
          ],
        })
      );
      alert("Login to your associated google account");
    }
    // get drodown values

    // get logged in user info
    try {
      google.script.run
        .withSuccessHandler(setDropDowns)
        .withFailureHandler((er) => {
          // ////console.log("using local copy of configlocalhost");
          setDropDowns(metadataSelect);
          alert("select dropdown failed");
        })
        .getUniqueDropdowns();
    } catch (error) {
      setDropDowns(metadataSelect);
      alert("select dropdown failed");
    }

    try {
      // setTimeout(function () {
      //   //console.log("This code runs after a delay of 3000 milliseconds.");
      // }, 10000);
      google.script.run
        .withSuccessHandler(setSelectedDropDowns)
        .withFailureHandler((er) => {
          // ////console.log("using local copy of configlocalhost");
          setDropDowns(metadataSelect);
          alert("multiselect dynamic dropdown failed");
        })
        .getDynamicDropdowns();
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
      setSelectedDropDowns(dynaDropdown);
      // alert("dropdown failed");
    }
  }, []);

  //Setting up company Information Page Data. Fetching ... & Updating Store

  const setCompanyInformationData = (k) => {
    ////console.log("payload", k);

    dispatch(fetchMaster(k, "COMPANY_INFORMATION"));
  };

  useEffect(() => {
    try {
      google.script.run
        .withSuccessHandler(setCompanyInformationData)
        .withFailureHandler((er) => {
          alert(er);
        })
        .importData("COMPANY_INFORMATION");
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, []);
}
