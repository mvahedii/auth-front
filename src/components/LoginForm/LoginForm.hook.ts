import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (credentials: LoginCredentials) => {
  const response = await axios.post(
    "http://localhost:3000/auth/login",
    credentials
  );
  return response.data;
};

// export const useLogin = () => {
//   //@ts-ignore
//   return useMutation(login);
// };
