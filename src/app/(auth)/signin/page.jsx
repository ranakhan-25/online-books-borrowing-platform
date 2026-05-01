"use client";

import { ToastContainer, toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
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
import { redirect } from "next/navigation";

const Signin = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email(
      {
        email: userData.email,
        password: userData.password,
        callbackURL: "/",
      },
      {
        onSuccess: (ctx) => {
          redirect("/");
        },
        onError: (ctx) => {
          toast(ctx.error.message);
        },
      },
    );
  };

  const handelGoogleAuth = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className=" w-full mx-3 sm:w-100 sm:mx-auto rounded-lg bg-purple-50 p-3 my-5">
      <h1 className="text-2xl font-bold text-center">Login Form</h1>
      <Form className="flex rounded-md flex-col gap-4" onSubmit={onSubmit}>
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

        <div className="flex gap-2">
          <Button className={"w-full"} type="submit">
            <Check />
            Submit
          </Button>
        </div>
      </Form>

      <div>
        {/* Google */}
        <button
          onClick={handelGoogleAuth}
          className="btn w-full my-3 bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>

      <p>
        I have no any account{" "}
        <Link href="/register" className="text-green-600 font-bold">
          Register
        </Link>
      </p>

      <ToastContainer />
    </div>
  );
};

export default Signin;
