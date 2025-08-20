'use client';

import { useState } from "react";
// import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const router = useRouter();
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
  
    // if (!captchaToken) {
    //   setLoading(false);
    //   alert("Por favor, complete o captcha.");
    //   return;
    // }
  
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "748a1940-23c4-4930-a1c1-123ad9ac693b");
    // formData.append("h-captcha-response", captchaToken);
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
  
    const result = await response.json();
    if (result.success) {
      setLoading(false);
      console.log(result);
      setSuccess(true);
      // --- CV CRM Integration ---
      try {
        // Prepare payload for CV CRM
        const leadPayload = {
          nome: formData.get("name"),
          telefone: formData.get("phone"),
          email: formData.get("email"),
          // Add more fields if needed
        };
        // Replace with your actual CV CRM endpoint if different
        await fetch("https://btb.cvcrm.com.br/api/cvio/lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "email": "innerhaushotel@gmail.com",
            "token": "14f2093f51eb0a2d971e60daecd35b99809fac82"
          },
          body: JSON.stringify(leadPayload)
        });
      } catch (cvErr) {
        // Log error but do not block user
        console.error("CV CRM integration error:", cvErr);
      }
      // --- End CV CRM Integration ---
      router.push("/obrigado");
    } else {
      setLoading(false);
      console.log(result);
      setError(true);
    }
  }
  
    // const onHCaptchaChange = (token: string) => {
    //   setCaptchaToken(token);
    // };
  
  return (
    <section className="" id="contato">
      <div className="relative flex justify-center items-center">
        {error && <p className="text-center px-12 text-white text-lg 2xl:text-2xl">Ocorreu um erro ao enviar sua mensagem. <br /> Por favor, tente novamente mais tarde.</p>}
        {success && <p className="text-center px-12 text-white text-lg 2xl:text-2xl">Obrigado! <br /> Seus dados foram enviados com sucesso, em breve entraremos em contato.</p>}
        {!error && !success && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 min-w-[300px] lg:min-w-[400px] 2xl:min-w-[450px] m-auto font-medium">
            <input type="hidden" name="subject" value="Novo lead recebido" />
            <input type="hidden" name="from_name" value="innerhaus.com.br" />
            <input required type="text" name="name" placeholder="Nome" className="bg-white rounded-full px-5 py-2 outline-primary border-primary border placeholder:text-primary" minLength={2} maxLength={50} />
            <input required type="tel" name="phone" placeholder="Telefone" className="bg-white rounded-full px-5 py-2 outline-primary border-primary border placeholder:text-primary" minLength={8} maxLength={20} />
            <input required type="email" name="email" placeholder="E-mail" className="bg-white rounded-full px-5 py-2 outline-primary border-primary border placeholder:text-primary" maxLength={50} />
            {/* <textarea required name="mensagem" placeholder="Mensagem" rows={4} className="bg-white rounded-2xl px-5 py-2 resize-none outline-green" maxLength={1000} /> */}
            <button 
              disabled={loading} 
              type="submit" 
              className="bg-white border border-primary rounded-xl px-8 py-2 self-end cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-300 outline-primary disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none"
            >
             {loading ? 'Enviando...' : 'Enviar'}
            </button>
            {/* <div className="flex justify-end w-full">
              <HCaptcha 
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={onHCaptchaChange}
                loadAsync={true}
              />
            </div> */}
            <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
          </form>
          )}
      </div>
    </section>
  );
}