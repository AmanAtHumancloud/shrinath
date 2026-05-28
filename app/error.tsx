'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold text-deepblue-900 mb-3">Something went wrong</h1>
        <p className="text-gray-600 mb-8">
          An unexpected error occurred. Please try again, or return to the homepage.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => unstable_retry()}
            className="px-5 py-2.5 rounded-full bg-deepblue-900 text-white font-medium hover:bg-deepblue-800 transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full border border-deepblue-900 text-deepblue-900 font-medium hover:bg-deepblue-50 transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
