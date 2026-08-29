import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SkipLink } from '@/components/layout/SkipLink'
import { CambridgeSection } from '@/components/sections/CambridgeSection'
import { CourseJourneySection } from '@/components/sections/CourseJourneySection'
import { HeroSection } from '@/components/sections/HeroSection'
import { MethodSection } from '@/components/sections/MethodSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { PlaceholderSection } from '@/components/sections/PlaceholderSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { usePreferenceEffects } from '@/hooks/usePreferenceEffects'

const sections = [
  { id: 'contact', translationKey: 'sections.contact', tone: 'blue' },
] as const

export default function App() {
  usePreferenceEffects()

  return (
    <div className="bg-background text-foreground min-h-svh">
      <SkipLink />
      <Navbar />
      <main id="content" className="pt-24 sm:pt-28">
        <HeroSection />
        <CourseJourneySection />
        <MethodSection />
        <CambridgeSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
        {sections.map((section) => (
          <PlaceholderSection key={section.id} {...section} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
