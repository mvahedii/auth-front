import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { REGISTER_API_ROUTE } from "@/app/constants";

interface RegisterData {
  email: string;
  password: string;
}

const register = async (registerData: RegisterData) => {
  const response = await axiosInstance.post(REGISTER_API_ROUTE, registerData);
  return response.data;
};

export const useRegister = () => {
  return useMutation({ mutationFn: register });
};
