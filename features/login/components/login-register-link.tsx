import Link from "next/link";

export function LoginRegisterLink() {
  return (
    <Link href="/register" className="underline">
      Register
    </Link>
  );
}
