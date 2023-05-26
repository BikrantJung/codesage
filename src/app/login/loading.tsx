import { getCurrentUser } from "@/lib/session"

async function LoginLoadingPage() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen">
    <div className="h-12 w-44 rounded bg-gray-200 animate-pulse"></div>
    <div className="border-2 rounded-md border-black bg-gray-200 px-6 py-12 max-w-sm w-full h-96 animate-pulse">
      <div className="flex flex-col p-6 gap-4">
          <div className="h-6 w-44 bg-white animate-pulse"></div>
          <div className="h-8 w-full bg-white animate-pulse"></div>
          <div className="h-16 w-full bg-white animate-pulse"></div>
          <div className="h-16 w-full bg-white animate-pulse"></div>
      </div>
    </div>
  </div>
  )
}

export default LoginLoadingPage