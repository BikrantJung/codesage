import { Logo } from "@/components/atoms/logo";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { LoginBox } from "@/features/auth/login/components/login-box"; 
import Link from "next/link";

export default async function LoginPage() {
  const session = await getCurrentUser();
  if (session) redirect("/");
  console.log(!!session, session);
  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen">
      <Logo width={220} />
      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        Well, Hello there 😉
      </h2>
      <LoginBox />

      {/* <Link href='/register' className="underline">I don&apos;t have an account</Link> */}
    </div>
  );
}
