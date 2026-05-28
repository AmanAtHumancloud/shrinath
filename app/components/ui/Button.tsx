import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'saffron' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantClass: Record<Variant, string> = {
  primary: 'btn btn-primary',
  saffron: 'btn btn-saffron',
  outline: 'btn btn-outline',
  ghost: 'btn btn-ghost',
}
const sizeClass: Record<Size, string> = {
  sm: 'text-xs px-4 py-2',
  md: '',
  lg: 'text-base px-7 py-4',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type AsLinkProps = CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, 'href' | 'children' | 'className'>
type AsButtonProps = CommonProps & { href?: undefined } & Omit<ComponentProps<'button'>, 'children' | 'className'>

export default function Button(props: AsLinkProps | AsButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const cls = cn(variantClass[variant], sizeClass[size], className)

  if ('href' in props && props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, href, ...rest } = props as AsLinkProps
    void _v; void _s; void _c; void _ch
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as AsButtonProps
  void _v; void _s; void _c; void _ch
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
