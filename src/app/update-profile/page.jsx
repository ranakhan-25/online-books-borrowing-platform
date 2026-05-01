"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const UpdataPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.name.value;
    await authClient.updateUser(
      {
        name,
        image,
        callbackURL: "/profile",
      },
      {
        onSuccess: (ctx) => {
          return redirect("/profile");
        },
        onError: (ctx) => {
          toast(ctx.error.message);
        },
      },
    );

    router.refresh();
  };

  return (
    <div className="bg-blue-50  w-[95%] mx-auto sm:w-120 p-3 my-5 rounded-xl">
      <h1 className="text-2xl font-medium text-purple-400 text-center my-3">
        Updata Profile
      </h1>
      <Form className="flex rounded-md flex-col gap-4" onSubmit={onSubmit}>
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

        <div className="flex justify-between gap-2">
          <Button className={""} type="submit">
            <Check />
            save
          </Button>
          <Link href="/profile" className={"btn"}>
            cancel
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default UpdataPage;
