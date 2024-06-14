import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link className="bg-indigo-500 p-5 m-5" href="/login">Go to Login</Link>
      <Link className="bg-indigo-500 p-5 m-5" href="/signup">Go to Signup</Link>
    </div>
  );
}
