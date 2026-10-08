import AboutHero from '../components/sections/AboutHero';
import AboutIntro from '../components/sections/AboutIntro';
import AboutGrid from '../components/sections/AboutGrid';
import AboutValues from '../components/sections/AboutValues';
import FairPlaySlider from '../components/sections/FairPlaySlider';
import AboutJuice from '../components/sections/AboutJuice';
import AboutCta from '../components/sections/AboutCta';
import {
  ABOUT_INTRO,
  ABOUT_GRID,
  ABOUT_VALUES,
  ABOUT_FAIR,
  ABOUT_JUICE,
  ABOUT_CTA,
} from '../data/pages/about';

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutIntro intro={ABOUT_INTRO} />
      <AboutGrid items={ABOUT_GRID} />
      <AboutValues values={ABOUT_VALUES} />
      <FairPlaySlider fair={ABOUT_FAIR} />
      <AboutJuice juice={ABOUT_JUICE} />
      <AboutCta cta={ABOUT_CTA} />
    </main>
  );
}