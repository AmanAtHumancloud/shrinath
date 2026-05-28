import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type Common = {
  label: string
  name: string
  required?: boolean
  hint?: string
  className?: string
}

type InputProps = Common & {
  kind?: 'text' | 'email' | 'tel' | 'date'
  placeholder?: string
  pattern?: string
  minLength?: number
  maxLength?: number
  defaultValue?: string
}

type TextareaProps = Common & {
  kind: 'textarea'
  rows?: number
  placeholder?: string
  maxLength?: number
}

type SelectProps = Common & {
  kind: 'select'
  options: readonly string[] | readonly { value: string; label: string }[]
  defaultValue?: string
  placeholder?: string
}

const baseInput =
  'mt-2 block w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition focus:border-deepblue-700 focus:ring-2 focus:ring-saffron-500/40 focus:outline-none'

export default function FormField(props: InputProps | TextareaProps | SelectProps) {
  const id = `f-${props.name}`
  const labelEl = (
    <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.16em] text-deepblue-900">
      {props.label} {props.required && <span className="text-saffron-600">*</span>}
    </label>
  )
  const hintEl: ReactNode = props.hint && (
    <p className="mt-1.5 text-xs text-muted">{props.hint}</p>
  )

  if ((props as TextareaProps).kind === 'textarea') {
    const p = props as TextareaProps
    return (
      <div className={cn(p.className)}>
        {labelEl}
        <textarea
          id={id}
          name={p.name}
          rows={p.rows ?? 5}
          required={p.required}
          maxLength={p.maxLength}
          placeholder={p.placeholder}
          className={cn(baseInput, 'resize-y min-h-[120px]')}
        />
        {hintEl}
      </div>
    )
  }

  if ((props as SelectProps).kind === 'select') {
    const p = props as SelectProps
    return (
      <div className={cn(p.className)}>
        {labelEl}
        <select
          id={id}
          name={p.name}
          required={p.required}
          defaultValue={p.defaultValue ?? ''}
          className={cn(baseInput, 'appearance-none bg-[url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="%231E3A8A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>\')] bg-no-repeat bg-[right_1rem_center] pr-10')}
        >
          {p.placeholder && <option value="" disabled>{p.placeholder}</option>}
          {p.options.map((o) => {
            const value = typeof o === 'string' ? o : o.value
            const label = typeof o === 'string' ? o : o.label
            return (
              <option key={value} value={value}>{label}</option>
            )
          })}
        </select>
        {hintEl}
      </div>
    )
  }

  const p = props as InputProps
  return (
    <div className={cn(p.className)}>
      {labelEl}
      <input
        id={id}
        name={p.name}
        type={p.kind ?? 'text'}
        required={p.required}
        minLength={p.minLength}
        maxLength={p.maxLength}
        pattern={p.pattern}
        defaultValue={p.defaultValue}
        placeholder={p.placeholder}
        className={baseInput}
      />
      {hintEl}
    </div>
  )
}
