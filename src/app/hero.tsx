// import { ReservationDialog } from "@/components/ReservationDialog";
import { Button } from "assets/components/ui/button";
import { ReservationDialog } from "./ReservationDialog";
import heroBg from "/web.jpg";

export default function Hero () {
  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url("/hero-mob.jpg")`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        aspectRatio: 375 / 298,
        zIndex: 1,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b" />
      
      <div className="container mx-auto px-4 mt-[-8vh] ml-[5vw] relative z-10">
        <div className="max-w-3xl">
          <img  className="mb-5" src="/logo_text.svg" alt="Eleveight AI" width={240} />
          <p className="text-base md:text-2xl w-[240px] mb-6 text-foreground animate-fade-in-delay">
            The cutting-edge technologies for AI disruptions
          </p>
          
           <Button variant="no-border">Reserve Now</Button>
        </div>
      </div>
    </section>
  );
};