import React, { useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import history from "./../history";
import theme from "./ui/Theme";
import useToken from "../custom-hooks/useToken";
// import UserLogin from "./users/UserLogin";
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
import AssetDepreciationLayout from "./ui/assets/depreciation/AssetDepreciationLayout";
import AssetInventoryLayout from "./ui/assets/inventory/AssetInventoryLayout";

function App() {
  const { token, setToken } = useToken();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  // if (!token) {
  //   return <UserLogin setToken={setToken} />;
  // }

  return (
    <div className="wrapper">
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          ;
          <Switch>
            <Route path="/accounts/ledgers">
              <AccountsLedgerLayout token={token} />
            </Route>
            <Route path="/accounts/expenses">
              <AccountExpenseLayout token={token} />
            </Route>
            <Route path="/accounts/inflows">
              <AccountInflowLayout token={token} />
            </Route>
            <Route path="/accounts/listings">
              <AccountListingLayout token={token} />
            </Route>
            <Route path="/accounts/employees">
              <AccountEmployeeLayout token={token} />
            </Route>
            <Route path="/accounts/transactions">
              <AccountTransactionsLayout token={token} />
            </Route>
            <Route path="/accounts/bankdeposits">
              <AccountBankDepositLayout token={token} />
            </Route>
            <Route path="/accounts/utilities">
              <AccountUtilitiesLayout token={token} />
            </Route>
            <Route path="/assets/assets">
              <AssetsAssetLayout token={token} />
            </Route>
            <Route path="/assets/procurements">
              <AssetsProcurementLayout token={token} />
            </Route>
            <Route path="/assets/depreciations">
              <AssetDepreciationLayout token={token} />
            </Route>
            <Route path="/assets/inventories">
              <AssetInventoryLayout token={token} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
