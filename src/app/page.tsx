import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="space-x-4">
        <Link
          href="/login"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
