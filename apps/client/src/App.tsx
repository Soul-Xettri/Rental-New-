import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./components/Auth/Authentication";
// import { TopHeader } from "./components/Navbar/TopHeader";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { Error404 } from "./components/PageError/Error404";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useState } from "react";
// import LoadingBar from "react-top-loading-bar";
import HomePage from "./components/Home/HomePage";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { Footer } from "./components/Navbar/Footer";
const queryClient = new QueryClient();

function App() {
  // const [progress, setProgress] = useState(0);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["d", () => toggleColorScheme()]]);

  if (colorScheme === "dark") {
    document.body.style.backgroundColor = "#1a1b1e";
  } else {
    document.body.style.backgroundColor = "white";
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider theme={{ colorScheme }}>
              <Paper p="0" radius="0">
                {/* <TopHeader
                  user={{
                    name: "Soul-Xettri",
                    image:
                      "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/346448560_620327659995815_1613930564586093809_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XTYQ3DKS0tUAX8VAy_D&_nc_ht=scontent.fktm8-1.fna&oh=00_AfANNc6RKNb49r8fn4gJyMnTmrS2bVHV88278mZPFHCDaA&oe=6474D08B",
                  }}
                /> */}

                {/* <LoadingBar height={3} color="#f11946" progress={progress} /> */}
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/auth" element={<Authentication />} />
                  <Route
                    path="/auth/forgot-password"
                    element={<ForgotPassword />}
                  />
                  <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer
                  data={[
                    {
                      title: "About",
                      links: [
                        { label: "Features", link: "#" },
                        { label: "Pricing", link: "#" },
                        { label: "Support", link: "#" },
                        { label: "Forums", link: "#" },
                      ],
                    },
                    {
                      title: "Project",
                      links: [
                        { label: "Contribute", link: "#" },
                        { label: "Media assets", link: "#" },
                        { label: "Changelog", link: "#" },
                        { label: "Releases", link: "#" },
                      ],
                    },
                    {
                      title: "Community",
                      links: [
                        { label: "Join Discord", link: "#" },
                        { label: "Follow on Twitter", link: "#" },
                        { label: "Email newsletter", link: "#" },
                        { label: "GitHub discussions", link: "#" },
                      ],
                    },
                  ]}
                />
              </Paper>
            </MantineProvider>
          </ColorSchemeProvider>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
