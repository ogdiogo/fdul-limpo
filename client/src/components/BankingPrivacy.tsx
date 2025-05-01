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
            {/* Content Section */}
            <p>
              Glosadores e Associados trata a sua privacidade e a segurança da sua informação financeira com extrema seriedade. Aderimos aos mais altos padrões de proteção de dados e leis de sigilo bancário para garantir que suas informações permaneçam confidenciais.
            </p>

            {/* Link to Enquadramento page */}
            <div className="text-center mt-8">
              <a 
                href="/enquadramento" 
                className="text-lg font-semibold text-[#081b33] hover:text-[#d4af37]"
              >
                Clica aqui para ler o Enquadramento Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingPrivacy;
