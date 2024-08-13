/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccountMasterForm = /* GraphQL */ `
  query GetAccountMasterForm($id: ID!) {
    getAccountMasterForm(id: $id) {
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
export const getBankDetails = /* GraphQL */ `
  query GetBankDetails($id: ID!) {
    getBankDetails(id: $id) {
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
export const getBillOfProces = /* GraphQL */ `
  query GetBillOfProces($id: ID!) {
    getBillOfProces(id: $id) {
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
export const getCompanyInformation = /* GraphQL */ `
  query GetCompanyInformation($id: ID!) {
    getCompanyInformation(id: $id) {
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
export const getDailyWorkReport = /* GraphQL */ `
  query GetDailyWorkReport($id: ID!) {
    getDailyWorkReport(id: $id) {
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
export const getEarningDetails = /* GraphQL */ `
  query GetEarningDetails($id: ID!) {
    getEarningDetails(id: $id) {
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
export const getEmployeeMaster = /* GraphQL */ `
  query GetEmployeeMaster($id: ID!) {
    getEmployeeMaster(id: $id) {
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
export const getGeneralWorkDetails = /* GraphQL */ `
  query GetGeneralWorkDetails($id: ID!) {
    getGeneralWorkDetails(id: $id) {
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
export const getGeneralWorkList = /* GraphQL */ `
  query GetGeneralWorkList($id: ID!) {
    getGeneralWorkList(id: $id) {
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
export const getItemMaster = /* GraphQL */ `
  query GetItemMaster($id: ID!) {
    getItemMaster(id: $id) {
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
export const getJobWorkOrder = /* GraphQL */ `
  query GetJobWorkOrder($id: ID!) {
    getJobWorkOrder(id: $id) {
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
export const getJobWorkOrderDetails = /* GraphQL */ `
  query GetJobWorkOrderDetails($id: ID!) {
    getJobWorkOrderDetails(id: $id) {
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
export const getJobWorkOrderOperationDetails = /* GraphQL */ `
  query GetJobWorkOrderOperationDetails($id: ID!) {
    getJobWorkOrderOperationDetails(id: $id) {
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
export const getJobWorkRecceiptDetails = /* GraphQL */ `
  query GetJobWorkRecceiptDetails($id: ID!) {
    getJobWorkRecceiptDetails(id: $id) {
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
export const getJobWorkReceipt = /* GraphQL */ `
  query GetJobWorkReceipt($id: ID!) {
    getJobWorkReceipt(id: $id) {
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
export const getMachineMaster = /* GraphQL */ `
  query GetMachineMaster($id: ID!) {
    getMachineMaster(id: $id) {
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
export const getOperationDecription = /* GraphQL */ `
  query GetOperationDecription($id: ID!) {
    getOperationDecription(id: $id) {
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
export const getOperationMaster = /* GraphQL */ `
  query GetOperationMaster($id: ID!) {
    getOperationMaster(id: $id) {
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
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const getPaymentDetails = /* GraphQL */ `
  query GetPaymentDetails($id: ID!) {
    getPaymentDetails(id: $id) {
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
export const getRejectionReport = /* GraphQL */ `
  query GetRejectionReport($id: ID!) {
    getRejectionReport(id: $id) {
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
export const getRejectionReportDetails = /* GraphQL */ `
  query GetRejectionReportDetails($id: ID!) {
    getRejectionReportDetails(id: $id) {
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
export const getSalaryDetails = /* GraphQL */ `
  query GetSalaryDetails($id: ID!) {
    getSalaryDetails(id: $id) {
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
export const getSaleChallan = /* GraphQL */ `
  query GetSaleChallan($id: ID!) {
    getSaleChallan(id: $id) {
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
export const getSaleChallanDetails = /* GraphQL */ `
  query GetSaleChallanDetails($id: ID!) {
    getSaleChallanDetails(id: $id) {
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
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const getUserDetail = /* GraphQL */ `
  query GetUserDetail($id: ID!) {
    getUserDetail(id: $id) {
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
export const getWorkOrder = /* GraphQL */ `
  query GetWorkOrder($id: ID!) {
    getWorkOrder(id: $id) {
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
export const getWorkOrderDetails = /* GraphQL */ `
  query GetWorkOrderDetails($id: ID!) {
    getWorkOrderDetails(id: $id) {
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
export const getWorkOrderOpeationwiseSpliup = /* GraphQL */ `
  query GetWorkOrderOpeationwiseSpliup($id: ID!) {
    getWorkOrderOpeationwiseSpliup(id: $id) {
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
export const getWorkstationMaster = /* GraphQL */ `
  query GetWorkstationMaster($id: ID!) {
    getWorkstationMaster(id: $id) {
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
export const listAccountMasterForms = /* GraphQL */ `
  query ListAccountMasterForms(
    $filter: ModelAccountMasterFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountMasterForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listBankDetails = /* GraphQL */ `
  query ListBankDetails(
    $filter: ModelBankDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBankDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listBillOfProces = /* GraphQL */ `
  query ListBillOfProces(
    $filter: ModelBillOfProcesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillOfProces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listCompanyInformations = /* GraphQL */ `
  query ListCompanyInformations(
    $filter: ModelCompanyInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listDailyWorkReports = /* GraphQL */ `
  query ListDailyWorkReports(
    $filter: ModelDailyWorkReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDailyWorkReports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listEarningDetails = /* GraphQL */ `
  query ListEarningDetails(
    $filter: ModelEarningDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEarningDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listEmployeeMasters = /* GraphQL */ `
  query ListEmployeeMasters(
    $filter: ModelEmployeeMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listGeneralWorkDetails = /* GraphQL */ `
  query ListGeneralWorkDetails(
    $filter: ModelGeneralWorkDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeneralWorkDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listGeneralWorkLists = /* GraphQL */ `
  query ListGeneralWorkLists(
    $filter: ModelGeneralWorkListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeneralWorkLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listItemMasters = /* GraphQL */ `
  query ListItemMasters(
    $filter: ModelItemMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listJobWorkOrderDetails = /* GraphQL */ `
  query ListJobWorkOrderDetails(
    $filter: ModelJobWorkOrderDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobWorkOrderDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listJobWorkOrderOperationDetails = /* GraphQL */ `
  query ListJobWorkOrderOperationDetails(
    $filter: ModelJobWorkOrderOperationDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobWorkOrderOperationDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listJobWorkOrders = /* GraphQL */ `
  query ListJobWorkOrders(
    $filter: ModelJobWorkOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobWorkOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listJobWorkRecceiptDetails = /* GraphQL */ `
  query ListJobWorkRecceiptDetails(
    $filter: ModelJobWorkRecceiptDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobWorkRecceiptDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listJobWorkReceipts = /* GraphQL */ `
  query ListJobWorkReceipts(
    $filter: ModelJobWorkReceiptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobWorkReceipts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listMachineMasters = /* GraphQL */ `
  query ListMachineMasters(
    $filter: ModelMachineMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMachineMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listOperationDecriptions = /* GraphQL */ `
  query ListOperationDecriptions(
    $filter: ModelOperationDecriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOperationDecriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listOperationMasters = /* GraphQL */ `
  query ListOperationMasters(
    $filter: ModelOperationMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOperationMasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listPaymentDetails = /* GraphQL */ `
  query ListPaymentDetails(
    $filter: ModelPaymentDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listRejectionReportDetails = /* GraphQL */ `
  query ListRejectionReportDetails(
    $filter: ModelRejectionReportDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRejectionReportDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listRejectionReports = /* GraphQL */ `
  query ListRejectionReports(
    $filter: ModelRejectionReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRejectionReports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listSalaryDetails = /* GraphQL */ `
  query ListSalaryDetails(
    $filter: ModelSalaryDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalaryDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listSaleChallanDetails = /* GraphQL */ `
  query ListSaleChallanDetails(
    $filter: ModelSaleChallanDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSaleChallanDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listSaleChallans = /* GraphQL */ `
  query ListSaleChallans(
    $filter: ModelSaleChallanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSaleChallans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listUserDetails = /* GraphQL */ `
  query ListUserDetails(
    $filter: ModelUserDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listWorkOrderDetails = /* GraphQL */ `
  query ListWorkOrderDetails(
    $filter: ModelWorkOrderDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkOrderDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listWorkOrderOpeationwiseSpliups = /* GraphQL */ `
  query ListWorkOrderOpeationwiseSpliups(
    $filter: ModelWorkOrderOpeationwiseSpliupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkOrderOpeationwiseSpliups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listWorkOrders = /* GraphQL */ `
  query ListWorkOrders(
    $filter: ModelWorkOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listWorkstationMasters = /* GraphQL */ `
  query ListWorkstationMasters(
    $filter: ModelWorkstationMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkstationMasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
