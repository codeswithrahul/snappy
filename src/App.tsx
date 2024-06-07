import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignInForm from "./_auth/form/SignInForm";
import SignUpForm from "./_auth/form/SignUpForm";
import { Home } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import "./index.css";
import RootLayout from "./_root/RootLayout";

function App() {
  return (
    <>
      <main className="flex h-screen border">
        <Routes>
          {/* ------------- public Routes --------- */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>

          {/* ------------ Private Routes ----------- */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
