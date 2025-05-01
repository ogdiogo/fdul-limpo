import { UserCheck } from "lucide-react";
import { Link } from "wouter";

const BankingPrivacy = () => {
  return (
    <section id="privacy" className="py-12 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-[#081b33] tracking-tight relative inline-block">
            <span className="relative z-10">Sigilo Bancário</span>
            <span className="block text-xl text-[#d4af37] mt-2 font-medium">O compromisso que o protege</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#d4af37] rounded-md mt-2"></span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-[#d4af37]/10">
          <div className="prose max-w-none text-[#081b33]/90">
            <p>
              Glosadores e Associados trata a sua privacidade e a segurança da sua informação financeira com extrema seriedade. Aderimos aos mais altos padrões de proteção de dados e leis de sigilo bancário para garantir que suas informações permaneçam confidenciais.
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
                Enquadramento Legal
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
