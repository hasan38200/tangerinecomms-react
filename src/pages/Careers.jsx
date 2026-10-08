import CareersHero from '../components/sections/CareersHero';
import CareersBenefits from '../components/sections/CareersBenefits';
import CareersTeamPhoto from '../components/sections/CareersTeamPhoto';
import CareersJobs from '../components/sections/CareersJobs';
import {
  CAREERS_HERO_SLIDES,
  CAREERS_BENEFITS,
  CAREERS_JOBS,
} from '../data/pages/careers';

export default function Careers() {
  return (
    <main>
      <CareersHero slides={CAREERS_HERO_SLIDES} />
      <CareersBenefits benefits={CAREERS_BENEFITS} />
      <CareersTeamPhoto />
      <CareersJobs jobs={CAREERS_JOBS} />
    </main>
  );
}