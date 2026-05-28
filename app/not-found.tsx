import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold tracking-wide text-deepblue-900 uppercase mb-2">404</p>
        <h1 className="text-3xl font-semibold text-deepblue-900 mb-3">Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-block px-5 py-2.5 rounded-full bg-deepblue-900 text-white font-medium hover:bg-deepblue-800 transition"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
