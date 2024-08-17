import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    }).authorization(allow => [allow.guest()]),

  RoleToRouteMapping:a
  .model({
    Role: a.string().array(),
    Allowed_Routes: a.string().array(),
    Allowed_Subroutes_Masters: a.string().array(),
    Allowed_Subroutes_Transactions: a.string().array(),
  }).authorization(allow => [allow.group('Admin')]),
    
  AccountMasterForm: a
    .model({
      ID: a.string(),
      Account_Name: a.string(),
      Address: a.string(),
      Mobile: a.string(),
      Email: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.guest()]),

  BankDetails: a
    .model({
      ID: a.string(),
      Emp_ID: a.string(),
      Account_No: a.string(),
      IFSC_Code: a.string(),
      Bank_Name: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.guest()]),

  BillOfProces: a
    .model({
      ID: a.string(),
      Drawing_float: a.string(),
      Operation_float: a.string(),
      Workstation: a.string(),
      Opn_Name: a.string(),
      Operation_Description: a.string(),
      Time_Min: a.float(),
      Cost: a.float(),
      Is_Scrap_Applicable: a.boolean(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    CompanyInformation: a
    .model({
      ID: a.string(),
      Name: a.string(),
      Address: a.string(),
      Pin_Code: a.string(),
      State: a.string(),
      Country: a.string(),
      Mobile: a.string(),
      Email: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    DailyWorkReport: a
    .model({
      ID: a.string(),
      Report_No: a.string(),
      Worker_No: a.string(),
      Date: a.string(),
      Check_In: a.string(),
      Check_Out: a.string(),
      Approval: a.boolean(),
      Break_In_Hours: a.float(),
      timeStamp: a.string(),
      Month: a.string(),
      Year: a.string(),
      Work_Hours: a.float(),
      OverTime_Hours: a.float(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    EarningDetails: a
    .model({
      ID: a.string(),
      Report_No: a.string(),
      Machine_float: a.string(),
      Drawing_float: a.string(),
      Work_Order_float: a.string(),
      Operation: a.string(),
      Quantity: a.float(),
      Earning_Cost: a.float(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    EmployeeMaster: a
    .model({
      ID: a.string(),
      Emp_ID: a.string(),
      Joining_Date: a.string(),
      Release_Date: a.string(),
      First_Name: a.string(),
      Middle_Name: a.string(),
      Surname: a.string(),
      Gender: a.string(),
      DOB: a.string(),
      Mobile_No: a.string(),
      Email: a.string(),
      Aadhar_No: a.string(),
      Address: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    GeneralWorkDetails: a
    .model({
      ID: a.string(),
      Report_No: a.string(),
      Sr_No: a.string(),
      Misc_Work: a.string(),
      Hrs: a.float(),
      Remark: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    GeneralWorkList: a
    .model({
      ID: a.string(),
      Sr_No: a.string(),
      General_Work: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    ItemMaster: a
    .model({
      ID: a.string(),
      Drawing_float: a.string(),
      Description: a.string(),
      Size: a.string(),
      Item_Group: a.string(),
      UOM: a.string(),
      Item_Material: a.string(),
      Rough_Weight: a.float(),
      Finish_Weight: a.float(),
      Scrap_Value: a.float(),
      Material_Handling_Charges: a.float(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  JobWorkOrderDetails: a
    .model({
      ID: a.string(),
      JWO_No: a.string(),
      JWO_Sr_No: a.string(),
      PO_Ref: a.string(),
      Quantity: a.float(),
      Del_Date: a.string(),
      Work_Details: a.string(),
      Rate: a.float(),
      Total_Cost: a.float(),
      JWO_In_Qty: a.float(),
      Bal_Qty: a.float(),
      Rej_Qty: a.float(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    JobWorkOrderOperationDetails: a
    .model({
      ID: a.string(),
      JWO_No: a.string(),
      JWO_Sr_No: a.string(),
      Drawing_float: a.string(),
      Qty: a.float(),
      Del_Date: a.string(),
      Work_Details: a.string(),
      Rate: a.float(),
      Total_Cost: a.float(),
      JWO_In_Qty: a.float(),
      Bal_Qty: a.float(),
      Rej_Qty: a.float(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  JobWorkOrder: a
    .model({
      ID: a.string(),
      JWO_No: a.string(),
      Drawing_float: a.string(),
      Date: a.string(),
      Account_Name: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    JobWorkRecceiptDetails: a
    .model({
      ID: a.string(),
      Inword_No: a.string(),
      JWI_Sr_No: a.string(),
      JWO_No: a.string(),
      PO_Ref: a.string(),
      Work_Details: a.string(),
      Quantity: a.float(),
      Rate: a.float(),
      Total_Cost: a.float(),
      Remark: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  JobWorkReceipt: a
    .model({
      ID: a.string(),
      Inword_No: a.string(),
      Date: a.string(),
      Account_Name: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    MachineMaster: a
    .model({
      ID: a.string(),
      Machine_float: a.string(),
      Machine_Name: a.string(),
      Machine_Specification: a.string(),
      Workstation: a.string(),
      Machine_Per_Hrs_Rate: a.float(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  OperationDecription: a
    .model({
      ID: a.string(),
      Opn_Name: a.string(),
      Sr_No: a.string(),
      Opn_Desc: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  OperationMaster: a
    .model({
      ID: a.string(),
      Workstation: a.string(),
      Opn_Name: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  PaymentDetails: a
    .model({
      ID: a.string(),
      Reference_float: a.string(),
      Sr_No: a.string(),
      Account_Name: a.string(),
      Transaction_Type: a.string(),
      Amount: a.float(),
      Payment_Mode: a.string(),
      timeStamp: a.string(),
      Description: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    Payment: a
    .model({
      ID: a.string(),
      Reference_float: a.string(),
      Date: a.string(),
      Payment_Remark: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  RejectionReportDetails: a
    .model({
      ID: a.string(),
      Report_No: a.string(),
      Sr_No: a.string(),
      Work_Order_No: a.string(),
      Drawing_No: a.string(),
      Opn_Details: a.string(),
      Quantity: a.float(),
      Mat_Cost: a.float(),
      Rej_Details: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  RejectionReport: a
    .model({
      ID: a.string(),
      Report_No: a.string(),
      Date: a.string(),
      Account_Name: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  SalaryDetails: a
    .model({
      ID: a.string(),
      Emp_ID: a.string(),
      From_Date: a.string(),
      Designation: a.string(),
      Salary_Per_Day: a.float(),
      Overtime_Ratio: a.float(),
      Earning_Ratio: a.float(),
      Incentive_Ratio: a.float(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  SaleChallanDetails: a
    .model({
      ID: a.string(),
      Challan_No: a.string(),
      Challan_Sr_No: a.string(),
      Work_Order_No: a.string(),
      Work_Order_Sr_No: a.string(),
      PO_Ref: a.string(),
      Drawing_float: a.string(),
      Quantity: a.float(),
      Rate: a.float(),
      Remark: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  SaleChallan: a
    .model({
      ID: a.string(),
      Challan_No: a.string(),
      Date: a.string(),
      Account_Name: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  UserDetail: a
    .model({
      ID: a.string(),
      Emp_ID: a.string(),
      User_Name: a.string(),
      Access_Category: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  WorkOrderDetails: a
    .model({
      ID: a.string(),
      Order_No: a.string(),
      Sr_No: a.string(),
      PO_Ref: a.string(),
      Drawing_float: a.string(),
      Quantity: a.float(),
      Rate: a.float(),
      Work_Details: a.string(),
      Remark: a.string(),
      timeStamp: a.string(),
      Prod_Qty: a.float(),
      Out_Qty: a.float(),
      Bal_Qty: a.float(),
      Rej_Qty: a.float(),
      Work_Order_Sr_No: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  WorkOrderOpeationwiseSpliup: a
    .model({
      ID: a.string(),
      Order_No: a.string(),
      Sr_No: a.string(),
      PO_Ref: a.string(),
      Drawing_float: a.string(),
      Quantity: a.float(),
      Rate: a.float(),
      Work_Details: a.string(),
      Remark: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  WorkOrder: a
    .model({
      ID: a.string(),
      Order_No: a.string(),
      PO_Ref: a.string(),
      Date: a.string(),
      Account_Name: a.string(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),

  WorkstationMaster: a
    .model({
      ID: a.string(),
      Workstation: a.string(),
      Per_Hrs_Rate: a.float(),
      timeStamp: a.string(),
      isServer: a.boolean(),
      isNew: a.boolean(),
      isModified: a.boolean(),
      isDeleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),



});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
