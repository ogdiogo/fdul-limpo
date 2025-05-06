import { UserCheck } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";


const BankingPrivacy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <section id="privacy" className="py-12 bg-[#f8f9fa] font-sans">     
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold text-[#081b33] tracking-tight relative pb-4">
            Sigilo Bancário
            <span className="block text-lg text-[#d4af37] font-medium mt-1 italic">
              O compromisso que o protege
            </span>
            <span className="block mx-auto h-1 bg-[#d4af37] rounded-full mt-2 max-w-sm"></span>
          </h2>
          <p className="mt-4 text-2xl font-semibold text-[#081b33]/90">
            Bem-vinda, Sra. Prof. Regente Rute Saraiva
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-[#d4af37]/10">
          <div className="prose max-w-none text-[#081b33]/90">
            <p>
            Na Glosadores e Associados, a confiança dos nossos clientes é o ativo mais valioso. Esta relação de confiança tem como alicerce um princípio fundamental: o Sigilo Bancário. 
            </p>
          </div>
        </div>

        {/* Navigation Links List */}
        <div className="mt-10">
        <h3 className="text-2xl font-bold text-[#081b33] mb-6">Recursos Relacionados:</h3>
        <ul className="space-y-4 text-[#081b33] text-xl">
          <li className="flex gap-2">
            <span className="w-8">I.</span>
            <Link
              href="/enquadramento"
              className="font-semibold hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
            >
              Enquadramento
            </Link>
          </li>
          <li className="flex gap-2">
            <span className="w-8">II.</span>
            <Link
              href="/limitacoes"
              className="font-semibold hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
            >
              Limitações
            </Link>
          </li>
          <li className="flex gap-2">
            <span className="w-8">III.</span>
            <Link
              href="/integracao"
              className="font-semibold hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
            >
              Integração
            </Link>
          </li>
          <li className="flex gap-2">
            <span className="w-8">IV.</span>
            <Link
              href="/supervisao"
              className="font-semibold hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
            >
              Supervisão
            </Link>
          </li>
          <li className="flex gap-2">
            <span className="w-8">V.</span>
            <Link
              href="/responsabilidade"
              className="font-semibold hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
            >
              Responsabilidade
            </Link>
          </li>
          <li className="flex gap-2">
            <span className="w-8">VI.</span>
            <Link
              href="/conclusao"
              className="font-semibold hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
            >
              Conclusão
            </Link>
          </li>
          <li className="flex gap-2">
            <span className="w-8">VII.</span>
            <Link
              href="/bibliografia"
              className="font-semibold hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
            >
              Bibliografia
            </Link>
          </li>
        </ul>
      </div>


      </div>
    </section>
  );
};

export default BankingPrivacy;
