import { About } from "./about";
import { Features } from "./features";
import { UseCases } from "./UseCases";
import Hero from "./hero";
import { Partners } from "./partners";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <UseCases />
      <Partners />
    </div>
  );
}
