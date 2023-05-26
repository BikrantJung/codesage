import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

async function ProtectedPage() {
  const user = await getCurrentUser();
  if (!user) return redirect("/");
  return <div>{JSON.stringify(user.user)}</div>;
}

export default ProtectedPage;
