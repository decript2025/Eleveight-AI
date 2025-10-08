'use client'

const partners = [
  { src: "/partners/csi_logo.png", alt: "CSI Logo" },
  { src: "/partners/ep_logo.png", alt: "EP Logo" },
  { src: "/partners/decript_logo.png", alt: "Decript Logo" },
  { src: "/partners/xart_logo.png", alt: "Xart Logo" },
  { src: "/partners/digidata_logo.png", alt: "DigiData Logo" },
  { src: "/partners/uwc_dilijan_logo.png", alt: "UWC Dilijan Logo" },
];

export function Partners() {
  return (
    <div className="mx-10 my-[25px]">
      <h2 className="text-[40px] my-5 text-center font-bold">Our Partners</h2>
      
      <div className="max-[961px]:overflow-hidden whitespace-nowrap max-[961px]:max-w-[80vw] max-[961px]:mx-auto text-center">
          {/* <div> */}
             {/* transition-transform duration-[.5s] ease-in-out */}
             <div className="inline-block max-[961px]:animate-[slide_15s_linear_infinite]">
              {partners.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className="inline-block h-[100px] min-[1400px]:h-[150px] min-[962px]:h-[122px]"
                />
              ))}
             </div>
             <div className="max-[961px]:inline-block hidden  max-[961px]:animate-[slide_15s_linear_infinite]">
              {partners.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className="inline-block h-[100px] min-[1400px]:h-[150px] min-[962px]:h-[122px]"
                />
              ))}
             </div>
          {/* </div> */}
        </div>  
    </div>
  );
};