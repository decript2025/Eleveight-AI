import { About } from "./about";
import { Features } from "./features";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import { Partners } from "./partners";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Features />
      <Partners />
      <Footer />
    </div>
  );
}
