import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "../redux/tableStateGenForm/master/masterReducer";
import { RootState, useAppDispatch } from "../redux/tableStateGenForm/store"; 

interface UserAuthDetails {
  Emp_ID: string;
  Middle_Name: string;
  isServer: boolean;
  Email: string;
  Joining_Date: string;
  Address: string;
  isNew: boolean;
  Gender: string;
  Aadhar_No: string;
  First_Name: string;
  isDeleted: boolean;
  isModified: boolean;
  Mobile_No: string;
  Release_Date: string;
  DOB: string;
  id: number;
  ID: string;
  Surname: string;
}

interface NextEmpIDData {
  PAYMENT: string;
  WORK_ORDER: string;
  EMPLOYEE_MASTER: string;
  REJECTION_REPORT: string;
  JOB_WORK_ORDER: string;
  JOB_WORK_RECEIPT: string;
  SALE_CHALLAN: string;
}

const InitData: React.FC = () => {
  const dispatch = useAppDispatch()
  const userEmail = useSelector<RootState, string>((state) =>
    state.master.AUTH_DATA.ROUTES?.label?.[3]?.email || ""
  );

  const metaDataInStore = (data: typeof metadataLocal) => {
    console.log("Dispatching updateMetaData with data:", data);
    dispatch(updateMetaData(data));
  };

  const setUserInfo = (data: { userName: string; loggedInUserData: UserAuthDetails[] }) => {
    dispatch(updateUserAuthDetails(data));
  };

  const setDropDowns = (data: typeof metadataSelect) => {
    dispatch(updateSelectMetaData(data));
  };

  const setSelectedDropDowns = (data: typeof dynaDropdown) => {
    dispatch(createDynamicDropdown(data));
  };

  const setData = (k: any) => {
    dispatch(retrieveMasters(k));
  };

  const setNextEmpIDData = (k: any) => {
    console.log("Dispatching getNextAvailableEmpID with data:", k);
    dispatch(getNextAvailableEmpID(k));
  };

  useEffect(() => {
    console.log("Init Data Hook useEffect");
    try {
      google.script.run
        .withSuccessHandler(setNextEmpIDData)
        .withFailureHandler((er: any) => {
          alert(er);
        })
        .getIDs();
    } catch (error) {
      setNextEmpIDData({
        PAYMENT: "PAY000002",
        WORK_ORDER: "WO000015",
        EMPLOYEE_MASTER: "OM000015",
        REJECTION_REPORT: "REJ000002",
        JOB_WORK_ORDER: "JWO000009",
        JOB_WORK_RECEIPT: "JWI000002",
        SALE_CHALLAN: "SC000002",
      });
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      google.script.run
        .withSuccessHandler(metaDataInStore)
        .withFailureHandler((er: any) => {
          metaDataInStore(metadataLocal);
          alert(er);
        })
        .getMetaData();
    } catch (error) {
      setUserInfo({
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
      });
      setData(master_data);
      metaDataInStore(metadataLocal);
    }

    try {
      google.script.run
        .withSuccessHandler(setUserInfo)
        .withFailureHandler((er: any) => {
          setUserInfo({
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
          });
          alert("Unauthorised / Guest user");
        })
        .getUserInfo(userEmail);
    } catch (error) {
      setUserInfo({
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
      });
      alert("Login to your associated Google account");
    }

    try {
      google.script.run
        .withSuccessHandler(setDropDowns)
        .withFailureHandler((er: any) => {
          setDropDowns(metadataSelect);
          alert("Select dropdown failed");
        })
        .getUniqueDropdowns();
    } catch (error) {
      setDropDowns(metadataSelect);
      alert("Select dropdown failed");
    }

    try {
      google.script.run
        .withSuccessHandler(setSelectedDropDowns)
        .withFailureHandler((er: any) => {
          setDropDowns(metadataSelect);
          alert("Multiselect dynamic dropdown failed");
        })
        .getDynamicDropdowns();
    } catch (error) {
      console.error(error);
      setSelectedDropDowns(dynaDropdown);
    }
  }, []);

  const setCompanyInformationData = (k:any) => {
    dispatch(fetchMaster({payload:k,headerName:"COMPANY_INFORMATION"}));
  };

  useEffect(() => {
    try {
      google.script.run
        .withSuccessHandler(setCompanyInformationData)
        .withFailureHandler((er: any) => {
          alert(er);
        })
        .importData("COMPANY_INFORMATION");
    } catch (error) {
      console.error(error);
    }
  }, []);

  return null; // You can replace this with actual JSX if needed
};

export default InitData;
