import { useState } from "react";
import { Tabs } from "@mantine/core";
import { Title, Container } from "@mantine/core";
import { Login } from "./Login";
import { Registration } from "./Registration";

export default function Authentication() {
  const [activeTab, setActiveTab] = useState<string | null>("first");
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   // setLoading(true);
  //   // props.setProgress(30);
  //   // setTimeout(() => {
  //   //   setLoading(false);
  //   //   props.setProgress(70);
  //   // }, 10000);
  //   // props.setProgress(100);
  //   updatePage();
  // }, []);

  // const updatePage = async () => {
  //   props.setProgress(10);
  //   setLoading(true);
  //   props.setProgress(30);
  //   setTimeout(() => {
  //     setLoading(false);
  //     props.setProgress(70);
  //   }, 40000);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 40000);
  //   props.setProgress(100);
  // };
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 700,
        })}
      >
        Welcome to Rental
      </Title>
      <Tabs
        value={activeTab}
        onTabChange={setActiveTab}
        color="teal"
        defaultValue="first"
        my="md"
      >
        <Tabs.List>
          <Tabs.Tab value="first" color="blue">
            {" "}
            Sign in
          </Tabs.Tab>
          <Tabs.Tab value="second">Sign up</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first" pt="xs">
          <Login />
        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs">
          <Registration />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
