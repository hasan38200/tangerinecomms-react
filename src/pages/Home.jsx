import HeroVideo from '../components/sections/HeroVideo';
import IntroSection from '../components/sections/IntroSection';
import ServicesSection from '../components/sections/ServicesSection';
import RecentWorkMarquees from '../components/sections/RecentWorkMarquees';
import WorkGrid from '../components/sections/WorkGrid';
import TestimonialSlider from '../components/sections/TestimonialSlider';
import PartnersSection from '../components/sections/PartnersSection';
import AttentionLabs from '../components/sections/AttentionLabs';
import ShapesSection from '../components/sections/ShapesSection';
import AwardsSection from '../components/sections/AwardsSection';
import BlogSlider from '../components/sections/BlogSlider';

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <IntroSection />
      <ServicesSection />
      <RecentWorkMarquees />
      <WorkGrid />
      <TestimonialSlider />
      <PartnersSection />
      <AttentionLabs />
      <ShapesSection />
      <AwardsSection />
      <BlogSlider />
    </main>
  );
}