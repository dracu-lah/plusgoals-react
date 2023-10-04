// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate } from "react-router-dom";
import Header from "@components/shared/Header/Header";
import Footer from "@components/shared/Footer/Footer";

const PrivateLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen ">
    <Header />
      {/*<SideMenu />*/}
      <main className="flex-1">{children}</main>
    <Footer />
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
