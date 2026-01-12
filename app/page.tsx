
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Steps from './components/Steps';
import SearchSection from './components/SearchSection';
import PrecautionBanner from './components/PrecautionBanner';
import ReportSideEffect from './components/ReportSideEffect';
import ChildrenVaccination from './components/ChildrenVaccination';
import DateCorrection from './components/DateCorrection';
import PrecautionDoseInfo from './components/PrecautionDoseInfo';
import ShareStatus from './components/ShareStatus';
import AbhaSection from './components/AbhaSection';
import RaiseIssue from './components/RaiseIssue';
import FaqSection from './components/FaqSection';
import WhatsNew from './components/WhatsNew';
import StatsSection from './components/StatsSection';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Steps />
      <SearchSection/>
      <PrecautionBanner/>
      <ReportSideEffect/>
      <ChildrenVaccination/>
      <DateCorrection/>
      <PrecautionDoseInfo/>
      <ShareStatus/>
      <AbhaSection/>
      <RaiseIssue/>
      <FaqSection/>
      <WhatsNew/>
      <StatsSection/>
      <Partners/>
      <Footer/>

    </main>
  );
}