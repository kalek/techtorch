import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function RegisterSuccessView() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Your account has been created</CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/login">Login to your account</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
