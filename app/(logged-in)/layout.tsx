import { LogoutButtonContainer } from "@/features/logout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex items-center justify-between bg-gray-300 p-4">
        <div className="text-xl font-bold">HomePage</div>
        <div>
          <LogoutButtonContainer />
        </div>
      </nav>
      <div className="flex flex-1 items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}
