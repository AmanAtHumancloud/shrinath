'use client'

import { useEffect } from 'react'

export default function GlobalError({
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
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
          Something went wrong
        </h1>
        <p style={{ color: '#4b5563', marginBottom: '2rem' }}>
          A critical error occurred. Please refresh the page.
        </p>
        <button
          onClick={() => unstable_retry()}
          style={{
            padding: '0.625rem 1.25rem',
            borderRadius: '9999px',
            background: '#1E3A8A',
            color: 'white',
            border: 'none',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
