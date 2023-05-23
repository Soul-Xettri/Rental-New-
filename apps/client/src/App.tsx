import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./components/Auth/Authentication";
import { TopHeader } from "./components/Navbar/TopHeader";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { Error404 } from "./components/PageError/Error404";
// import { useEffect, useState } from "react";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
function App() {
  // const [greeting, setGreeting] = useState("");
  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.text())
  //     .then(setGreeting);
  // }, []);

  return (
    <>
      <Router>
        <TopHeader />
        <NavigationProgress />
        <Routes>
          <Route path="/auth" element={<Authentication />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
