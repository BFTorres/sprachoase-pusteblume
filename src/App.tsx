import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SkipLink } from '@/components/layout/SkipLink'
import { CourseJourneySection } from '@/components/sections/CourseJourneySection'
import { HeroSection } from '@/components/sections/HeroSection'
import { MethodSection } from '@/components/sections/MethodSection'
import { PlaceholderSection } from '@/components/sections/PlaceholderSection'
import { usePreferenceEffects } from '@/hooks/usePreferenceEffects'

const sections = [
  { id: 'cambridge', translationKey: 'sections.cambridge', tone: 'blue' },
  { id: 'about', translationKey: 'sections.about', tone: 'default' },
  {
    id: 'testimonials',
    translationKey: 'sections.testimonials',
    tone: 'yellow',
  },
  { id: 'faq', translationKey: 'sections.faq', tone: 'default' },
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
        {sections.map((section) => (
          <PlaceholderSection key={section.id} {...section} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
