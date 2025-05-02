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
          <div className="prose max-w-none text-[#081b33]/90 justify-center">
            <p>Glosadores e Associados trata da sua privacidade e da sua informação financeira com segurança e seriedade. 
              Aderimos aos mais altos padrões de proteção de dados e leis de sigilo bancário para garantir que as suas informações permaneçam confidenciais.</p>            
            <p> Para consultar os recursos disponíveis, por favor aceda à sua área de cliente.</p>          
          </div>

          {/* Área de Cliente button */}
          <div className="text-center mt-10">
            <Link href="/login" className="inline-flex items-center gap-2 px-6 py-3 text-white bg-[#081b33] hover:bg-[#0f2a4c] rounded-full shadow-lg transition duration-200 text-lg font-semibold">
              <UserCheck className="w-5 h-5" />
              Área de Cliente
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingPrivacy;
