import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <section className="bg-gray-300 flex flex-col lg:flex-row items-center justify-center min-h-screen font-[family-name:var(--font-montserrat)]">
      <div className="relative lg:w-[55%] h-[100svh] flex items-center">
        <Image
          src="/mao-cropped.webp"
          alt="InnerHaus"
          width={2000}
          height={2000}
          className="lg:max-w-[95%] h-full object-cover object-[-400px] lg:object-right z-0"
          priority
        />
        <h1 className="sr-only">Máximo Braz Cubas</h1>
        <Link href="#contact" title="Ir para contato" className="absolute mx-auto left-0 right-0 text-center text-white text-4xl bottom-3 animate-bounce z-40 lg:hidden">
          <h3>
            ↓
          </h3>
        </Link>
      </div>
      <div className="lg:w-[45%] h-[100svh] flex items-center" id="contact">
        <div className="flex w-full h-full lg:h-4/5 flex-col items-center justify-evenly">
          <h2 className="text-primary uppercase text-center text-2xl font-semibold">
            Vem aí o lançamento <br /> mais aguardado de <br className="block md:hidden" /> <span className="text-secondary">Braz Cubas</span>
          </h2>
          <Contact />
          
        </div>
      </div>
    </section>
  );
}
