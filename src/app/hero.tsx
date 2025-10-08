import { ReservationDialog } from "./ReservationDialog";

export default function Hero () {
  return (
    <section className="hero-bg relative flex items-center justify-center overflow-hidden z-[1]">
      <div className="absolute inset-0 bg-gradient-to-b" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mt-[-8vh] md:mt-[-13vh] md:ml-[3vw] ml-[3vw] ">
          <img
            className="mb-5 w-[45vw] max-w-[700px] min-w-[200px] sm:min-w-[250px] md:min-w-[300px]"
            src="/logo_text.svg"
            alt="Eleveight AI"
          />
          <p className="mb-6 text-foreground animate-fade-in-delay text-[16px] leading-6 w-[240px] sm:w-[345px] md:w-[375px] lg:w-[420px] md:text-[22px] lg:text-[26px] lg:leading-7">
            The cutting-edge technologies for AI disruptions
          </p>

          <ReservationDialog triggerVariant="no-border" />
        </div>
      </div>
    </section>
  );
};