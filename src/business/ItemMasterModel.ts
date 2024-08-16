import React from "react";
import { v4 as uuidv4 } from "uuid";

/**
 *
 * @param {*} workstationId - This is workstation category
 * @param {*} tableWorkStationMaster worstation master to filter from
 * @returns per hours rate value from the table for the selected workstation
 */
// @ts-ignore
export const withCostComputation = (
  tableFormData,
  data,
  id,
  masterData,
  workStationMaster,
  no_of_records
) => {
  //console.log(data);
  data.id = uuidv4();
  data.ID = data.id;
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.Drawing_Number = masterData.Drawing_Number;
  data.Operation_Number = pad(no_of_records + 1, 3, data.Workstation);
  console.log("Operation_Number", data.Operation_Number);
  console.log("data", data);
  console.log("total_records", no_of_records);
  data.isUpdateMaster = false;
  ////console.log("running google script");

  let f = Object.keys(data);
  //console.log("data", data);

  let results = null;

  results = workStationMaster.filter((t) => t.Workstation == data.Workstation);
  //console.log("filtered", tableFormData);
  //console.log(results);
  data.Cost = 
    (parseInt(data.Time_Min) * parseInt(results[0]["Per_Hrs_Rate"])) / 60
  
  console.log("cost", data.Cost);
  return data;
};

function pad(num, size, wNo) {
  num = num.toString();
  while (num.length < size) num = "0" + num;

  return wNo + "-" + num;
}

export const defaultReurn = (data, id, primarykey, masterData, isMaster) => {
  //console.log(primarykey);
  console.log(data);
  data.id = uuidv4();
  if (isMaster === false) {
    data[primarykey] = masterData[primarykey];
  }
  data.ID = data.id;
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const employeeMaster = (data, id, primarykey, masterData, isMaster) => {
  //console.log(primarykey);
  //console.log(data);
  // data.id = uuidv4();
  //console.log("idbsdbsbsbsbs", masterData["Emp_ID"].split("OM")[1]);
  data.id = parseInt(masterData["Emp_ID"].split("OM")[1]) + 1;
  data[primarykey] = masterData[primarykey];

  data.ID = uuidv4();
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const userDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData
) => {
  //console.log(primarykey);
  //console.log("tableFormData", tableFormData);
  //console.log(data);
  if (tableFormData.length == 1) {
    data[primarykey] = masterData[primarykey];
    data.ID = masterData.ID;
    data.isModified = true;
    data.isNew = false;
    data.isServer = masterData.isServer;
    data.isUpdateMaster = true;
  } else {
    data.ID = masterData.ID;
    data[primarykey] = masterData[primarykey];
    data.isModified = false;
    data.isNew = true;
    data.isServer = false;
    data.isUpdateMaster = false;
  }

  data.isDeleted = false;
  return data;
};

export const salaryDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData
) => {
  //console.log(primarykey);
  //console.log(data);
  //console.log("tableFormData", tableFormData);
  data.id = uuidv4();
  data.ID = data.id;
  data[primarykey] = masterData[primarykey];
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const bankDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData
) => {
  //console.log(primarykey);
  //console.log("tableFormData", tableFormData);
  //console.log(data);

  if (tableFormData.length == 1) {
    data[primarykey] = masterData[primarykey];
    data.ID = masterData.ID;
    data.isModified = true;
    data.isNew = false;
    data.isServer = masterData.isServer;
    data.isUpdateMaster = true;
  } else {
    data[primarykey] = masterData[primarykey];
    data.ID = masterData.ID;
    data.isModified = false;
    data.isNew = true;
    data.isServer = false;
    data.isUpdateMaster = false;
  }

  data.isDeleted = false;

  return data;
};

export const companyInformation = (
  data,
  id,
  primarykey,
  masterData,
  isMaster
) => {
  //console.log(primarykey);
  //console.log("data", data);
  if (isMaster === false) {
    data[primarykey] = masterData[primarykey];
  }
  data.id = 1;
  data.ID = "c374267e-573e-4c2c-95a4-1ed550e362d0";
  data.isNew = false;
  data.isServer = true;
  data.isDeleted = false;
  data.isModified = true;
  //console.log("data", data);
  data.isUpdateMaster = true;
  return data;
};

export const workStationMaster = (
  data,
  id,
  primarykey,
  masterData,
  isMaster
) => {
  //console.log(primarykey);
  //console.log(data);
  // data.id = uuidv4();
  // //console.log("idbsdbsbsbsbs",masterData['Emp_ID'].split("OM")[1])
  // data.id = parseInt(masterData['Emp_ID'].split("OM")[1])
  data[primarykey] = masterData[primarykey];

  data.ID = data.id;
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  return data;
};

export const workOrderDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData,
  no_of_records
) => {
  //console.log(primarykey);
  //console.log(data);
  //console.log("tableFormData", tableFormData);
  data.id = uuidv4();
  data.ID = data.id;
  data[primarykey] = masterData[primarykey];
  data.isNew = true;
  data.Sr_No = no_of_records + 1;
  data.Work_Details = data["Work_Details"].join(", ");
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  console.log("data", data);
  return data;
};

export const workOrder = (data, id, primarykey, masterData, isMaster,type) => {
  //console.log(primarykey);
  //console.log(data);
  // data.id = uuidv4();
  //console.log("idbsdbsbsbsbs", masterData["Emp_ID"].split("OM")[1]);
  // data.id = parseInt(masterData["Order_No"].split("WO")[1]);
  data.id = uuidv4();
  data[primarykey] = masterData[primarykey];

  data.ID = data.id;
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const jobWorkOrder = (data, id, primarykey, masterData, isMaster,type) => {
  //console.log(primarykey);
  //console.log(data);
  // data.id = uuidv4();
  //console.log("idbsdbsbsbsbs", masterData["Emp_ID"].split("OM")[1]);
  data.id = parseInt(masterData["JWO_No"].split("JWO")[1]);
  data[primarykey] = masterData[primarykey];

  data.ID = uuidv4();
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const jobWorkOrderDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData,
  no_of_records
) => {
  //console.log(primarykey);
  //console.log(data);
  //console.log("tableFormData", tableFormData);
  data.id = uuidv4();
  data.ID = data.id;
  data[primarykey] = masterData[primarykey];
  data.JWO_Sr_No = no_of_records + 1;
  data.isNew = true;
  data.Work_Details = data["Work_Details"].join(", ");
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  data.Total_Cost = (parseInt(data.Rate) * parseInt(data.Quantity)).toFixed(2);
  console.log("data", data);
  return data;
};

export const jobWorkReceipt = (data, id, primarykey, masterData, isMaster,type) => {
  //console.log(primarykey);
  //console.log(data);
  // data.id = uuidv4();
  //console.log("idbsdbsbsbsbs", masterData["Emp_ID"].split("OM")[1]);
  data.id = parseInt(masterData["Inword_No"].split("JWI")[1]);
  data[primarykey] = masterData[primarykey];

  data.ID = uuidv4();
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const jobWorkReceiptDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData,
  no_of_records
) => {
  //console.log(primarykey);
  //console.log(data);
  //console.log("tableFormData", tableFormData);
  data.id = uuidv4();
  data.ID = data.id;
  data[primarykey] = masterData[primarykey];
  data.JWI_Sr_No = no_of_records + 1;
  data.isNew = true;
  data.Work_Details = data["Work_Details"].join(", ");
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  data.Total_Cost = (parseInt(data.Rate) * parseInt(data.Quantity)).toFixed(2);
  console.log("data", data);
  return data;
};

export const saleChallan = (data, id, primarykey, masterData, isMaster,type) => {
  //console.log(primarykey);
  //console.log(data);
  // data.id = uuidv4();
  //console.log("idbsdbsbsbsbs", masterData["Emp_ID"].split("OM")[1]);
  data.id = parseInt(masterData["Challan_No"].split("SC")[1]);
  data[primarykey] = masterData[primarykey];

  data.ID = uuidv4();
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const saleChallanDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData,
  no_of_records
) => {
  //console.log(primarykey);
  //console.log(data);
  //console.log("tableFormData", tableFormData);
  data.id = uuidv4();
  data.ID = data.id;
  data.Challan_Sr_No = no_of_records + 1;
  data[primarykey] = masterData[primarykey];
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const paymentDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData,
  no_of_records
) => {
  //console.log(primarykey);
  //console.log(data);
  //console.log("tableFormData", tableFormData);
  data.id = uuidv4();
  data.ID = data.id;
  data.Sr_No = no_of_records + 1;
  data[primarykey] = masterData[primarykey];
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const payment = (data, id, primarykey, masterData, isMaster,type) => {
  //console.log(primarykey);
  //console.log(data);
  // data.id = uuidv4();
  //console.log("idbsdbsbsbsbs", masterData["Emp_ID"].split("OM")[1]);
  data.id = parseInt(masterData["Reference_Number"].split("PAY")[1]);
  data[primarykey] = masterData[primarykey];

  data.ID = uuidv4();
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const rejection = (data, id, primarykey, masterData, isMaster,type) => {
  //console.log(primarykey);
  //console.log(data);
  // data.id = uuidv4();
  //console.log("idbsdbsbsbsbs", masterData["Emp_ID"].split("OM")[1]);
  data.id = parseInt(masterData["Report_No"].split("REJ")[1]);
  data[primarykey] = masterData[primarykey];

  data.ID = uuidv4();
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const rejectionReportDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData,
  no_of_records
) => {
  //console.log(primarykey);
  //console.log(data);
  //console.log("tableFormData", tableFormData);
  data.id = uuidv4();
  data.ID = data.id;
  data.Sr_No = no_of_records + 1;
  data[primarykey] = masterData[primarykey];
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const earningDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData
) => {
  //console.log(primarykey);
  //console.log(data);
  //console.log("tableFormData", tableFormData);
  data.id = uuidv4();
  data.ID = data.id;
  data[primarykey] = masterData[primarykey];
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};

export const generalWorkDetails = (
  data,
  id,
  primarykey,
  masterData,
  isMaster,
  tableFormData,
  no_of_records
) => {
  //console.log(primarykey);
  //console.log(data);
  //console.log("tableFormData", tableFormData);
  data.id = uuidv4();
  data.ID = data.id;
  data.Sr_No = no_of_records + 1;
  data[primarykey] = masterData[primarykey];
  data.isNew = true;
  data.isServer = false;
  data.isDeleted = false;
  data.isModified = false;
  data.isUpdateMaster = false;
  return data;
};
