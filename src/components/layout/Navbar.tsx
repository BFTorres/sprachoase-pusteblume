import { BrandLink } from '@/components/layout/BrandLink'
import { Container } from '@/components/layout/Container'
import { DesktopNavigation } from '@/components/layout/DesktopNavigation'
import { MobileNavigation } from '@/components/layout/MobileNavigation'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 pt-3 sm:pt-4">
      <Container>
        <div className="border-foreground bg-background/88 shadow-brutal-lg flex min-h-16 items-center justify-between gap-3 rounded-2xl border-2 px-3 py-2 backdrop-blur-xl sm:px-4">
          <BrandLink />
          <DesktopNavigation />
          <div className="flex items-center gap-2 2xl:hidden">
            <ThemeToggle />
            <MobileNavigation />
          </div>
        </div>
      </Container>
    </header>
  )
}
