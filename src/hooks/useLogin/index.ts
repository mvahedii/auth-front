import { UseMutationResult, useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { LOGIN_API_ROUTE } from "@/app/constants";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const login = async (loginData: LoginData): Promise<LoginResponse> => {
  const response = await axiosInstance.post(LOGIN_API_ROUTE, loginData);
  return response.data;
};

export const useLogin = (): UseMutationResult<
  LoginResponse,
  Error,
  LoginData,
  unknown
> => {
  return useMutation<LoginResponse, Error, LoginData>({
    mutationFn: login,
  });
};
