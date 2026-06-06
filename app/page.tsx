import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import IdolTeaserSection from '@/components/sections/IdolTeaserSection'
import SnapShowcaseSection from '@/components/sections/SnapShowcaseSection'
import CommunitySection from '@/components/sections/CommunitySection'
import MonthlyRecapSection from '@/components/sections/MonthlyRecapSection'
import WaitlistSection from '@/components/sections/WaitlistSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SnapShowcaseSection />
        <FeaturesSection />
        <IdolTeaserSection />
        <CommunitySection />
        <MonthlyRecapSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  )
}
