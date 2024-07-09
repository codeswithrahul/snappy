import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            // src="/assets/images/myPort.svg"
            src="/assets/images/image copy 2.png"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            alt=""
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
