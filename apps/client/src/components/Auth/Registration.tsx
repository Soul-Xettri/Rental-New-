import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Stack,
} from "@mantine/core";

import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";
import { hasLength, isEmail, matchesField, useForm } from "@mantine/form";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SIGNUP } from "../../utils/ApiRoutes";
import { PostQuery } from "../../utils/ApiCall";

const handlRegisterationPost = async (data: any) => {
  return (await PostQuery(SIGNUP, data))?.data;
};

export function Registration() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validate: {
      firstName: hasLength(
        { min: 2, max: 10 },
        "Name must be 2-10 characters long"
      ),
      lastName: hasLength(
        { min: 2, max: 10 },
        "Name must be 2-10 characters long"
      ),
      email: isEmail("Invalid email"),
      mobileNumber: hasLength({ min: 2, max: 10 }, "Invalid mobile number"),
      password: hasLength(
        { min: 6 },
        "Password must have 6  or more characters"
      ),
      confirmPassword: matchesField("password", "Passwords are not the same"),
      terms: (termsCheck) =>
        termsCheck === false ? "Check the terms and conditions" : null,
    },
  });

  // const formValues = form.values;

  // const [post, setPost] = useState(formValues);

  // const handleInput = (event: any) => {
  //   setPost({ ...post, [event.target.name]: event.target.value });
  // };

  const { mutate, isLoading } = useMutation(handlRegisterationPost);
  const handleRegister = (data: any) => {
    mutate(data, {
      onSuccess: async () => {
        console.log("success");
      },
      onError: (e: any) => {
        console.log(e.response.data);
      },
    });
  };

  return (
    <>
      <Divider label="Sign up with" labelPosition="center" my="lg" />
      <Group grow mb="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>
      <Divider label="Or continue with" labelPosition="center" my="lg" />
      <Paper withBorder shadow="md" p={30}>
        <form
          onSubmit={form.onSubmit((values) => {
            handleRegister(values);
          })}
        >
          <Stack>
            <TextInput
              name="firstName"
              label="First Name"
              placeholder="Enter First Name"
              withAsterisk
              {...form.getInputProps("firstName")}
            />
            <TextInput
              label="Last Name"
              placeholder="Enter Last Name"
              withAsterisk
              {...form.getInputProps("lastName")}
            />
            <TextInput
              label="Email"
              placeholder="Enter Email"
              withAsterisk
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Mobile Number"
              placeholder="Enter Mobile Number"
              withAsterisk
              {...form.getInputProps("mobileNumber")}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter Password"
              withAsterisk
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Enter Password Again"
              withAsterisk
              {...form.getInputProps("confirmPassword")}
            />
            <Group>
              <Checkbox
                checked={form.values.terms}
                {...form.getInputProps("terms")}
              />
              <Link to="/">I accept terms and conditions</Link>
            </Group>

            <Button
              loading={isLoading}
              type="submit"
              fullWidth
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
            >
              Sign up
            </Button>
          </Stack>
        </form>
      </Paper>
    </>
  );
}
