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
            {/* <Route path="/cities">
              <CityLayout token={token} />
            </Route>
            <Route path="/users">
              <UsersLayout token={token} />
            </Route>
            <Route path="/orders">
              <OrdersLayout token={token} />
            </Route>
            <Route path="/trips">
              <TripsLayout token={token} />
            </Route>
            <Route path="/payments">
              <PaymentLayout token={token} />
            </Route>
            <Route path="/remittances">
              <RemittanceLayout token={token} />
            </Route>
            <Route path="/utilities">
              <UtilitiesLayout token={token} />
            </Route>
            <Route path="/policies">
              <PoliciesLayout token={token} />
            </Route> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
