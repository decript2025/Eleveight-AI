export default function Footer() {

  return (
    <footer id="contact" className="section bg-background text-foreground py-8 px-6 text-left">
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-[26px] font-bold mb-3 text-left">Get in touch</h3>

        <address className="text-sm not-italic">
          <h4>Armenia</h4>
          1/31 Azatutyan ave.,<br /> 
          Yerevan, 0037, Armenia<br />
          Phone: <a className="text-foreground mb-2 leading-relaxed" href="tel:+37499551234">+37499551234</a><br />
          Email:  <a className="text-foreground mb-2 leading-relaxed" href="mailto:info@eleveight.ai">info@eleveight.ai</a>
        </address>
      </div>
    </footer>
  );
};