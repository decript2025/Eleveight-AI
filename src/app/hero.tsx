import { ReservationDialog } from "./ReservationDialog";

export default function Hero () {
  return (
    <section className="relative top-[85px] overflow-hidden z-[1] mb-[80px]">
      {/* Banner Image */}
      <div 
        className="relative w-full h-[260px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/landing-banner 2.jpg")'
        }}
        aria-hidden="true"
      />
      
      {/* Content below banner */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <img
            className="mb-8 w-[45vw] max-w-[700px] min-w-[200px] sm:min-w-[250px] md:min-w-[300px]"
            src="/logo_text.svg"
            alt="Eleveight AI"
          />
          <p className="mb-8 animate-fade-in-delay text-[16px] leading-6 w-[240px] sm:w-[345px] md:w-[375px] lg:w-[520px] md:text-[22px] lg:text-[26px] lg:leading-7 mx-auto">
            The cutting-edge technologies for AI disruptions
          </p>

          <ReservationDialog triggerVariant="no-border" />
        </div>
      </div>
    </section>
  );
};