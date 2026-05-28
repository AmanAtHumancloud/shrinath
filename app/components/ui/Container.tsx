import { cn } from '@/lib/cn'

export default function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}) {
  return <Tag className={cn('container-x', className)}>{children}</Tag>
}
