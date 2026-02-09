import Hero from "./components/hero";
import Awards from "./components/awards";
import Metrics from "./components/metrics";
import Services from "./components/services";
import About from "./components/about";
import WhyChoose from "./components/whyChoose";
import MissionVision from "./components/missionVision";
import Works from "./components/works";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Metrics />
      <Services />
      <WhyChoose />
      <MissionVision />
      {/* <Works /> */}
    </>
  );
}
