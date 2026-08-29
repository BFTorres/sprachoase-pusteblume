import type { ComponentProps } from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

function Switch({
  className,
  ...props
}: ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        'border-foreground bg-muted data-[state=checked]:bg-primary inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="border-foreground bg-background pointer-events-none block size-5 translate-x-0.5 rounded-full border shadow-sm transition-transform data-[state=checked]:translate-x-[1.35rem]" />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
