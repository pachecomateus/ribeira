import Image from "next/image";
import Link from "next/link";

export default function Obrigado() {
  return (
    <section className="bg-[#efeeea] flex flex-col lg:flex-row items-center justify-center min-h-screen font-[family-name:var(--font-montserrat)]">
      <div className="relative lg:w-[55%] h-[100svh] flex items-center">
        <div className="block lg:hidden absolute inset-0 h-1/2 bg-gradient-to-b from-[#efeeea] via-[#efeeea]/85 to-transparent z-10"></div>
        <h2 className="text-primary uppercase text-center text-2xl font-medium absolute z-30 w-full top-40 left-1/2 -translate-x-1/2 block lg:hidden">
          Vem aí o lançamento <br /> mais aguardado de <br className="block md:hidden" /> <span className="text-secondary font-semibold">Braz Cubas</span>
        </h2>
        <Image
          src="/imagem-site-maximo.png"
          alt="Máximo - Ribeira"
          width={2000}
          height={2000}
          className="lg:max-w-[95%] h-full object-cover object-center lg:object-right z-0"
          priority
        />
        <h1 className="sr-only">Máximo Braz Cubas - Ribeira</h1>
        <Link href="#contact" title="Ir para contato" className="absolute mx-auto left-0 right-0 text-center text-white text-4xl bottom-3 animate-bounce z-40 lg:hidden">
          <h3>
            ↓
          </h3>
        </Link>
      </div>
      <div className="lg:w-[45%] lg:h-[100svh] h-[70svh] md:h-[60svh] flex items-center" id="contact">
        <div className="flex w-full h-full lg:h-4/5 flex-col items-center justify-evenly">
          <h2 className="text-primary uppercase text-center text-2xl font-medium hidden lg:block">
            Vem aí o lançamento <br /> mais aguardado de <br className="block md:hidden" /> <span className="text-secondary font-semibold">Braz Cubas</span>
          </h2>
          <p className="text-center px-12 text-primary text-xl 2xl:text-2xl">
            Obrigado! <br /> Seus dados foram enviados com sucesso, em breve entraremos em contato.
          </p>
          <div className="flex items-center jutify center">
            <Image src="/logo-ribeira.svg" alt="Ribeira" width={233} height={46} />
          </div>
        </div>
      </div>
    </section>
  );
}