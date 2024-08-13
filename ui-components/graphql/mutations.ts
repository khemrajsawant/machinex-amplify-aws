/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccountMasterForm = /* GraphQL */ `
  mutation CreateAccountMasterForm(
    $condition: ModelAccountMasterFormConditionInput
    $input: CreateAccountMasterFormInput!
  ) {
    createAccountMasterForm(condition: $condition, input: $input) {
      Account_Name
      Address
      Email
      ID
      Mobile
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createBankDetails = /* GraphQL */ `
  mutation CreateBankDetails(
    $condition: ModelBankDetailsConditionInput
    $input: CreateBankDetailsInput!
  ) {
    createBankDetails(condition: $condition, input: $input) {
      Account_No
      Bank_Name
      Emp_ID
      ID
      IFSC_Code
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createBillOfProces = /* GraphQL */ `
  mutation CreateBillOfProces(
    $condition: ModelBillOfProcesConditionInput
    $input: CreateBillOfProcesInput!
  ) {
    createBillOfProces(condition: $condition, input: $input) {
      Cost
      Drawing_float
      ID
      Is_Scrap_Applicable
      Operation_Description
      Operation_float
      Opn_Name
      Time_Min
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createCompanyInformation = /* GraphQL */ `
  mutation CreateCompanyInformation(
    $condition: ModelCompanyInformationConditionInput
    $input: CreateCompanyInformationInput!
  ) {
    createCompanyInformation(condition: $condition, input: $input) {
      Address
      Country
      Email
      ID
      Mobile
      Name
      Pin_Code
      State
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createDailyWorkReport = /* GraphQL */ `
  mutation CreateDailyWorkReport(
    $condition: ModelDailyWorkReportConditionInput
    $input: CreateDailyWorkReportInput!
  ) {
    createDailyWorkReport(condition: $condition, input: $input) {
      Approval
      Break_In_Hours
      Check_In
      Check_Out
      Date
      ID
      Month
      OverTime_Hours
      Report_No
      Work_Hours
      Worker_No
      Year
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createEarningDetails = /* GraphQL */ `
  mutation CreateEarningDetails(
    $condition: ModelEarningDetailsConditionInput
    $input: CreateEarningDetailsInput!
  ) {
    createEarningDetails(condition: $condition, input: $input) {
      Drawing_float
      Earning_Cost
      ID
      Machine_float
      Operation
      Quantity
      Report_No
      Work_Order_float
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      updatedAt
      __typename
    }
  }
`;
export const createEmployeeMaster = /* GraphQL */ `
  mutation CreateEmployeeMaster(
    $condition: ModelEmployeeMasterConditionInput
    $input: CreateEmployeeMasterInput!
  ) {
    createEmployeeMaster(condition: $condition, input: $input) {
      Aadhar_No
      Address
      DOB
      Email
      Emp_ID
      First_Name
      Gender
      ID
      Joining_Date
      Middle_Name
      Mobile_No
      Release_Date
      Surname
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createGeneralWorkDetails = /* GraphQL */ `
  mutation CreateGeneralWorkDetails(
    $condition: ModelGeneralWorkDetailsConditionInput
    $input: CreateGeneralWorkDetailsInput!
  ) {
    createGeneralWorkDetails(condition: $condition, input: $input) {
      Hrs
      ID
      Misc_Work
      Remark
      Report_No
      Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createGeneralWorkList = /* GraphQL */ `
  mutation CreateGeneralWorkList(
    $condition: ModelGeneralWorkListConditionInput
    $input: CreateGeneralWorkListInput!
  ) {
    createGeneralWorkList(condition: $condition, input: $input) {
      General_Work
      ID
      Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createItemMaster = /* GraphQL */ `
  mutation CreateItemMaster(
    $condition: ModelItemMasterConditionInput
    $input: CreateItemMasterInput!
  ) {
    createItemMaster(condition: $condition, input: $input) {
      Description
      Drawing_float
      Finish_Weight
      ID
      Item_Group
      Item_Material
      Material_Handling_Charges
      Rough_Weight
      Scrap_Value
      Size
      UOM
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createJobWorkOrder = /* GraphQL */ `
  mutation CreateJobWorkOrder(
    $condition: ModelJobWorkOrderConditionInput
    $input: CreateJobWorkOrderInput!
  ) {
    createJobWorkOrder(condition: $condition, input: $input) {
      Account_Name
      Date
      Drawing_float
      ID
      JWO_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createJobWorkOrderDetails = /* GraphQL */ `
  mutation CreateJobWorkOrderDetails(
    $condition: ModelJobWorkOrderDetailsConditionInput
    $input: CreateJobWorkOrderDetailsInput!
  ) {
    createJobWorkOrderDetails(condition: $condition, input: $input) {
      Bal_Qty
      Del_Date
      ID
      JWO_In_Qty
      JWO_No
      JWO_Sr_No
      PO_Ref
      Quantity
      Rate
      Rej_Qty
      Total_Cost
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createJobWorkOrderOperationDetails = /* GraphQL */ `
  mutation CreateJobWorkOrderOperationDetails(
    $condition: ModelJobWorkOrderOperationDetailsConditionInput
    $input: CreateJobWorkOrderOperationDetailsInput!
  ) {
    createJobWorkOrderOperationDetails(condition: $condition, input: $input) {
      Bal_Qty
      Del_Date
      Drawing_float
      ID
      JWO_In_Qty
      JWO_No
      JWO_Sr_No
      Qty
      Rate
      Rej_Qty
      Total_Cost
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createJobWorkRecceiptDetails = /* GraphQL */ `
  mutation CreateJobWorkRecceiptDetails(
    $condition: ModelJobWorkRecceiptDetailsConditionInput
    $input: CreateJobWorkRecceiptDetailsInput!
  ) {
    createJobWorkRecceiptDetails(condition: $condition, input: $input) {
      ID
      Inword_No
      JWI_Sr_No
      JWO_No
      PO_Ref
      Quantity
      Rate
      Remark
      Total_Cost
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createJobWorkReceipt = /* GraphQL */ `
  mutation CreateJobWorkReceipt(
    $condition: ModelJobWorkReceiptConditionInput
    $input: CreateJobWorkReceiptInput!
  ) {
    createJobWorkReceipt(condition: $condition, input: $input) {
      Account_Name
      Date
      ID
      Inword_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createMachineMaster = /* GraphQL */ `
  mutation CreateMachineMaster(
    $condition: ModelMachineMasterConditionInput
    $input: CreateMachineMasterInput!
  ) {
    createMachineMaster(condition: $condition, input: $input) {
      ID
      Machine_Name
      Machine_Per_Hrs_Rate
      Machine_Specification
      Machine_float
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createOperationDecription = /* GraphQL */ `
  mutation CreateOperationDecription(
    $condition: ModelOperationDecriptionConditionInput
    $input: CreateOperationDecriptionInput!
  ) {
    createOperationDecription(condition: $condition, input: $input) {
      ID
      Opn_Desc
      Opn_Name
      Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      updatedAt
      __typename
    }
  }
`;
export const createOperationMaster = /* GraphQL */ `
  mutation CreateOperationMaster(
    $condition: ModelOperationMasterConditionInput
    $input: CreateOperationMasterInput!
  ) {
    createOperationMaster(condition: $condition, input: $input) {
      ID
      Opn_Name
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $condition: ModelPaymentConditionInput
    $input: CreatePaymentInput!
  ) {
    createPayment(condition: $condition, input: $input) {
      Date
      ID
      Payment_Remark
      Reference_float
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createPaymentDetails = /* GraphQL */ `
  mutation CreatePaymentDetails(
    $condition: ModelPaymentDetailsConditionInput
    $input: CreatePaymentDetailsInput!
  ) {
    createPaymentDetails(condition: $condition, input: $input) {
      Account_Name
      Amount
      Description
      ID
      Payment_Mode
      Reference_float
      Sr_No
      Transaction_Type
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createRejectionReport = /* GraphQL */ `
  mutation CreateRejectionReport(
    $condition: ModelRejectionReportConditionInput
    $input: CreateRejectionReportInput!
  ) {
    createRejectionReport(condition: $condition, input: $input) {
      Account_Name
      Date
      ID
      Report_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createRejectionReportDetails = /* GraphQL */ `
  mutation CreateRejectionReportDetails(
    $condition: ModelRejectionReportDetailsConditionInput
    $input: CreateRejectionReportDetailsInput!
  ) {
    createRejectionReportDetails(condition: $condition, input: $input) {
      Drawing_No
      ID
      Mat_Cost
      Opn_Details
      Quantity
      Rej_Details
      Report_No
      Sr_No
      Work_Order_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createSalaryDetails = /* GraphQL */ `
  mutation CreateSalaryDetails(
    $condition: ModelSalaryDetailsConditionInput
    $input: CreateSalaryDetailsInput!
  ) {
    createSalaryDetails(condition: $condition, input: $input) {
      Designation
      Earning_Ratio
      Emp_ID
      From_Date
      ID
      Incentive_Ratio
      Overtime_Ratio
      Salary_Per_Day
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createSaleChallan = /* GraphQL */ `
  mutation CreateSaleChallan(
    $condition: ModelSaleChallanConditionInput
    $input: CreateSaleChallanInput!
  ) {
    createSaleChallan(condition: $condition, input: $input) {
      Account_Name
      Challan_No
      Date
      ID
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createSaleChallanDetails = /* GraphQL */ `
  mutation CreateSaleChallanDetails(
    $condition: ModelSaleChallanDetailsConditionInput
    $input: CreateSaleChallanDetailsInput!
  ) {
    createSaleChallanDetails(condition: $condition, input: $input) {
      Challan_No
      Challan_Sr_No
      Drawing_float
      ID
      PO_Ref
      Quantity
      Rate
      Remark
      Work_Order_No
      Work_Order_Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createUserDetail = /* GraphQL */ `
  mutation CreateUserDetail(
    $condition: ModelUserDetailConditionInput
    $input: CreateUserDetailInput!
  ) {
    createUserDetail(condition: $condition, input: $input) {
      Access_Category
      Emp_ID
      ID
      User_Name
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createWorkOrder = /* GraphQL */ `
  mutation CreateWorkOrder(
    $condition: ModelWorkOrderConditionInput
    $input: CreateWorkOrderInput!
  ) {
    createWorkOrder(condition: $condition, input: $input) {
      Account_Name
      Date
      ID
      Order_No
      PO_Ref
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createWorkOrderDetails = /* GraphQL */ `
  mutation CreateWorkOrderDetails(
    $condition: ModelWorkOrderDetailsConditionInput
    $input: CreateWorkOrderDetailsInput!
  ) {
    createWorkOrderDetails(condition: $condition, input: $input) {
      Bal_Qty
      Drawing_float
      ID
      Order_No
      Out_Qty
      PO_Ref
      Prod_Qty
      Quantity
      Rate
      Rej_Qty
      Remark
      Sr_No
      Work_Details
      Work_Order_Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createWorkOrderOpeationwiseSpliup = /* GraphQL */ `
  mutation CreateWorkOrderOpeationwiseSpliup(
    $condition: ModelWorkOrderOpeationwiseSpliupConditionInput
    $input: CreateWorkOrderOpeationwiseSpliupInput!
  ) {
    createWorkOrderOpeationwiseSpliup(condition: $condition, input: $input) {
      Drawing_float
      ID
      Order_No
      PO_Ref
      Quantity
      Rate
      Remark
      Sr_No
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const createWorkstationMaster = /* GraphQL */ `
  mutation CreateWorkstationMaster(
    $condition: ModelWorkstationMasterConditionInput
    $input: CreateWorkstationMasterInput!
  ) {
    createWorkstationMaster(condition: $condition, input: $input) {
      ID
      Per_Hrs_Rate
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteAccountMasterForm = /* GraphQL */ `
  mutation DeleteAccountMasterForm(
    $condition: ModelAccountMasterFormConditionInput
    $input: DeleteAccountMasterFormInput!
  ) {
    deleteAccountMasterForm(condition: $condition, input: $input) {
      Account_Name
      Address
      Email
      ID
      Mobile
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteBankDetails = /* GraphQL */ `
  mutation DeleteBankDetails(
    $condition: ModelBankDetailsConditionInput
    $input: DeleteBankDetailsInput!
  ) {
    deleteBankDetails(condition: $condition, input: $input) {
      Account_No
      Bank_Name
      Emp_ID
      ID
      IFSC_Code
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteBillOfProces = /* GraphQL */ `
  mutation DeleteBillOfProces(
    $condition: ModelBillOfProcesConditionInput
    $input: DeleteBillOfProcesInput!
  ) {
    deleteBillOfProces(condition: $condition, input: $input) {
      Cost
      Drawing_float
      ID
      Is_Scrap_Applicable
      Operation_Description
      Operation_float
      Opn_Name
      Time_Min
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteCompanyInformation = /* GraphQL */ `
  mutation DeleteCompanyInformation(
    $condition: ModelCompanyInformationConditionInput
    $input: DeleteCompanyInformationInput!
  ) {
    deleteCompanyInformation(condition: $condition, input: $input) {
      Address
      Country
      Email
      ID
      Mobile
      Name
      Pin_Code
      State
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteDailyWorkReport = /* GraphQL */ `
  mutation DeleteDailyWorkReport(
    $condition: ModelDailyWorkReportConditionInput
    $input: DeleteDailyWorkReportInput!
  ) {
    deleteDailyWorkReport(condition: $condition, input: $input) {
      Approval
      Break_In_Hours
      Check_In
      Check_Out
      Date
      ID
      Month
      OverTime_Hours
      Report_No
      Work_Hours
      Worker_No
      Year
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteEarningDetails = /* GraphQL */ `
  mutation DeleteEarningDetails(
    $condition: ModelEarningDetailsConditionInput
    $input: DeleteEarningDetailsInput!
  ) {
    deleteEarningDetails(condition: $condition, input: $input) {
      Drawing_float
      Earning_Cost
      ID
      Machine_float
      Operation
      Quantity
      Report_No
      Work_Order_float
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteEmployeeMaster = /* GraphQL */ `
  mutation DeleteEmployeeMaster(
    $condition: ModelEmployeeMasterConditionInput
    $input: DeleteEmployeeMasterInput!
  ) {
    deleteEmployeeMaster(condition: $condition, input: $input) {
      Aadhar_No
      Address
      DOB
      Email
      Emp_ID
      First_Name
      Gender
      ID
      Joining_Date
      Middle_Name
      Mobile_No
      Release_Date
      Surname
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteGeneralWorkDetails = /* GraphQL */ `
  mutation DeleteGeneralWorkDetails(
    $condition: ModelGeneralWorkDetailsConditionInput
    $input: DeleteGeneralWorkDetailsInput!
  ) {
    deleteGeneralWorkDetails(condition: $condition, input: $input) {
      Hrs
      ID
      Misc_Work
      Remark
      Report_No
      Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteGeneralWorkList = /* GraphQL */ `
  mutation DeleteGeneralWorkList(
    $condition: ModelGeneralWorkListConditionInput
    $input: DeleteGeneralWorkListInput!
  ) {
    deleteGeneralWorkList(condition: $condition, input: $input) {
      General_Work
      ID
      Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteItemMaster = /* GraphQL */ `
  mutation DeleteItemMaster(
    $condition: ModelItemMasterConditionInput
    $input: DeleteItemMasterInput!
  ) {
    deleteItemMaster(condition: $condition, input: $input) {
      Description
      Drawing_float
      Finish_Weight
      ID
      Item_Group
      Item_Material
      Material_Handling_Charges
      Rough_Weight
      Scrap_Value
      Size
      UOM
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteJobWorkOrder = /* GraphQL */ `
  mutation DeleteJobWorkOrder(
    $condition: ModelJobWorkOrderConditionInput
    $input: DeleteJobWorkOrderInput!
  ) {
    deleteJobWorkOrder(condition: $condition, input: $input) {
      Account_Name
      Date
      Drawing_float
      ID
      JWO_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteJobWorkOrderDetails = /* GraphQL */ `
  mutation DeleteJobWorkOrderDetails(
    $condition: ModelJobWorkOrderDetailsConditionInput
    $input: DeleteJobWorkOrderDetailsInput!
  ) {
    deleteJobWorkOrderDetails(condition: $condition, input: $input) {
      Bal_Qty
      Del_Date
      ID
      JWO_In_Qty
      JWO_No
      JWO_Sr_No
      PO_Ref
      Quantity
      Rate
      Rej_Qty
      Total_Cost
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteJobWorkOrderOperationDetails = /* GraphQL */ `
  mutation DeleteJobWorkOrderOperationDetails(
    $condition: ModelJobWorkOrderOperationDetailsConditionInput
    $input: DeleteJobWorkOrderOperationDetailsInput!
  ) {
    deleteJobWorkOrderOperationDetails(condition: $condition, input: $input) {
      Bal_Qty
      Del_Date
      Drawing_float
      ID
      JWO_In_Qty
      JWO_No
      JWO_Sr_No
      Qty
      Rate
      Rej_Qty
      Total_Cost
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteJobWorkRecceiptDetails = /* GraphQL */ `
  mutation DeleteJobWorkRecceiptDetails(
    $condition: ModelJobWorkRecceiptDetailsConditionInput
    $input: DeleteJobWorkRecceiptDetailsInput!
  ) {
    deleteJobWorkRecceiptDetails(condition: $condition, input: $input) {
      ID
      Inword_No
      JWI_Sr_No
      JWO_No
      PO_Ref
      Quantity
      Rate
      Remark
      Total_Cost
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteJobWorkReceipt = /* GraphQL */ `
  mutation DeleteJobWorkReceipt(
    $condition: ModelJobWorkReceiptConditionInput
    $input: DeleteJobWorkReceiptInput!
  ) {
    deleteJobWorkReceipt(condition: $condition, input: $input) {
      Account_Name
      Date
      ID
      Inword_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteMachineMaster = /* GraphQL */ `
  mutation DeleteMachineMaster(
    $condition: ModelMachineMasterConditionInput
    $input: DeleteMachineMasterInput!
  ) {
    deleteMachineMaster(condition: $condition, input: $input) {
      ID
      Machine_Name
      Machine_Per_Hrs_Rate
      Machine_Specification
      Machine_float
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteOperationDecription = /* GraphQL */ `
  mutation DeleteOperationDecription(
    $condition: ModelOperationDecriptionConditionInput
    $input: DeleteOperationDecriptionInput!
  ) {
    deleteOperationDecription(condition: $condition, input: $input) {
      ID
      Opn_Desc
      Opn_Name
      Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteOperationMaster = /* GraphQL */ `
  mutation DeleteOperationMaster(
    $condition: ModelOperationMasterConditionInput
    $input: DeleteOperationMasterInput!
  ) {
    deleteOperationMaster(condition: $condition, input: $input) {
      ID
      Opn_Name
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $condition: ModelPaymentConditionInput
    $input: DeletePaymentInput!
  ) {
    deletePayment(condition: $condition, input: $input) {
      Date
      ID
      Payment_Remark
      Reference_float
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deletePaymentDetails = /* GraphQL */ `
  mutation DeletePaymentDetails(
    $condition: ModelPaymentDetailsConditionInput
    $input: DeletePaymentDetailsInput!
  ) {
    deletePaymentDetails(condition: $condition, input: $input) {
      Account_Name
      Amount
      Description
      ID
      Payment_Mode
      Reference_float
      Sr_No
      Transaction_Type
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteRejectionReport = /* GraphQL */ `
  mutation DeleteRejectionReport(
    $condition: ModelRejectionReportConditionInput
    $input: DeleteRejectionReportInput!
  ) {
    deleteRejectionReport(condition: $condition, input: $input) {
      Account_Name
      Date
      ID
      Report_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteRejectionReportDetails = /* GraphQL */ `
  mutation DeleteRejectionReportDetails(
    $condition: ModelRejectionReportDetailsConditionInput
    $input: DeleteRejectionReportDetailsInput!
  ) {
    deleteRejectionReportDetails(condition: $condition, input: $input) {
      Drawing_No
      ID
      Mat_Cost
      Opn_Details
      Quantity
      Rej_Details
      Report_No
      Sr_No
      Work_Order_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteSalaryDetails = /* GraphQL */ `
  mutation DeleteSalaryDetails(
    $condition: ModelSalaryDetailsConditionInput
    $input: DeleteSalaryDetailsInput!
  ) {
    deleteSalaryDetails(condition: $condition, input: $input) {
      Designation
      Earning_Ratio
      Emp_ID
      From_Date
      ID
      Incentive_Ratio
      Overtime_Ratio
      Salary_Per_Day
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteSaleChallan = /* GraphQL */ `
  mutation DeleteSaleChallan(
    $condition: ModelSaleChallanConditionInput
    $input: DeleteSaleChallanInput!
  ) {
    deleteSaleChallan(condition: $condition, input: $input) {
      Account_Name
      Challan_No
      Date
      ID
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteSaleChallanDetails = /* GraphQL */ `
  mutation DeleteSaleChallanDetails(
    $condition: ModelSaleChallanDetailsConditionInput
    $input: DeleteSaleChallanDetailsInput!
  ) {
    deleteSaleChallanDetails(condition: $condition, input: $input) {
      Challan_No
      Challan_Sr_No
      Drawing_float
      ID
      PO_Ref
      Quantity
      Rate
      Remark
      Work_Order_No
      Work_Order_Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteUserDetail = /* GraphQL */ `
  mutation DeleteUserDetail(
    $condition: ModelUserDetailConditionInput
    $input: DeleteUserDetailInput!
  ) {
    deleteUserDetail(condition: $condition, input: $input) {
      Access_Category
      Emp_ID
      ID
      User_Name
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteWorkOrder = /* GraphQL */ `
  mutation DeleteWorkOrder(
    $condition: ModelWorkOrderConditionInput
    $input: DeleteWorkOrderInput!
  ) {
    deleteWorkOrder(condition: $condition, input: $input) {
      Account_Name
      Date
      ID
      Order_No
      PO_Ref
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteWorkOrderDetails = /* GraphQL */ `
  mutation DeleteWorkOrderDetails(
    $condition: ModelWorkOrderDetailsConditionInput
    $input: DeleteWorkOrderDetailsInput!
  ) {
    deleteWorkOrderDetails(condition: $condition, input: $input) {
      Bal_Qty
      Drawing_float
      ID
      Order_No
      Out_Qty
      PO_Ref
      Prod_Qty
      Quantity
      Rate
      Rej_Qty
      Remark
      Sr_No
      Work_Details
      Work_Order_Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteWorkOrderOpeationwiseSpliup = /* GraphQL */ `
  mutation DeleteWorkOrderOpeationwiseSpliup(
    $condition: ModelWorkOrderOpeationwiseSpliupConditionInput
    $input: DeleteWorkOrderOpeationwiseSpliupInput!
  ) {
    deleteWorkOrderOpeationwiseSpliup(condition: $condition, input: $input) {
      Drawing_float
      ID
      Order_No
      PO_Ref
      Quantity
      Rate
      Remark
      Sr_No
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const deleteWorkstationMaster = /* GraphQL */ `
  mutation DeleteWorkstationMaster(
    $condition: ModelWorkstationMasterConditionInput
    $input: DeleteWorkstationMasterInput!
  ) {
    deleteWorkstationMaster(condition: $condition, input: $input) {
      ID
      Per_Hrs_Rate
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateAccountMasterForm = /* GraphQL */ `
  mutation UpdateAccountMasterForm(
    $condition: ModelAccountMasterFormConditionInput
    $input: UpdateAccountMasterFormInput!
  ) {
    updateAccountMasterForm(condition: $condition, input: $input) {
      Account_Name
      Address
      Email
      ID
      Mobile
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateBankDetails = /* GraphQL */ `
  mutation UpdateBankDetails(
    $condition: ModelBankDetailsConditionInput
    $input: UpdateBankDetailsInput!
  ) {
    updateBankDetails(condition: $condition, input: $input) {
      Account_No
      Bank_Name
      Emp_ID
      ID
      IFSC_Code
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateBillOfProces = /* GraphQL */ `
  mutation UpdateBillOfProces(
    $condition: ModelBillOfProcesConditionInput
    $input: UpdateBillOfProcesInput!
  ) {
    updateBillOfProces(condition: $condition, input: $input) {
      Cost
      Drawing_float
      ID
      Is_Scrap_Applicable
      Operation_Description
      Operation_float
      Opn_Name
      Time_Min
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateCompanyInformation = /* GraphQL */ `
  mutation UpdateCompanyInformation(
    $condition: ModelCompanyInformationConditionInput
    $input: UpdateCompanyInformationInput!
  ) {
    updateCompanyInformation(condition: $condition, input: $input) {
      Address
      Country
      Email
      ID
      Mobile
      Name
      Pin_Code
      State
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateDailyWorkReport = /* GraphQL */ `
  mutation UpdateDailyWorkReport(
    $condition: ModelDailyWorkReportConditionInput
    $input: UpdateDailyWorkReportInput!
  ) {
    updateDailyWorkReport(condition: $condition, input: $input) {
      Approval
      Break_In_Hours
      Check_In
      Check_Out
      Date
      ID
      Month
      OverTime_Hours
      Report_No
      Work_Hours
      Worker_No
      Year
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateEarningDetails = /* GraphQL */ `
  mutation UpdateEarningDetails(
    $condition: ModelEarningDetailsConditionInput
    $input: UpdateEarningDetailsInput!
  ) {
    updateEarningDetails(condition: $condition, input: $input) {
      Drawing_float
      Earning_Cost
      ID
      Machine_float
      Operation
      Quantity
      Report_No
      Work_Order_float
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateEmployeeMaster = /* GraphQL */ `
  mutation UpdateEmployeeMaster(
    $condition: ModelEmployeeMasterConditionInput
    $input: UpdateEmployeeMasterInput!
  ) {
    updateEmployeeMaster(condition: $condition, input: $input) {
      Aadhar_No
      Address
      DOB
      Email
      Emp_ID
      First_Name
      Gender
      ID
      Joining_Date
      Middle_Name
      Mobile_No
      Release_Date
      Surname
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateGeneralWorkDetails = /* GraphQL */ `
  mutation UpdateGeneralWorkDetails(
    $condition: ModelGeneralWorkDetailsConditionInput
    $input: UpdateGeneralWorkDetailsInput!
  ) {
    updateGeneralWorkDetails(condition: $condition, input: $input) {
      Hrs
      ID
      Misc_Work
      Remark
      Report_No
      Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateGeneralWorkList = /* GraphQL */ `
  mutation UpdateGeneralWorkList(
    $condition: ModelGeneralWorkListConditionInput
    $input: UpdateGeneralWorkListInput!
  ) {
    updateGeneralWorkList(condition: $condition, input: $input) {
      General_Work
      ID
      Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateItemMaster = /* GraphQL */ `
  mutation UpdateItemMaster(
    $condition: ModelItemMasterConditionInput
    $input: UpdateItemMasterInput!
  ) {
    updateItemMaster(condition: $condition, input: $input) {
      Description
      Drawing_float
      Finish_Weight
      ID
      Item_Group
      Item_Material
      Material_Handling_Charges
      Rough_Weight
      Scrap_Value
      Size
      UOM
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateJobWorkOrder = /* GraphQL */ `
  mutation UpdateJobWorkOrder(
    $condition: ModelJobWorkOrderConditionInput
    $input: UpdateJobWorkOrderInput!
  ) {
    updateJobWorkOrder(condition: $condition, input: $input) {
      Account_Name
      Date
      Drawing_float
      ID
      JWO_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateJobWorkOrderDetails = /* GraphQL */ `
  mutation UpdateJobWorkOrderDetails(
    $condition: ModelJobWorkOrderDetailsConditionInput
    $input: UpdateJobWorkOrderDetailsInput!
  ) {
    updateJobWorkOrderDetails(condition: $condition, input: $input) {
      Bal_Qty
      Del_Date
      ID
      JWO_In_Qty
      JWO_No
      JWO_Sr_No
      PO_Ref
      Quantity
      Rate
      Rej_Qty
      Total_Cost
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateJobWorkOrderOperationDetails = /* GraphQL */ `
  mutation UpdateJobWorkOrderOperationDetails(
    $condition: ModelJobWorkOrderOperationDetailsConditionInput
    $input: UpdateJobWorkOrderOperationDetailsInput!
  ) {
    updateJobWorkOrderOperationDetails(condition: $condition, input: $input) {
      Bal_Qty
      Del_Date
      Drawing_float
      ID
      JWO_In_Qty
      JWO_No
      JWO_Sr_No
      Qty
      Rate
      Rej_Qty
      Total_Cost
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateJobWorkRecceiptDetails = /* GraphQL */ `
  mutation UpdateJobWorkRecceiptDetails(
    $condition: ModelJobWorkRecceiptDetailsConditionInput
    $input: UpdateJobWorkRecceiptDetailsInput!
  ) {
    updateJobWorkRecceiptDetails(condition: $condition, input: $input) {
      ID
      Inword_No
      JWI_Sr_No
      JWO_No
      PO_Ref
      Quantity
      Rate
      Remark
      Total_Cost
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateJobWorkReceipt = /* GraphQL */ `
  mutation UpdateJobWorkReceipt(
    $condition: ModelJobWorkReceiptConditionInput
    $input: UpdateJobWorkReceiptInput!
  ) {
    updateJobWorkReceipt(condition: $condition, input: $input) {
      Account_Name
      Date
      ID
      Inword_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateMachineMaster = /* GraphQL */ `
  mutation UpdateMachineMaster(
    $condition: ModelMachineMasterConditionInput
    $input: UpdateMachineMasterInput!
  ) {
    updateMachineMaster(condition: $condition, input: $input) {
      ID
      Machine_Name
      Machine_Per_Hrs_Rate
      Machine_Specification
      Machine_float
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateOperationDecription = /* GraphQL */ `
  mutation UpdateOperationDecription(
    $condition: ModelOperationDecriptionConditionInput
    $input: UpdateOperationDecriptionInput!
  ) {
    updateOperationDecription(condition: $condition, input: $input) {
      ID
      Opn_Desc
      Opn_Name
      Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateOperationMaster = /* GraphQL */ `
  mutation UpdateOperationMaster(
    $condition: ModelOperationMasterConditionInput
    $input: UpdateOperationMasterInput!
  ) {
    updateOperationMaster(condition: $condition, input: $input) {
      ID
      Opn_Name
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $condition: ModelPaymentConditionInput
    $input: UpdatePaymentInput!
  ) {
    updatePayment(condition: $condition, input: $input) {
      Date
      ID
      Payment_Remark
      Reference_float
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updatePaymentDetails = /* GraphQL */ `
  mutation UpdatePaymentDetails(
    $condition: ModelPaymentDetailsConditionInput
    $input: UpdatePaymentDetailsInput!
  ) {
    updatePaymentDetails(condition: $condition, input: $input) {
      Account_Name
      Amount
      Description
      ID
      Payment_Mode
      Reference_float
      Sr_No
      Transaction_Type
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateRejectionReport = /* GraphQL */ `
  mutation UpdateRejectionReport(
    $condition: ModelRejectionReportConditionInput
    $input: UpdateRejectionReportInput!
  ) {
    updateRejectionReport(condition: $condition, input: $input) {
      Account_Name
      Date
      ID
      Report_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateRejectionReportDetails = /* GraphQL */ `
  mutation UpdateRejectionReportDetails(
    $condition: ModelRejectionReportDetailsConditionInput
    $input: UpdateRejectionReportDetailsInput!
  ) {
    updateRejectionReportDetails(condition: $condition, input: $input) {
      Drawing_No
      ID
      Mat_Cost
      Opn_Details
      Quantity
      Rej_Details
      Report_No
      Sr_No
      Work_Order_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateSalaryDetails = /* GraphQL */ `
  mutation UpdateSalaryDetails(
    $condition: ModelSalaryDetailsConditionInput
    $input: UpdateSalaryDetailsInput!
  ) {
    updateSalaryDetails(condition: $condition, input: $input) {
      Designation
      Earning_Ratio
      Emp_ID
      From_Date
      ID
      Incentive_Ratio
      Overtime_Ratio
      Salary_Per_Day
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateSaleChallan = /* GraphQL */ `
  mutation UpdateSaleChallan(
    $condition: ModelSaleChallanConditionInput
    $input: UpdateSaleChallanInput!
  ) {
    updateSaleChallan(condition: $condition, input: $input) {
      Account_Name
      Challan_No
      Date
      ID
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateSaleChallanDetails = /* GraphQL */ `
  mutation UpdateSaleChallanDetails(
    $condition: ModelSaleChallanDetailsConditionInput
    $input: UpdateSaleChallanDetailsInput!
  ) {
    updateSaleChallanDetails(condition: $condition, input: $input) {
      Challan_No
      Challan_Sr_No
      Drawing_float
      ID
      PO_Ref
      Quantity
      Rate
      Remark
      Work_Order_No
      Work_Order_Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateUserDetail = /* GraphQL */ `
  mutation UpdateUserDetail(
    $condition: ModelUserDetailConditionInput
    $input: UpdateUserDetailInput!
  ) {
    updateUserDetail(condition: $condition, input: $input) {
      Access_Category
      Emp_ID
      ID
      User_Name
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateWorkOrder = /* GraphQL */ `
  mutation UpdateWorkOrder(
    $condition: ModelWorkOrderConditionInput
    $input: UpdateWorkOrderInput!
  ) {
    updateWorkOrder(condition: $condition, input: $input) {
      Account_Name
      Date
      ID
      Order_No
      PO_Ref
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateWorkOrderDetails = /* GraphQL */ `
  mutation UpdateWorkOrderDetails(
    $condition: ModelWorkOrderDetailsConditionInput
    $input: UpdateWorkOrderDetailsInput!
  ) {
    updateWorkOrderDetails(condition: $condition, input: $input) {
      Bal_Qty
      Drawing_float
      ID
      Order_No
      Out_Qty
      PO_Ref
      Prod_Qty
      Quantity
      Rate
      Rej_Qty
      Remark
      Sr_No
      Work_Details
      Work_Order_Sr_No
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateWorkOrderOpeationwiseSpliup = /* GraphQL */ `
  mutation UpdateWorkOrderOpeationwiseSpliup(
    $condition: ModelWorkOrderOpeationwiseSpliupConditionInput
    $input: UpdateWorkOrderOpeationwiseSpliupInput!
  ) {
    updateWorkOrderOpeationwiseSpliup(condition: $condition, input: $input) {
      Drawing_float
      ID
      Order_No
      PO_Ref
      Quantity
      Rate
      Remark
      Sr_No
      Work_Details
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
export const updateWorkstationMaster = /* GraphQL */ `
  mutation UpdateWorkstationMaster(
    $condition: ModelWorkstationMasterConditionInput
    $input: UpdateWorkstationMasterInput!
  ) {
    updateWorkstationMaster(condition: $condition, input: $input) {
      ID
      Per_Hrs_Rate
      Workstation
      createdAt
      id
      isDeleted
      isModified
      isNew
      isServer
      owner
      timeStamp
      updatedAt
      __typename
    }
  }
`;
