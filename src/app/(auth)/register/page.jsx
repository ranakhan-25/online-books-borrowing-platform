"use client";

import { ToastContainer, toast } from "react-toastify";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUp = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email(
      {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        image: userData.image,
        callbackURL: "/signin",
      },
      {
        onSuccess: (ctx) => {
          redirect("/signin");
        },
        onError: (ctx) => {
          toast(ctx.error.message);
        },
      },
    );
  };

  return (
    <div>
      <Form
        className="flex w-120 mx-auto bg-pink-50 p-3 my-5 rounded-md flex-col gap-4"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="name"
          type="text"
          minLength={3}
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={6}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 6 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="image"
          type="url"
          validate={(value) => {
            // empty check
            if (!value) {
              return "Photo URL is required";
            }
          }}
        >
          <Label>Photo Url</Label>
          <Input placeholder="Enter your Photo Url" />
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button className={"w-full"} type="submit">
            <Check />
            Submit
          </Button>
        </div>

        <p>
          I have an account{" "}
          <Link href="/signin" className="text-green-600 font-bold">
            SignIn
          </Link>
        </p>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
