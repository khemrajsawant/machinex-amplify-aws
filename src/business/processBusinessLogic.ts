import {
  withCostComputation,
  defaultReurn,
  companyInformation,
  employeeMaster,
  salaryDetails,
  userDetails,
  bankDetails,
  workOrderDetails,
  workOrder,
  jobWorkOrder,
  jobWorkReceipt,
  saleChallan,
  saleChallanDetails,
  payment,
  paymentDetails,
  rejection,
  jobWorkOrderDetails,
  jobWorkReceiptDetails,
  earningDetails,
  generalWorkDetails,
  rejectionReportDetails
} from "./ItemMasterModel";
// @ts-ignore
export const processData = (formName, input:any) => {
  const type = formName;
// @ts-ignore
  switch (type) {
    case "BILL_OF_PROCESS":
      return withCostComputation(
        input.tableFormData[type],
        input.data,
        input.id,
        input.masterData,
        input.tableFormData["WORKSTATION_MASTER"],
        input.tableFormData["BILL_OF_PROCESS"].length
      );

    case "COMPANY_INFORMATION":
      return companyInformation(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster
      );

    case "EMPLOYEE_MASTER":
      return employeeMaster(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster
      );

    case "SALARY_DETAILS":
      return salaryDetails(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type]
      );

    case "USER_DETAILS":
      return userDetails(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type]
      );

    case "BANK_DETAILS":
      return bankDetails(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type]
      );

    case "WORK_ORDER_DETAILS":
      return workOrderDetails(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type],
        input.tableFormData["WORK_ORDER_DETAILS"].length
      );
// @ts-ignore
    case "WORK_ORDER":
      return workOrder(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type]
      );

    case "JOB_WORK_ORDER":
      return jobWorkOrder(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type]
      );

    case "JOB_WORK_ORDER_DETAILS":
      return jobWorkOrderDetails(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type],
        input.tableFormData["JOB_WORK_ORDER_DETAILS"].length
      );

    case "JOB_WORK_RECEIPT":
      return jobWorkReceipt(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type]
      );

    case "JOB_WORK_RECEIPT_DETAILS":
      return jobWorkReceiptDetails(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type],
        input.tableFormData["JOB_WORK_RECEIPT_DETAILS"].length
      );

    case "SALE_CHALLAN":
      return saleChallan(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type]
      );

    case "SALE_CHALLAN_DETAILS":
      return saleChallanDetails(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type],
        input.tableFormData["SALE_CHALLAN_DETAILS"].length
      );

    case "PAYMENT":
      return payment(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type]
      );

      case "PAYMENT_DETAILS":
        return paymentDetails(
          input.data,
          input.id,
          input.primary_key_name,
          input.masterData,
          input.isMaster,
          input.tableFormData[type],
          input.tableFormData["PAYMENT_DETAILS"].length
        );

    case "REJECTION_REPORT":
      return rejection(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type]
      );

    case "REJECTION_REPORT_DETAILS":
      return rejectionReportDetails(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type],
        input.tableFormData["REJECTION_REPORT_DETAILS"].length
      );

    case "EARNING_DETAILS":
      return earningDetails(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type]
      );

    case "GENERAL_WORK_DETAILS":
      return generalWorkDetails(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster,
        input.tableFormData[type],
        input.tableFormData["GENERAL_WORK_DETAILS"].length
      );

    default:
      return defaultReurn(
        input.data,
        input.id,
        input.primary_key_name,
        input.masterData,
        input.isMaster
      );
  }
};
