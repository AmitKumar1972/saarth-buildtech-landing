import Hero from "./components/hero";
import Awards from "./components/awards";
import Metrics from "./components/metrics";
import Services from "./components/services";
import About from "./components/about";
import Works from "./components/works";

export default function Home() {
  return (
    <>
      <Hero />
      <Awards />
      <About />
      <Metrics />
      <Services />
      <Works />
    </>
  );
}
