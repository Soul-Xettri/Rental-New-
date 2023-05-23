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
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";

export function Registration() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      terms: true,
    },

    validate: {
      firstName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      lastName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (email) => (/^\S+@\S+$/.test(email) ? null : "Invalid email"),
      phoneNumber: (phone) =>
        phone.length < 10 ? "Invalid phone number" : null,
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      confirmPassword: (value, val) =>
        value !== val.password ? "Passwords did not match" : null,
    },
  });
  return (
    <>
      <Divider label="Sign up with" labelPosition="center" my="lg" />
      <Group grow mb="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>
      <Divider label="Or continue with" labelPosition="center" my="lg" />
      <Paper withBorder shadow="md" p={30}>
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              label="First Name"
              placeholder="Enter First Name"
              value={form.values.firstName}
              onChange={(event) =>
                form.setFieldValue("firstName", event.currentTarget.value)
              }
              error={
                form.errors.firstName && " Name must have at least 2 letters"
              }
            />
            <TextInput
              label="Last Name"
              placeholder="Enter Last Name"
              value={form.values.lastName}
              onChange={(event) =>
                form.setFieldValue("lastName", event.currentTarget.value)
              }
              error={
                form.errors.lastName && " Name must have at least 2 letters"
              }
            />
            <TextInput
              label="Email"
              placeholder="Enter Email"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />
            <TextInput
              label="Mobile Number"
              placeholder="Enter Mobile Number"
              value={form.values.phoneNumber}
              onChange={(event) =>
                form.setFieldValue("phoneNumber", event.currentTarget.value)
              }
              error={form.errors.phoneNumber && "Invalid phone number"}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Enter Password Again"
              value={form.values.confirmPassword}
              onChange={(event) =>
                form.setFieldValue("confirmPassword", event.currentTarget.value)
              }
              error={form.errors.confirmPassword && "Passwords did not match"}
            />
            <Group>
              <Checkbox
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
              <Link to="/">I accept terms and conditions</Link>
            </Group>

            <Button
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
