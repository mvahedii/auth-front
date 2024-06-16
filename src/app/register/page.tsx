"use client";

import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import { FormInput, SubmitButton } from "@/components";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending, error, isSuccess } = useRegister();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold">Register</h1>
        <FormInput
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <SubmitButton
          isLoading={isPending}
          text="Sign Up"
          className="bg-green-500 hover:bg-green-700"
        />
        {error && (
          <p className="text-red-500">Error: {(error as Error).message}</p>
        )}
        {isSuccess && (
          <p className="text-green-500">Registration successful!</p>
        )}
      </form>
    </div>
  );
}
