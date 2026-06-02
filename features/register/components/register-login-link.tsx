import Link from "next/link";

export function RegisterLoginLink() {
  return (
    <Link href="/login" className="underline">
      Login to your account
    </Link>
  );
}
