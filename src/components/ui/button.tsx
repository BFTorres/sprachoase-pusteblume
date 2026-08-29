import type { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border-2 border-foreground px-4 text-sm font-bold transition-[transform,box-shadow,background-color,color] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-brutal hover:shadow-brutal-lg',
        secondary:
          'bg-accent text-accent-foreground shadow-brutal hover:shadow-brutal-lg',
        outline: 'bg-background text-foreground shadow-brutal hover:bg-muted',
        ghost:
          'border-transparent bg-transparent text-foreground hover:bg-muted',
      },
      size: {
        default: 'h-11 px-4 py-2',
        sm: 'h-10 px-3',
        icon: 'size-11 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button }
