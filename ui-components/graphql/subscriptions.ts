/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccountMasterForm = /* GraphQL */ `
  subscription OnCreateAccountMasterForm(
    $filter: ModelSubscriptionAccountMasterFormFilterInput
    $owner: String
  ) {
    onCreateAccountMasterForm(filter: $filter, owner: $owner) {
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
export const onCreateBankDetails = /* GraphQL */ `
  subscription OnCreateBankDetails(
    $filter: ModelSubscriptionBankDetailsFilterInput
    $owner: String
  ) {
    onCreateBankDetails(filter: $filter, owner: $owner) {
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
export const onCreateBillOfProces = /* GraphQL */ `
  subscription OnCreateBillOfProces(
    $filter: ModelSubscriptionBillOfProcesFilterInput
    $owner: String
  ) {
    onCreateBillOfProces(filter: $filter, owner: $owner) {
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
export const onCreateCompanyInformation = /* GraphQL */ `
  subscription OnCreateCompanyInformation(
    $filter: ModelSubscriptionCompanyInformationFilterInput
    $owner: String
  ) {
    onCreateCompanyInformation(filter: $filter, owner: $owner) {
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
export const onCreateDailyWorkReport = /* GraphQL */ `
  subscription OnCreateDailyWorkReport(
    $filter: ModelSubscriptionDailyWorkReportFilterInput
    $owner: String
  ) {
    onCreateDailyWorkReport(filter: $filter, owner: $owner) {
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
export const onCreateEarningDetails = /* GraphQL */ `
  subscription OnCreateEarningDetails(
    $filter: ModelSubscriptionEarningDetailsFilterInput
    $owner: String
  ) {
    onCreateEarningDetails(filter: $filter, owner: $owner) {
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
export const onCreateEmployeeMaster = /* GraphQL */ `
  subscription OnCreateEmployeeMaster(
    $filter: ModelSubscriptionEmployeeMasterFilterInput
    $owner: String
  ) {
    onCreateEmployeeMaster(filter: $filter, owner: $owner) {
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
export const onCreateGeneralWorkDetails = /* GraphQL */ `
  subscription OnCreateGeneralWorkDetails(
    $filter: ModelSubscriptionGeneralWorkDetailsFilterInput
    $owner: String
  ) {
    onCreateGeneralWorkDetails(filter: $filter, owner: $owner) {
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
export const onCreateGeneralWorkList = /* GraphQL */ `
  subscription OnCreateGeneralWorkList(
    $filter: ModelSubscriptionGeneralWorkListFilterInput
    $owner: String
  ) {
    onCreateGeneralWorkList(filter: $filter, owner: $owner) {
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
export const onCreateItemMaster = /* GraphQL */ `
  subscription OnCreateItemMaster(
    $filter: ModelSubscriptionItemMasterFilterInput
    $owner: String
  ) {
    onCreateItemMaster(filter: $filter, owner: $owner) {
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
export const onCreateJobWorkOrder = /* GraphQL */ `
  subscription OnCreateJobWorkOrder(
    $filter: ModelSubscriptionJobWorkOrderFilterInput
    $owner: String
  ) {
    onCreateJobWorkOrder(filter: $filter, owner: $owner) {
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
export const onCreateJobWorkOrderDetails = /* GraphQL */ `
  subscription OnCreateJobWorkOrderDetails(
    $filter: ModelSubscriptionJobWorkOrderDetailsFilterInput
    $owner: String
  ) {
    onCreateJobWorkOrderDetails(filter: $filter, owner: $owner) {
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
export const onCreateJobWorkOrderOperationDetails = /* GraphQL */ `
  subscription OnCreateJobWorkOrderOperationDetails(
    $filter: ModelSubscriptionJobWorkOrderOperationDetailsFilterInput
    $owner: String
  ) {
    onCreateJobWorkOrderOperationDetails(filter: $filter, owner: $owner) {
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
export const onCreateJobWorkRecceiptDetails = /* GraphQL */ `
  subscription OnCreateJobWorkRecceiptDetails(
    $filter: ModelSubscriptionJobWorkRecceiptDetailsFilterInput
    $owner: String
  ) {
    onCreateJobWorkRecceiptDetails(filter: $filter, owner: $owner) {
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
export const onCreateJobWorkReceipt = /* GraphQL */ `
  subscription OnCreateJobWorkReceipt(
    $filter: ModelSubscriptionJobWorkReceiptFilterInput
    $owner: String
  ) {
    onCreateJobWorkReceipt(filter: $filter, owner: $owner) {
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
export const onCreateMachineMaster = /* GraphQL */ `
  subscription OnCreateMachineMaster(
    $filter: ModelSubscriptionMachineMasterFilterInput
    $owner: String
  ) {
    onCreateMachineMaster(filter: $filter, owner: $owner) {
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
export const onCreateOperationDecription = /* GraphQL */ `
  subscription OnCreateOperationDecription(
    $filter: ModelSubscriptionOperationDecriptionFilterInput
    $owner: String
  ) {
    onCreateOperationDecription(filter: $filter, owner: $owner) {
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
export const onCreateOperationMaster = /* GraphQL */ `
  subscription OnCreateOperationMaster(
    $filter: ModelSubscriptionOperationMasterFilterInput
    $owner: String
  ) {
    onCreateOperationMaster(filter: $filter, owner: $owner) {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onCreatePayment(filter: $filter, owner: $owner) {
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
export const onCreatePaymentDetails = /* GraphQL */ `
  subscription OnCreatePaymentDetails(
    $filter: ModelSubscriptionPaymentDetailsFilterInput
    $owner: String
  ) {
    onCreatePaymentDetails(filter: $filter, owner: $owner) {
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
export const onCreateRejectionReport = /* GraphQL */ `
  subscription OnCreateRejectionReport(
    $filter: ModelSubscriptionRejectionReportFilterInput
    $owner: String
  ) {
    onCreateRejectionReport(filter: $filter, owner: $owner) {
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
export const onCreateRejectionReportDetails = /* GraphQL */ `
  subscription OnCreateRejectionReportDetails(
    $filter: ModelSubscriptionRejectionReportDetailsFilterInput
    $owner: String
  ) {
    onCreateRejectionReportDetails(filter: $filter, owner: $owner) {
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
export const onCreateRoleToRouteMapping = /* GraphQL */ `
  subscription OnCreateRoleToRouteMapping(
    $filter: ModelSubscriptionRoleToRouteMappingFilterInput
  ) {
    onCreateRoleToRouteMapping(filter: $filter) {
      Allowed_Routes
      Allowed_Subroutes_Masters
      Allowed_Subroutes_Transactions
      Role
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const onCreateSalaryDetails = /* GraphQL */ `
  subscription OnCreateSalaryDetails(
    $filter: ModelSubscriptionSalaryDetailsFilterInput
    $owner: String
  ) {
    onCreateSalaryDetails(filter: $filter, owner: $owner) {
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
export const onCreateSaleChallan = /* GraphQL */ `
  subscription OnCreateSaleChallan(
    $filter: ModelSubscriptionSaleChallanFilterInput
    $owner: String
  ) {
    onCreateSaleChallan(filter: $filter, owner: $owner) {
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
export const onCreateSaleChallanDetails = /* GraphQL */ `
  subscription OnCreateSaleChallanDetails(
    $filter: ModelSubscriptionSaleChallanDetailsFilterInput
    $owner: String
  ) {
    onCreateSaleChallanDetails(filter: $filter, owner: $owner) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onCreateUserDetail = /* GraphQL */ `
  subscription OnCreateUserDetail(
    $filter: ModelSubscriptionUserDetailFilterInput
    $owner: String
  ) {
    onCreateUserDetail(filter: $filter, owner: $owner) {
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
export const onCreateWorkOrder = /* GraphQL */ `
  subscription OnCreateWorkOrder(
    $filter: ModelSubscriptionWorkOrderFilterInput
    $owner: String
  ) {
    onCreateWorkOrder(filter: $filter, owner: $owner) {
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
export const onCreateWorkOrderDetails = /* GraphQL */ `
  subscription OnCreateWorkOrderDetails(
    $filter: ModelSubscriptionWorkOrderDetailsFilterInput
    $owner: String
  ) {
    onCreateWorkOrderDetails(filter: $filter, owner: $owner) {
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
export const onCreateWorkOrderOpeationwiseSpliup = /* GraphQL */ `
  subscription OnCreateWorkOrderOpeationwiseSpliup(
    $filter: ModelSubscriptionWorkOrderOpeationwiseSpliupFilterInput
    $owner: String
  ) {
    onCreateWorkOrderOpeationwiseSpliup(filter: $filter, owner: $owner) {
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
export const onCreateWorkstationMaster = /* GraphQL */ `
  subscription OnCreateWorkstationMaster(
    $filter: ModelSubscriptionWorkstationMasterFilterInput
    $owner: String
  ) {
    onCreateWorkstationMaster(filter: $filter, owner: $owner) {
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
export const onDeleteAccountMasterForm = /* GraphQL */ `
  subscription OnDeleteAccountMasterForm(
    $filter: ModelSubscriptionAccountMasterFormFilterInput
    $owner: String
  ) {
    onDeleteAccountMasterForm(filter: $filter, owner: $owner) {
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
export const onDeleteBankDetails = /* GraphQL */ `
  subscription OnDeleteBankDetails(
    $filter: ModelSubscriptionBankDetailsFilterInput
    $owner: String
  ) {
    onDeleteBankDetails(filter: $filter, owner: $owner) {
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
export const onDeleteBillOfProces = /* GraphQL */ `
  subscription OnDeleteBillOfProces(
    $filter: ModelSubscriptionBillOfProcesFilterInput
    $owner: String
  ) {
    onDeleteBillOfProces(filter: $filter, owner: $owner) {
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
export const onDeleteCompanyInformation = /* GraphQL */ `
  subscription OnDeleteCompanyInformation(
    $filter: ModelSubscriptionCompanyInformationFilterInput
    $owner: String
  ) {
    onDeleteCompanyInformation(filter: $filter, owner: $owner) {
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
export const onDeleteDailyWorkReport = /* GraphQL */ `
  subscription OnDeleteDailyWorkReport(
    $filter: ModelSubscriptionDailyWorkReportFilterInput
    $owner: String
  ) {
    onDeleteDailyWorkReport(filter: $filter, owner: $owner) {
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
export const onDeleteEarningDetails = /* GraphQL */ `
  subscription OnDeleteEarningDetails(
    $filter: ModelSubscriptionEarningDetailsFilterInput
    $owner: String
  ) {
    onDeleteEarningDetails(filter: $filter, owner: $owner) {
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
export const onDeleteEmployeeMaster = /* GraphQL */ `
  subscription OnDeleteEmployeeMaster(
    $filter: ModelSubscriptionEmployeeMasterFilterInput
    $owner: String
  ) {
    onDeleteEmployeeMaster(filter: $filter, owner: $owner) {
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
export const onDeleteGeneralWorkDetails = /* GraphQL */ `
  subscription OnDeleteGeneralWorkDetails(
    $filter: ModelSubscriptionGeneralWorkDetailsFilterInput
    $owner: String
  ) {
    onDeleteGeneralWorkDetails(filter: $filter, owner: $owner) {
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
export const onDeleteGeneralWorkList = /* GraphQL */ `
  subscription OnDeleteGeneralWorkList(
    $filter: ModelSubscriptionGeneralWorkListFilterInput
    $owner: String
  ) {
    onDeleteGeneralWorkList(filter: $filter, owner: $owner) {
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
export const onDeleteItemMaster = /* GraphQL */ `
  subscription OnDeleteItemMaster(
    $filter: ModelSubscriptionItemMasterFilterInput
    $owner: String
  ) {
    onDeleteItemMaster(filter: $filter, owner: $owner) {
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
export const onDeleteJobWorkOrder = /* GraphQL */ `
  subscription OnDeleteJobWorkOrder(
    $filter: ModelSubscriptionJobWorkOrderFilterInput
    $owner: String
  ) {
    onDeleteJobWorkOrder(filter: $filter, owner: $owner) {
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
export const onDeleteJobWorkOrderDetails = /* GraphQL */ `
  subscription OnDeleteJobWorkOrderDetails(
    $filter: ModelSubscriptionJobWorkOrderDetailsFilterInput
    $owner: String
  ) {
    onDeleteJobWorkOrderDetails(filter: $filter, owner: $owner) {
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
export const onDeleteJobWorkOrderOperationDetails = /* GraphQL */ `
  subscription OnDeleteJobWorkOrderOperationDetails(
    $filter: ModelSubscriptionJobWorkOrderOperationDetailsFilterInput
    $owner: String
  ) {
    onDeleteJobWorkOrderOperationDetails(filter: $filter, owner: $owner) {
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
export const onDeleteJobWorkRecceiptDetails = /* GraphQL */ `
  subscription OnDeleteJobWorkRecceiptDetails(
    $filter: ModelSubscriptionJobWorkRecceiptDetailsFilterInput
    $owner: String
  ) {
    onDeleteJobWorkRecceiptDetails(filter: $filter, owner: $owner) {
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
export const onDeleteJobWorkReceipt = /* GraphQL */ `
  subscription OnDeleteJobWorkReceipt(
    $filter: ModelSubscriptionJobWorkReceiptFilterInput
    $owner: String
  ) {
    onDeleteJobWorkReceipt(filter: $filter, owner: $owner) {
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
export const onDeleteMachineMaster = /* GraphQL */ `
  subscription OnDeleteMachineMaster(
    $filter: ModelSubscriptionMachineMasterFilterInput
    $owner: String
  ) {
    onDeleteMachineMaster(filter: $filter, owner: $owner) {
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
export const onDeleteOperationDecription = /* GraphQL */ `
  subscription OnDeleteOperationDecription(
    $filter: ModelSubscriptionOperationDecriptionFilterInput
    $owner: String
  ) {
    onDeleteOperationDecription(filter: $filter, owner: $owner) {
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
export const onDeleteOperationMaster = /* GraphQL */ `
  subscription OnDeleteOperationMaster(
    $filter: ModelSubscriptionOperationMasterFilterInput
    $owner: String
  ) {
    onDeleteOperationMaster(filter: $filter, owner: $owner) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onDeletePayment(filter: $filter, owner: $owner) {
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
export const onDeletePaymentDetails = /* GraphQL */ `
  subscription OnDeletePaymentDetails(
    $filter: ModelSubscriptionPaymentDetailsFilterInput
    $owner: String
  ) {
    onDeletePaymentDetails(filter: $filter, owner: $owner) {
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
export const onDeleteRejectionReport = /* GraphQL */ `
  subscription OnDeleteRejectionReport(
    $filter: ModelSubscriptionRejectionReportFilterInput
    $owner: String
  ) {
    onDeleteRejectionReport(filter: $filter, owner: $owner) {
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
export const onDeleteRejectionReportDetails = /* GraphQL */ `
  subscription OnDeleteRejectionReportDetails(
    $filter: ModelSubscriptionRejectionReportDetailsFilterInput
    $owner: String
  ) {
    onDeleteRejectionReportDetails(filter: $filter, owner: $owner) {
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
export const onDeleteRoleToRouteMapping = /* GraphQL */ `
  subscription OnDeleteRoleToRouteMapping(
    $filter: ModelSubscriptionRoleToRouteMappingFilterInput
  ) {
    onDeleteRoleToRouteMapping(filter: $filter) {
      Allowed_Routes
      Allowed_Subroutes_Masters
      Allowed_Subroutes_Transactions
      Role
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSalaryDetails = /* GraphQL */ `
  subscription OnDeleteSalaryDetails(
    $filter: ModelSubscriptionSalaryDetailsFilterInput
    $owner: String
  ) {
    onDeleteSalaryDetails(filter: $filter, owner: $owner) {
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
export const onDeleteSaleChallan = /* GraphQL */ `
  subscription OnDeleteSaleChallan(
    $filter: ModelSubscriptionSaleChallanFilterInput
    $owner: String
  ) {
    onDeleteSaleChallan(filter: $filter, owner: $owner) {
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
export const onDeleteSaleChallanDetails = /* GraphQL */ `
  subscription OnDeleteSaleChallanDetails(
    $filter: ModelSubscriptionSaleChallanDetailsFilterInput
    $owner: String
  ) {
    onDeleteSaleChallanDetails(filter: $filter, owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserDetail = /* GraphQL */ `
  subscription OnDeleteUserDetail(
    $filter: ModelSubscriptionUserDetailFilterInput
    $owner: String
  ) {
    onDeleteUserDetail(filter: $filter, owner: $owner) {
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
export const onDeleteWorkOrder = /* GraphQL */ `
  subscription OnDeleteWorkOrder(
    $filter: ModelSubscriptionWorkOrderFilterInput
    $owner: String
  ) {
    onDeleteWorkOrder(filter: $filter, owner: $owner) {
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
export const onDeleteWorkOrderDetails = /* GraphQL */ `
  subscription OnDeleteWorkOrderDetails(
    $filter: ModelSubscriptionWorkOrderDetailsFilterInput
    $owner: String
  ) {
    onDeleteWorkOrderDetails(filter: $filter, owner: $owner) {
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
export const onDeleteWorkOrderOpeationwiseSpliup = /* GraphQL */ `
  subscription OnDeleteWorkOrderOpeationwiseSpliup(
    $filter: ModelSubscriptionWorkOrderOpeationwiseSpliupFilterInput
    $owner: String
  ) {
    onDeleteWorkOrderOpeationwiseSpliup(filter: $filter, owner: $owner) {
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
export const onDeleteWorkstationMaster = /* GraphQL */ `
  subscription OnDeleteWorkstationMaster(
    $filter: ModelSubscriptionWorkstationMasterFilterInput
    $owner: String
  ) {
    onDeleteWorkstationMaster(filter: $filter, owner: $owner) {
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
export const onUpdateAccountMasterForm = /* GraphQL */ `
  subscription OnUpdateAccountMasterForm(
    $filter: ModelSubscriptionAccountMasterFormFilterInput
    $owner: String
  ) {
    onUpdateAccountMasterForm(filter: $filter, owner: $owner) {
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
export const onUpdateBankDetails = /* GraphQL */ `
  subscription OnUpdateBankDetails(
    $filter: ModelSubscriptionBankDetailsFilterInput
    $owner: String
  ) {
    onUpdateBankDetails(filter: $filter, owner: $owner) {
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
export const onUpdateBillOfProces = /* GraphQL */ `
  subscription OnUpdateBillOfProces(
    $filter: ModelSubscriptionBillOfProcesFilterInput
    $owner: String
  ) {
    onUpdateBillOfProces(filter: $filter, owner: $owner) {
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
export const onUpdateCompanyInformation = /* GraphQL */ `
  subscription OnUpdateCompanyInformation(
    $filter: ModelSubscriptionCompanyInformationFilterInput
    $owner: String
  ) {
    onUpdateCompanyInformation(filter: $filter, owner: $owner) {
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
export const onUpdateDailyWorkReport = /* GraphQL */ `
  subscription OnUpdateDailyWorkReport(
    $filter: ModelSubscriptionDailyWorkReportFilterInput
    $owner: String
  ) {
    onUpdateDailyWorkReport(filter: $filter, owner: $owner) {
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
export const onUpdateEarningDetails = /* GraphQL */ `
  subscription OnUpdateEarningDetails(
    $filter: ModelSubscriptionEarningDetailsFilterInput
    $owner: String
  ) {
    onUpdateEarningDetails(filter: $filter, owner: $owner) {
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
export const onUpdateEmployeeMaster = /* GraphQL */ `
  subscription OnUpdateEmployeeMaster(
    $filter: ModelSubscriptionEmployeeMasterFilterInput
    $owner: String
  ) {
    onUpdateEmployeeMaster(filter: $filter, owner: $owner) {
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
export const onUpdateGeneralWorkDetails = /* GraphQL */ `
  subscription OnUpdateGeneralWorkDetails(
    $filter: ModelSubscriptionGeneralWorkDetailsFilterInput
    $owner: String
  ) {
    onUpdateGeneralWorkDetails(filter: $filter, owner: $owner) {
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
export const onUpdateGeneralWorkList = /* GraphQL */ `
  subscription OnUpdateGeneralWorkList(
    $filter: ModelSubscriptionGeneralWorkListFilterInput
    $owner: String
  ) {
    onUpdateGeneralWorkList(filter: $filter, owner: $owner) {
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
export const onUpdateItemMaster = /* GraphQL */ `
  subscription OnUpdateItemMaster(
    $filter: ModelSubscriptionItemMasterFilterInput
    $owner: String
  ) {
    onUpdateItemMaster(filter: $filter, owner: $owner) {
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
export const onUpdateJobWorkOrder = /* GraphQL */ `
  subscription OnUpdateJobWorkOrder(
    $filter: ModelSubscriptionJobWorkOrderFilterInput
    $owner: String
  ) {
    onUpdateJobWorkOrder(filter: $filter, owner: $owner) {
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
export const onUpdateJobWorkOrderDetails = /* GraphQL */ `
  subscription OnUpdateJobWorkOrderDetails(
    $filter: ModelSubscriptionJobWorkOrderDetailsFilterInput
    $owner: String
  ) {
    onUpdateJobWorkOrderDetails(filter: $filter, owner: $owner) {
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
export const onUpdateJobWorkOrderOperationDetails = /* GraphQL */ `
  subscription OnUpdateJobWorkOrderOperationDetails(
    $filter: ModelSubscriptionJobWorkOrderOperationDetailsFilterInput
    $owner: String
  ) {
    onUpdateJobWorkOrderOperationDetails(filter: $filter, owner: $owner) {
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
export const onUpdateJobWorkRecceiptDetails = /* GraphQL */ `
  subscription OnUpdateJobWorkRecceiptDetails(
    $filter: ModelSubscriptionJobWorkRecceiptDetailsFilterInput
    $owner: String
  ) {
    onUpdateJobWorkRecceiptDetails(filter: $filter, owner: $owner) {
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
export const onUpdateJobWorkReceipt = /* GraphQL */ `
  subscription OnUpdateJobWorkReceipt(
    $filter: ModelSubscriptionJobWorkReceiptFilterInput
    $owner: String
  ) {
    onUpdateJobWorkReceipt(filter: $filter, owner: $owner) {
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
export const onUpdateMachineMaster = /* GraphQL */ `
  subscription OnUpdateMachineMaster(
    $filter: ModelSubscriptionMachineMasterFilterInput
    $owner: String
  ) {
    onUpdateMachineMaster(filter: $filter, owner: $owner) {
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
export const onUpdateOperationDecription = /* GraphQL */ `
  subscription OnUpdateOperationDecription(
    $filter: ModelSubscriptionOperationDecriptionFilterInput
    $owner: String
  ) {
    onUpdateOperationDecription(filter: $filter, owner: $owner) {
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
export const onUpdateOperationMaster = /* GraphQL */ `
  subscription OnUpdateOperationMaster(
    $filter: ModelSubscriptionOperationMasterFilterInput
    $owner: String
  ) {
    onUpdateOperationMaster(filter: $filter, owner: $owner) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onUpdatePayment(filter: $filter, owner: $owner) {
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
export const onUpdatePaymentDetails = /* GraphQL */ `
  subscription OnUpdatePaymentDetails(
    $filter: ModelSubscriptionPaymentDetailsFilterInput
    $owner: String
  ) {
    onUpdatePaymentDetails(filter: $filter, owner: $owner) {
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
export const onUpdateRejectionReport = /* GraphQL */ `
  subscription OnUpdateRejectionReport(
    $filter: ModelSubscriptionRejectionReportFilterInput
    $owner: String
  ) {
    onUpdateRejectionReport(filter: $filter, owner: $owner) {
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
export const onUpdateRejectionReportDetails = /* GraphQL */ `
  subscription OnUpdateRejectionReportDetails(
    $filter: ModelSubscriptionRejectionReportDetailsFilterInput
    $owner: String
  ) {
    onUpdateRejectionReportDetails(filter: $filter, owner: $owner) {
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
export const onUpdateRoleToRouteMapping = /* GraphQL */ `
  subscription OnUpdateRoleToRouteMapping(
    $filter: ModelSubscriptionRoleToRouteMappingFilterInput
  ) {
    onUpdateRoleToRouteMapping(filter: $filter) {
      Allowed_Routes
      Allowed_Subroutes_Masters
      Allowed_Subroutes_Transactions
      Role
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSalaryDetails = /* GraphQL */ `
  subscription OnUpdateSalaryDetails(
    $filter: ModelSubscriptionSalaryDetailsFilterInput
    $owner: String
  ) {
    onUpdateSalaryDetails(filter: $filter, owner: $owner) {
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
export const onUpdateSaleChallan = /* GraphQL */ `
  subscription OnUpdateSaleChallan(
    $filter: ModelSubscriptionSaleChallanFilterInput
    $owner: String
  ) {
    onUpdateSaleChallan(filter: $filter, owner: $owner) {
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
export const onUpdateSaleChallanDetails = /* GraphQL */ `
  subscription OnUpdateSaleChallanDetails(
    $filter: ModelSubscriptionSaleChallanDetailsFilterInput
    $owner: String
  ) {
    onUpdateSaleChallanDetails(filter: $filter, owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserDetail = /* GraphQL */ `
  subscription OnUpdateUserDetail(
    $filter: ModelSubscriptionUserDetailFilterInput
    $owner: String
  ) {
    onUpdateUserDetail(filter: $filter, owner: $owner) {
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
export const onUpdateWorkOrder = /* GraphQL */ `
  subscription OnUpdateWorkOrder(
    $filter: ModelSubscriptionWorkOrderFilterInput
    $owner: String
  ) {
    onUpdateWorkOrder(filter: $filter, owner: $owner) {
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
export const onUpdateWorkOrderDetails = /* GraphQL */ `
  subscription OnUpdateWorkOrderDetails(
    $filter: ModelSubscriptionWorkOrderDetailsFilterInput
    $owner: String
  ) {
    onUpdateWorkOrderDetails(filter: $filter, owner: $owner) {
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
export const onUpdateWorkOrderOpeationwiseSpliup = /* GraphQL */ `
  subscription OnUpdateWorkOrderOpeationwiseSpliup(
    $filter: ModelSubscriptionWorkOrderOpeationwiseSpliupFilterInput
    $owner: String
  ) {
    onUpdateWorkOrderOpeationwiseSpliup(filter: $filter, owner: $owner) {
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
export const onUpdateWorkstationMaster = /* GraphQL */ `
  subscription OnUpdateWorkstationMaster(
    $filter: ModelSubscriptionWorkstationMasterFilterInput
    $owner: String
  ) {
    onUpdateWorkstationMaster(filter: $filter, owner: $owner) {
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
