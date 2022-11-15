import React, { useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import history from "./../history";
import theme from "./ui/Theme";
import useToken from "../custom-hooks/useToken";
import useUserId from "../custom-hooks/useUserId";
import UserLogin from "./../components/authForms/UserLogin";
import Header from "./ui/Header";
import AccountsLedgerLayout from "./ui/Accounts/AccountLedgers/AccountsLedgerLayout";
import AccountExpenseLayout from "./ui/Accounts/Expenses/AccountExpenseLayout";
import AccountInflowLayout from "./ui/Accounts/inflows/AccountInflowLayout";
import AccountListingLayout from "./ui/Accounts/Account Listings/AccountListingLayout";
import AccountEmployeeLayout from "./ui/Accounts/AccountEmployees/AccountEmployeeLayout";
import AccountTransactionsLayout from "./ui/Accounts/Account Transactions/AccountTransactionsLayout";
import AccountBankDepositLayout from "./ui/Accounts/BankDeposit/AccountBankDepositLayout";
import AccountUtilitiesLayout from "./ui/Accounts/AccountUtilities/AccountUtilitiesLayout";
import AssetsAssetLayout from "./ui/assets/assets/AssetsAssetLayout";
import AssetsProcurementLayout from "./ui/assets/procurement/AssetsProcurementLayout";

import AssetInventoryLayout from "./ui/assets/inventory/AssetInventoryLayout";
import AssetMaintenancesLayout from "./ui/assets/maintenances/AssetMaintenancesLayout";
import AssetSupplyChainLayout from "./ui/assets/supplyChain/AssetSupplyChainLayout";
import AssetDispositionLayout from "./ui/assets/disposition/AssetDispositionLayout";
import AssetStoresLayout from "./ui/assets/store/AssetStoresLayout";
import AssetUtilityLayout from "./ui/assets/utilities/AssetUtilityLayout";
import CrmUsersLayout from "./ui/crm/users/CrmUsersLayout";
import CrmContactsLayout from "./ui/crm/contacts/CrmContactsLayout";
import CrmSuppliersLayout from "./ui/crm/suppliers/CrmSuppliersLayout";
import CrmPartnersLayout from "./ui/crm/partners/CrmPartnersLayout";
import CrmCustomersLayout from "./ui/crm/customers/CrmCustomersLayout";
import CrmLeadsLayout from "./ui/crm/lead/CrmLeadsLayout";
import OperationsProjectLayout from "./ui/operations/operations/OperationsOperationLayout";
import OperationsUtilityLayout from "./ui/operations/utilities/OperationsUtilityLayout";
import OperationsProcessingLayout from "./ui/operations/processings/OperationsProcessingLayout";
import OperationsMaintenancesLayout from "./ui/operations/maintenances/OperationsMaintenancesLayout";
import OperationsQualityAssuranceLayout from "./ui/operations/qualityAssurance/OperationsQualityAssuranceLayout";
import OperationsFinishingLayout from "./ui/operations/finishings/OperationsFinishingLayout";
import SalesProductsLayout from "./ui/sales/product/SalesProductsLayout";
import SalesTeamLayout from "./ui/sales/team/SalesTeamLayout";
import SalesTasksLayout from "./ui/sales/task/SalesTasksLayout";
import SalesSalesLayout from "./ui/sales/sales/SalesSalesLayout";
import SalesAccountLayout from "./ui/sales/accounts/SalesAccountLayout";
import HrPlanningLayout from "./ui/hr/planning/HrPlanningLayout";
import HrRecruitmentLayout from "./ui/hr/recruitments/HrRecruitmentLayout";
import HrCompensationsLayout from "./ui/hr/compensations/HrCompensationsLayout";
import HrPerformancesLayout from "./ui/hr/performance/HrPerformancesLayout";
import HrLeavesLayout from "./ui/hr/leave/HrLeavesLayout";
import HrExittedLayout from "./ui/hr/exit/HrExittedLayout";
import HrSelfServicesLayout from "./ui/hr/selfService/HrSelfServicesLayout";
import HrUtilityLayout from "./ui/hr/utilities/HrUtilityLayout";
import ConsoleUtilitiesLayout from "./ui/console/utilities/ConsoleUtilitiesLayout";
import ConsoleUtilityServiceOutletLayout from "./ui/console/utilities/ConsoleUtilityServiceOutletLayout";
import ConsolePrivilegesLayout from "./ui/console/privileges/ConsolePrivilegesLayout";
import ConsoleRoleLayout from "./ui/console/roles/ConsoleRoleLayout";
import ConsoleTasksLayout from "./ui/console/tasks/ConsoleTasksLayout";
import AssetStoreTypesLayout from "./ui/assets/utilities/AssetStoreTypesLayout";
import AssetRequisitionLayout from "./ui/assets/requisition/AssetRequisitionLayout";
import AssetRetirementLayout from "./ui/assets/retirement/AssetRetirementLayout";
import AssetMovementsLayout from "./ui/assets/movements/AssetMovementsLayout";
import ProjectsProjectsLayout from "./ui/projects/projects/ProjectsProjectsLayout";

import ProjectsPlanningsLayout from "./ui/projects/plannings/ProjectsPlanningsLayout";
import ProjectsExecutionLayout from "./ui/projects/execution/ProjectsExecutionLayout";
import ProjectClosureLayout from "./ui/projects/closure/ProjectClosureLayout";
import ProjectsMonitoringLayout from "./ui/projects/monitoring/ProjectsMonitoringLayout";

import SalesInvoicesLayout from "./ui/sales/invoices/SalesInvoicesLayout";

function App() {
  const { token, setToken } = useToken();
  const { userId, setUserId } = useUserId();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: false,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidyMid slice",
  //   },
  // };

  const handleLogoutProcess = () => {
    setToken({});
    sessionStorage.removeItem("token");
  };

  const handleSuccessfulLoginInSnackbar = () => {
    // setBecomePartnerOpen(false);
    setAlert({
      open: true,
      message: "You have successively logged in",
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedLoginInSnackbar = () => {
    setAlert({
      open: true,
      message:
        "Could not logged you in. Please ensure your login credentials are correct",
      backgroundColor: "#FF3232",
    });
    //setBecomePartnerOpen(true);
  };


  if (!token) {
    return <UserLogin setToken={setToken} setUserId={setUserId} />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            token={token}
            userId={userId}
            setToken={setToken}
            handleLogoutProcess={handleLogoutProcess}
            handleSuccessfulLoginInSnackbar={handleSuccessfulLoginInSnackbar}
            handleFailedLoginInSnackbar={handleFailedLoginInSnackbar}
          />
          ;
          <Switch>
            <Route path="/accounts/ledgers">
              <AccountsLedgerLayout token={token} userId={userId} />
            </Route>
            <Route path="/accounts/expenses">
              <AccountExpenseLayout token={token} userId={userId} />
            </Route>
            <Route path="/accounts/inflows">
              <AccountInflowLayout token={token} userId={userId} />
            </Route>
            <Route path="/accounts/listings">
              <AccountListingLayout token={token} userId={userId} />
            </Route>
            <Route path="/accounts/employees">
              <AccountEmployeeLayout token={token} userId={userId} />
            </Route>
            <Route path="/accounts/transactions">
              <AccountTransactionsLayout token={token} userId={userId} />
            </Route>
            <Route path="/accounts/bankdeposits">
              <AccountBankDepositLayout token={token} userId={userId} />
            </Route>
            <Route path="/accounts/utilities">
              <AccountUtilitiesLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/assets">
              <AssetsAssetLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/procurements">
              <AssetsProcurementLayout token={token} userId={userId} />
            </Route>

            <Route path="/assets/inventories">
              <AssetInventoryLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/maintenances">
              <AssetMaintenancesLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/supplychains">
              <AssetSupplyChainLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/dispositions">
              <AssetDispositionLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/storetypes">
              <AssetStoreTypesLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/requisitions">
              <AssetRequisitionLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/retirements">
              <AssetRetirementLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/movements">
              <AssetMovementsLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/stores">
              <AssetStoresLayout token={token} userId={userId} />
            </Route>
            <Route path="/assets/utilities">
              <AssetUtilityLayout token={token} userId={userId} />
            </Route>
            <Route path="/crm/users">
              <CrmUsersLayout token={token} userId={userId} />
            </Route>
            <Route path="/crm/contacts">
              <CrmContactsLayout token={token} userId={userId} />
            </Route>
            <Route path="/crm/suppliers">
              <CrmSuppliersLayout token={token} userId={userId} />
            </Route>
            <Route path="/crm/partners">
              <CrmPartnersLayout token={token} userId={userId} />
            </Route>
            <Route path="/crm/customers">
              <CrmCustomersLayout token={token} userId={userId} />
            </Route>
            <Route path="/crm/leads">
              <CrmLeadsLayout token={token} userId={userId} />
            </Route>

            <Route path="/operations/operations">
              <OperationsProjectLayout token={token} userId={userId} />
            </Route>
            <Route path="/operations/utilities">
              <OperationsUtilityLayout token={token} userId={userId} />
            </Route>
            <Route path="/operations/processings">
              <OperationsProcessingLayout token={token} userId={userId} />
            </Route>
            <Route path="/operations/maintenances">
              <OperationsMaintenancesLayout token={token} userId={userId} />
            </Route>
            <Route path="/operations/qualityassurances">
              <OperationsQualityAssuranceLayout token={token} userId={userId} />
            </Route>
            <Route path="/operations/finishings">
              <OperationsFinishingLayout token={token} userId={userId} />
            </Route>
            <Route path="/sales/products">
              <SalesProductsLayout token={token} userId={userId} />
            </Route>
            <Route path="/sales/teams">
              <SalesTeamLayout token={token} userId={userId} />
            </Route>
            <Route path="/sales/tasks">
              <SalesTasksLayout token={token} userId={userId} />
            </Route>
            <Route path="/sales/sales">
              <SalesSalesLayout token={token} userId={userId} />
            </Route>
            <Route path="/sales/accounts">
              <SalesAccountLayout token={token} userId={userId} />
            </Route>
            <Route path="/hr/plannings">
              <HrPlanningLayout token={token} userId={userId} />
            </Route>
            <Route path="/hr/recruitments">
              <HrRecruitmentLayout token={token} userId={userId} />
            </Route>
            <Route path="/hr/compensations">
              <HrCompensationsLayout token={token} userId={userId} />
            </Route>
            <Route path="/hr/performances">
              <HrPerformancesLayout token={token} userId={userId} />
            </Route>
            <Route path="/hr/leaves">
              <HrLeavesLayout token={token} userId={userId} />
            </Route>
            <Route path="/hr/exits">
              <HrExittedLayout token={token} userId={userId} />
            </Route>
            <Route path="/hr/selfservices">
              <HrSelfServicesLayout token={token} userId={userId} />
            </Route>
            <Route path="/hr/utilities">
              <HrUtilityLayout token={token} userId={userId} />
            </Route>
            <Route path="/systems/utilities">
              <ConsoleUtilitiesLayout token={token} userId={userId} />
            </Route>
            <Route path="/systems/roles">
              <ConsoleRoleLayout token={token} userId={userId} />
            </Route>
            <Route path="/systems/tasks">
              <ConsoleTasksLayout token={token} userId={userId} />
            </Route>
            <Route path="/systems/privileges">
              <ConsolePrivilegesLayout token={token} userId={userId} />
            </Route>
            <Route path="/projects/projects">
              <ProjectsProjectsLayout token={token} userId={userId} />
            </Route>
            <Route path="/projects/plannings">
              <ProjectsPlanningsLayout token={token} userId={userId} />
            </Route>
            <Route path="/projects/executions">
              <ProjectsExecutionLayout token={token} userId={userId} />
            </Route>
            <Route path="/projects/monitorings">
              <ProjectsMonitoringLayout token={token} userId={userId} />
            </Route>
            <Route path="/projects/closures">
              <ProjectClosureLayout token={token} userId={userId} />
            </Route>
            <Route path="/sales/invoices">
              <SalesInvoicesLayout token={token} userId={userId} />
            </Route>
          </Switch>
          <Snackbar
            open={alert.open}
            message={alert.message}
            ContentProps={{
              style: { backgroundColor: alert.backgroundColor },
            }}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={() => setAlert({ ...alert, open: false })}
            autoHideDuration={4000}
          />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
