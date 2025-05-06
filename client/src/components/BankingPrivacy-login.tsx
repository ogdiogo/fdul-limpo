import { UserCheck } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";


const BankingPrivacy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <section id="privacy" className="py-12 bg-[#f8f9fa] font-sans">     
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-5xl font-extrabold text-[#081b33] tracking-tight relative pb-4">
            Sigilo Bancário
            <span className="block text-lg text-[#d4af37] font-medium mt-1 italic">
              O compromisso que o protege
            </span>
            <span className="block w-24 h-1 bg-[#d4af37] rounded-full mt-2 mx-auto"></span>
          </h2>
          <p className="mt-4 text-2xl font-semibold text-[#081b33]/90">
            Bem-vinda, Sra. Prof. Regente Rute Saraiva
          </p>
        </div>
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
          <h3 className="text-xl font-bold text-[#081b33] mb-4">Recursos Relacionados:</h3>
          <ul className="space-y-3 pl-4 list-disc text-[#081b33]">
            <li>
              <Link
                href="/enquadramento"
                className="text-lg font-medium text-[#081b33] hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
              >
                Enquadramento
              </Link>
            </li>
            <li>
              <Link
                href="/integracao"
                className="text-lg font-medium text-[#081b33] hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
              >
                Integração
              </Link>
            </li>
            <li>
              <Link
                href="/supervisao"
                className="text-lg font-medium text-[#081b33] hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
              >
                Supervisão
              </Link>
            </li>
            <li>
              <Link
                href="/responsabilidade"
                className="text-lg font-medium text-[#081b33] hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
              >
                Responsabilidade
              </Link>
            </li>
            <li>
              <Link
                href="/conclusao"
                className="text-lg font-medium text-[#081b33] hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
              >
                Conclusão
              </Link>
            </li>
            <li>
              <Link
                href="/bibliografia"
                className="text-lg font-medium text-[#081b33] hover:text-[#d4af37] transition duration-200 underline underline-offset-4 decoration-[#d4af37]/50"
              >
                Bibliografia
              </Link>
            </li>
            {/* Add more list items here in the future */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BankingPrivacy;
