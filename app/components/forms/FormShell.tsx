'use client'

import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'
import { submitForm, type SubmitPayload } from '@/lib/web3forms'
import { cn } from '@/lib/cn'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function FormShell({
  subject,
  fromName,
  submitLabel = 'Send message',
  successHeading = 'Thank you — message received',
  successBody = 'We\'ll get back to you within one school day.',
  children,
  className,
}: {
  subject: string
  fromName: string
  submitLabel?: string
  successHeading?: string
  successBody?: string
  children: ReactNode
  className?: string
}) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const lastSubmit = useRef<number>(0)
  const formRef = useRef<HTMLFormElement>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (Date.now() - lastSubmit.current < 2000) return
    lastSubmit.current = Date.now()
    setError(null)

    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const data = new FormData(form)
    const payload: SubmitPayload = { subject, from_name: fromName }
    data.forEach((value, key) => {
      payload[key] = value
    })

    setStatus('submitting')
    const result = await submitForm(payload)
    if (result.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
      setError(result.error)
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn('rounded-[20px] border border-saffron-300 bg-cream-2 p-8 md:p-10 text-center', className)}
      >
        <div className="inline-flex size-14 items-center justify-center rounded-full bg-saffron-500 text-ink mb-4">
          <CheckCircle2 size={26} />
        </div>
        <h3 className="font-display text-2xl text-deepblue-900">{successHeading}</h3>
        <p className="mt-2 text-muted max-w-md mx-auto">{successBody}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 btn btn-outline text-xs"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className={cn('space-y-5', className)}>
      {children}

      {error && (
        <div role="alert" className="flex items-start gap-2.5 rounded-md border border-saffron-700/40 bg-saffron-100 px-4 py-3 text-sm text-saffron-800">
          <AlertCircle size={16} className="mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex flex-col-reverse items-stretch gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We respect your privacy. No spam, ever.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={cn('btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed')}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              {submitLabel} <Send size={14} />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
