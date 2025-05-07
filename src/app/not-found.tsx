import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404 Not Found</h1>
      <p className="text-gray-600 mb-8">Visited page not found, please go to homepage.</p>
      <Link href="/" className="px-6 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
        Go home page
      </Link>
    </div>
  )
}
