import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Master from "../pages/Master";
import Transactions from "../pages/Transactions";
import Reports from "../pages/Reports";

import { useSelector } from "react-redux";
import WorkstationMasterForm from "../containers/ListPages/WorkstationMasterForm";
import ItemMasterInputForm from "../containers/ListPages/ItemMasterInputForm";
import ItemMasterInputFormSelectedItem from "../containers/SingleItem/ItemMasterInputFormSelectedItem";
import { useDispatch } from "react-redux";
import CompanyInfo from "../containers/ListPages/CompanyInfo";
import EmployeeMasterForm from "../containers/ListPages/EmployeeMasterForm";
import MachineMasterForm from "../containers/ListPages/MachineMasterForm";
import PaymentForm from "../containers/ListPages/PaymentForm";
import WorkOrderForm from "../containers/ListPages/WorkOrderForm";
import JobWorkOrder from "../containers/ListPages/JobWorkOrder";
import JobWorkReceipt from "../containers/ListPages/JobWorkReceipt";
import SalesChallan from "../containers/ListPages/SalesChallan";
import RejectionForm from "../containers/ListPages/RejectionForm";
import DailyWorkReportForm from "../containers/ListPages/DailyWorkReportForm";
import OpeningInfo from "../containers/ListPages/OpeningInfo";
import AccountMaster from "../containers/ListPages/AccountMaster";
import OperationMaster from "../containers/SingleItem/OperationMaster";
import GeneralWorkMaster from "../containers/ListPages/GeneralWorkMaster";
import PaymentModeForm from "../containers/ListPages/PaymentModeForm";
import ComingSoon from "../containers/ListPages/ComingSoon";

import EmployeeMasterFormSingleItem from '../containers/SingleItem/EmployeeMasterFormSingleItem';
import DailyWorkReportFormSingleItem from '../containers/SingleItem/DailyWorkReportFormSingleItem';
import WorkOrderFormSingleItem from '../containers/SingleItem/WorkOrderFormSingleItem';
import JobWorkOrderSingleItem from '../containers/SingleItem/JobWorkOrderSingleItem';
import JobWorkReceiptSingleItem from '../containers/SingleItem/JobWorkReceiptSingleItem';
import SalesChallanSingleItem from '../containers/SingleItem/SalesChallanSingleItem';
import PaymentFormSingleItem from '../containers/SingleItem/PaymentFormSingleItem';
import RejectionFormSingleItem from '../containers/SingleItem/RejectionFormSingleItem';

export default function RoutesAllComponent() {
  return (
    <Routes>
    {/* Main_Routes          */}

    <Route path="/" element={<Home />} />
    <Route path="/master" element={<Master  />} />
    <Route path="/transactions" element={<Transactions  />} />
    <Route path="/reports" element={<Reports  />} />

    {/* Company */}

    <Route
      path="/Master/companyinfo"
      element={<CompanyInfo routetext="companyinfo" isMaster={true} />}
    />
    <Route
      path="/Master/openinginfo"
      element={<OpeningInfo routetext="openinginfo"  />}
    />

    {/* Masters */}

    <Route
      path="/master/employeemaster"
      element={<EmployeeMasterForm routetext="employeemaster" isMaster={true} />}
    />
    <Route
      path="/master/employeemaster/item"
      element={<EmployeeMasterFormSingleItem routetext="employeemaster" isMaster={false} />}
    />
    <Route
      path="/master/accountmaster"
      element={<AccountMaster routetext="accountmaster" isMaster={true} />}
    />
    <Route
      path="/master/itemmaster"
      element={<ItemMasterInputForm routetext="itemmaster" isMaster={true} />}
    />
    <Route
      path="/master/itemmaster/item"
      element={<ItemMasterInputFormSelectedItem routetext="itemmaster" isMaster={false} />}
    />
    <Route
      path="/master/workstationmaster"
      element={<WorkstationMasterForm routetext="workstationmaster" isMaster={true} />}
    />
    <Route
      path="/master/workstationmaster/item"
      element={<OperationMaster routetext="operationmaster" isMaster={false} />}
    />
    <Route
      path="/master/machinemaster"
      element={<MachineMasterForm routetext="machinemaster" isMaster={true} />}
    />
    <Route
      path="/master/genworklist"
      element={<GeneralWorkMaster routetext="genworklist" isMaster={true} />}
    />
    <Route
      path="/master/paymentmode"
      element={<PaymentModeForm routetext="paymentmode" isMaster={true} />}
    />

    {/* Transactions */}

    <Route
      path="/transactions/workorder"
      element={<WorkOrderForm routetext="workorder" isMaster={true} />}
    />
        <Route
      path="/transactions/workorder/item"
      element={<WorkOrderFormSingleItem routetext="workorder" isMaster={false} />}
    />
    <Route
      path="/transactions/dailyreport"
      element={
        <DailyWorkReportForm
          earnings="earnings"
          generalwork="generalwork"
          isMaster={true}
        />
      }
    />
    <Route
      path="/transactions/dailyreport/item"
      element={<DailyWorkReportFormSingleItem routetext="dailyreport" isMaster={false} />}
    />
    <Route
      path="/transactions/jobworkorder"
      element={<JobWorkOrder routetext="jobworkorder" isMaster={true} />}
    />
            <Route
      path="/transactions/jobworkorder/item"
      element={<JobWorkOrderSingleItem routetext="jobworkorder" isMaster={false} />}
    />
    <Route
      path="/transactions/jobworkreceipt"
      element={<JobWorkReceipt routetext="jobworkreceipt" isMaster={true} />}
    />

    <Route
      path="/transactions/jobworkreceipt/item"
      element={<JobWorkReceiptSingleItem routetext="jobworkreceipt" isMaster={false} />}
    />

    <Route
      path="/transactions/salechallan"
      element={<SalesChallan routetext="salechallan" isMaster={true} />}
    />

    <Route
      path="/transactions/salechallan/item"
      element={<SalesChallanSingleItem routetext="salechallan" isMaster={false} />}
    />

    <Route
      path="/transactions/payment"
      element={<PaymentForm routetext="payment" isMaster={true} />}
    />

    <Route
      path="/transactions/payment/item"
      element={<PaymentFormSingleItem routetext="payment" isMaster={false} />}
    />

    <Route
      path="/transactions/rejection"
      element={<RejectionForm  isMaster={true} />}
    />

    <Route
      path="/transactions/rejection/item"
      element={<RejectionFormSingleItem routetext="rejection" isMaster={false} />}
    />    

    {/* Reports  */}
    <Route
      path="/reports/workbook"
      element={<ComingSoon routetext="workbook" isMaster={true} />}
    />
    <Route
      path="/reports/workorderreg"
      element={<ComingSoon routetext="workorderreg" isMaster={true} />}
    />
    <Route
      path="/reports/payslip"
      element={<ComingSoon routetext="payslip" isMaster={true} />}
    />
    <Route
      path="/reports/salaryledger"
      element={<ComingSoon routetext="salaryledger" isMaster={true} />}
    />
    <Route
      path="/reports/prodledger"
      element={<ComingSoon routetext="prodledger" isMaster={true} />}
    />
    <Route
      path="/reports/accountledger"
      element={<ComingSoon routetext="accountledger" isMaster={true} />}
    />

    {/* Generic */}
    <Route path="*" element={<Home  />} />
  </Routes>
  )
}
