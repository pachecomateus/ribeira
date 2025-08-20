import Image from "next/image";
import Link from "next/link";

export default function Obrigado() {
  return (
    <section className="bg-primary flex flex-col lg:flex-row items-center justify-center min-h-screen font-[family-name:var(--font-montserrat)]">
      <div className="relative lg:w-[55%] h-[100svh] flex items-center">
        <Image
          src="/mao-cropped.webp"
          alt="InnerHaus"
          width={2000}
          height={2000}
          className="lg:max-w-[95%] h-full object-cover object-[-400px] lg:object-right z-0"
          priority
        />
        <h1 className="sr-only">InnerHaus</h1>
        <div className="absolute inset-0 w-full h-full z-30 flex flex-col items-center justify-center text-white pb-10 lg:pb-0">
          <h3 className="2xl:text-[56px] text-4xl">Em breve</h3>
          <Image src="/logo-branco.png" alt="InnerHaus" className="2xl:block hidden" width={849} height={478} priority />
          <Image src="/logo-branco.png" alt="InnerHaus" className="2xl:hidden block" width={649} height={478} priority />
          <h3 className="2xl:text-[46px] text-3xl mt-5 text-center lg:text-start">A hospedagem através do sentir</h3>
        </div>
        <Image
          src="/rh.svg"
          alt="InnerHaus"
          width={2000}
          height={2000}
          className="absolute left-0 bg-gradient-to-r from-black/30 via-black/30 to-black/20 top-0 w-full h-full object-cover lg:object-right z-20"
          priority
        />
        <Link href="#contact" title="Ir para contato" className="absolute mx-auto left-0 right-0 text-center text-white text-4xl bottom-3 animate-bounce z-40 lg:hidden">
          <h3>
            ↓
          </h3>
        </Link>
      </div>
      <div className="lg:w-[45%] h-[100svh] flex items-center" id="contact">
        <div className="flex w-full h-full lg:h-4/5 flex-col items-center justify-evenly">
          <h2 className="text-white uppercase text-center 2xl:text-2xl text-base font-semibold">Faça seu cadastro <br /> e receba mais informações.</h2>
          <p className="text-center px-12 text-white text-lg 2xl:text-2xl">Obrigado! <br /> Seus dados foram enviados com sucesso, em breve entraremos em contato.</p>
          <div className="flex flex-col md:flex-row lg:gap-20 gap-10 text-white">
            <div className="flex flex-col items-center gap-3.5">
              <p className="text-sm 2xl:text-base">Realização:</p>
              <Image src="/cv-par.svg" alt="cvpar" className="2xl:block hidden" width={187} height={68} />
              <Image src="/cv-par.svg" alt="cvpar" className="2xl:hidden block" width={137} height={68} />
            </div>
            <div className="flex flex-col items-center gap-3.5">
              <p className="text-sm 2xl:text-base">Incorporação:</p>
              <Image src="/cv-haus.svg" alt="cvhaus" className="2xl:block hidden" width={166} height={46} />
              <Image src="/cv-haus.svg" alt="cvhaus" className="2xl:hidden block" width={126} height={46} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}