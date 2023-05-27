import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Group,
  Button,
  Divider,
  Stack,
} from "@mantine/core";
import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";
import { Link } from "react-router-dom";
import { isEmail, useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { PostQuery } from "../../utils/ApiCall";
import { LOGIN } from "../../utils/ApiRoutes";
import Cookies from "js-cookie";

const handleLoginPost = async (data: any) => {
  return (await PostQuery(LOGIN, data))?.data;
};

export function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      terms: true,
    },

    validate: {
      email: isEmail("Invalid email"),

      // password: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid password"),
    },
  });

  const { mutate, isLoading } = useMutation(handleLoginPost);
  const handleLogin = (data: any) => {
    mutate(data, {
      onSuccess: async (data) => {
        Cookies.set("token", data.access_token);
        // const {data:user}= await FetchQuery(ME);
        console.log("success:true");
      },
      onError: async (error: any) => {
        console.log(error.data.response);
      },
    });
  };
  return (
    <>
      <Divider label="Log in with" labelPosition="center" my="lg" />
      <Group grow mb="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>
      <Divider label="Or continue with" labelPosition="center" my="lg" />
      <Paper withBorder shadow="md" p={30} radius="md">
        <form
          onSubmit={form.onSubmit((values) => {
            handleLogin(values);
          })}
        >
          <Stack>
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "blue", deg: 60 }}
            >
              Teal blue
            </Button>
            <TextInput
              label="Email"
              placeholder="Enter Email"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter Password"
              {...form.getInputProps("password")}
            />
            <Group position="apart">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                <Link to="/auth/forgot-password">Forgot password?</Link>
              </Anchor>
            </Group>
            <Button
              loading={isLoading}
              type="submit"
              fullWidth
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
            >
              Sign in
            </Button>
          </Stack>
        </form>
      </Paper>
    </>
  );
}
