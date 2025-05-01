import { UserCheck } from "lucide-react";
import { Link } from "wouter"; // Import Link from wouter

const BankingPrivacy = () => {
  return (
    <section id="privacy" className="py-12 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#081b33]">Sigilo Bancário</h2>
        </div>

        {/* Imagem em destaque */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="https://i.imgur.com/eMn0mCOh.jpg" 
            alt="Sigilo Bancário" 
            className="w-full h-[400px] object-cover" 
          />
        </div>

        {/* Conteúdo principal com texto corrido */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-[#d4af37]/10">
          <div className="prose max-w-none text-[#081b33]/90">
            <p>
              Glosadores e Associados trata a sua privacidade e a segurança da sua informação financeira com extrema seriedade. Aderimos aos mais altos padrões de proteção de dados e leis de sigilo bancário para garantir que suas informações permaneçam confidenciais.
            </p>
          </div>
        </div>

        {/* Link de navegação */}
        <div className="mt-8 text-center">
          <Link
            href="/enquadramento"
            className="inline-block text-[#081b33] hover:text-[#d4af37] text-lg font-medium underline transition duration-200"
          >
            Clica aqui para ver o Enquadramento Legal
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BankingPrivacy;
