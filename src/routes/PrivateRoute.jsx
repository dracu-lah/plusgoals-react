// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate } from "react-router-dom";
import Header from "@components/shared/Header/Header";
import SideMenu from "@components/shared/SideMenu/SideMenu";

const PrivateLayout = ({ children }) => (
  <div className="">
    {/*<Header />*/}
    <div className="">
      {/*<SideMenu />*/}
      <main className="">{children}</main>
    </div>
  </div>
);

const PrivateRoute = ({ children }) => {
  // const isLoggedIn = localStorage.getItem("token");
  const isLoggedIn = true;
  return isLoggedIn ? (
    <PrivateLayout>{children}</PrivateLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
