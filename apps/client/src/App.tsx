import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./components/Auth/Authentication";
import { TopHeader } from "./components/Navbar/TopHeader";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { Error404 } from "./components/PageError/Error404";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { NavigationProgress, nprogress } from "@mantine/nprogress";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <TopHeader />
          {/* <NavigationProgress /> */}
          <Routes>
            <Route path="/auth" element={<Authentication />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
