import Image from "next/image";
import Badge from "./components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#000000]">
      <section
        className="relative w-[90%] max-w-[807px] h-[300px] md:h-[466px] bg-[#000000] overflow-hidden"
        style={{
          backgroundImage: "url('bg.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right -10px bottom 0px",
          backgroundSize: "auto",
        }}
      >
        <Badge>
          👨‍💻 Work in progress
        </Badge>
        <h1 className="title font-sf">Playzone Project</h1>
        
        <div className="flex branding">
          <Image alt="Playzone Logo" src="/logo.svg" width={56} height={56} />
          <div className="flex-1 brand-name">
            <span>Design by</span>
            <h3>Orbix Team</h3>
          </div>
        </div>

        <div className="logo-big" style={{
          backgroundImage: "url('logo-big.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
        }} />
      </section>
    </main>
  );
}
