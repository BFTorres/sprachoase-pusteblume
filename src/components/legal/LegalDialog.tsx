import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

type LegalDialogProps = {
  trigger: string
  title: string
  description: string
  children: ReactNode
  triggerClassName?: string
}

export function LegalDialog({
  trigger,
  title,
  description,
  children,
  triggerClassName,
}: LegalDialogProps) {
  const { t } = useTranslation()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            'hover:bg-background/10 focus-visible:ring-accent inline-flex min-h-11 items-center rounded-lg px-3 text-left text-sm font-bold underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none',
            triggerClassName,
          )}
        >
          {trigger}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl gap-0 p-0">
        <div className="border-foreground bg-primary text-primary-foreground sticky top-0 z-10 border-b-2 p-6 pr-16">
          <DialogHeader className="pr-0">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="text-primary-foreground/80">
              {description}
            </DialogDescription>
          </DialogHeader>
          <DialogClose asChild>
            <button
              type="button"
              className="border-foreground bg-background text-foreground shadow-brutal focus-visible:ring-accent absolute top-5 right-5 grid size-11 place-items-center rounded-xl border-2 focus-visible:ring-2 focus-visible:outline-none"
              aria-label={t('common.close')}
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </DialogClose>
        </div>
        <div className="space-y-5 p-6">{children}</div>
      </DialogContent>
    </Dialog>
  )
}

type LegalSectionProps = {
  title: string
  children: ReactNode
  className?: string
}

export function LegalSection({
  title,
  children,
  className,
}: LegalSectionProps) {
  return (
    <section
      className={cn(
        'border-foreground bg-card rounded-xl border-2 p-4',
        className,
      )}
    >
      <h3 className="mb-2 text-base font-black">{title}</h3>
      <div className="text-muted-foreground space-y-2 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  )
}
