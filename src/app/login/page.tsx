// "use client";
// import { useState } from "react";
// import { useLogin } from "../../hooks";
// import { useRouter } from "next/navigation";
// import { DASHBOARD_ROUTE } from "../constants";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const { mutate, isPending, error, isSuccess, data } = useLogin();

//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     mutate(
//       { email, password },
//       {
//         onSuccess: (data) => {
//           localStorage.setItem("token", data.token);
//           router.push(DASHBOARD_ROUTE);
//         },
//       }
//     );
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="p-6 bg-white rounded shadow-md space-y-4"
//       >
//         <h1 className="text-2xl font-bold">Login</h1>
//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-50"
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
//           disabled={isPending}
//         >
//           {isPending ? "Loading..." : "Submit"}
//         </button>
//         {error && (
//           <p className="text-red-500">Error: {(error as Error).message}</p>
//         )}
//         {isSuccess && <p className="text-green-500">Login successful!</p>}
//       </form>
//     </div>
//   );
// }

// app/login/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "../../hooks/useLogin";
import { FormInput, SubmitButton } from "@/components";
import { DASHBOARD_ROUTE } from "../constants";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { mutate, isPending, error, isSuccess } = useLogin();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          router.push(DASHBOARD_ROUTE);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold">Login</h1>
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
          text="Sign In"
          className="bg-blue-500 hover:bg-blue-700"
        />
        {error && (
          <p className="text-red-500">Error: {(error as Error).message}</p>
        )}
        {isSuccess && <p className="text-green-500">Login successful!</p>}
      </form>
    </div>
  );
}
