const CreditAdvertisement = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            {/* Card principal */}
            <div className="bg-gradient-to-br from-[#113457] to-[#0c2641] rounded-2xl shadow-xl p-8 border border-[#d4af37]/20 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              
              {/* Logo & Title */}
              <div className="flex flex-col items-center text-center md:text-left">
                <div className="p-2 bg-gradient-to-b from-[#d4af37]/20 to-[#d4af37]/5 rounded-lg border border-[#d4af37]/30 shadow-md">
                  <img 
                    src="/images/logo21.png" 
                    alt="Logo Glosadores e Associados" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#d4af37] mt-4 border-b border-[#d4af37] pb-2">
                  Soluções de Crédito
                </h3>
              </div>
              
              {/* Opções de crédito */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Crédito Habitação */}
                <div className="bg-[#081b33]/30 rounded-lg p-4 border-l-2 border-[#d4af37]">
                  <h4 className="text-[#d4af37] font-semibold text-base">Crédito Habitação</h4>
                  <p className="text-[#f5f5dc] text-sm mt-2">Taxa de juro a partir de 2,5% e financiamento até 90%.</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-[#f5f5dc] font-bold mr-1 text-xs">TAN:</span>
                    <span className="text-[#d4af37] text-xs">2,5% - 3,8%</span>
                  </div>
                </div>

                {/* Crédito Pessoal */}
                <div className="bg-[#081b33]/30 rounded-lg p-4 border-l-2 border-[#d4af37]">
                  <h4 className="text-[#d4af37] font-semibold text-base">Crédito Pessoal</h4>
                  <p className="text-[#f5f5dc] text-sm mt-2">Aprovação rápida e prestações mensais fixas.</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-[#f5f5dc] font-bold mr-1 text-xs">TAN:</span>
                    <span className="text-[#d4af37] text-xs">4,9% - 8,7%</span>
                  </div>
                </div>

                {/* Crédito Automóvel */}
                <div className="bg-[#081b33]/30 rounded-lg p-4 border-l-2 border-[#d4af37]">
                  <h4 className="text-[#d4af37] font-semibold text-base">Crédito Automóvel</h4>
                  <p className="text-[#f5f5dc] text-sm mt-2">Financiamento até 100% para veículos novos e usados.</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-[#f5f5dc] font-bold mr-1 text-xs">TAN:</span>
                    <span className="text-[#d4af37] text-xs">3,8% - 6,5%</span>
                  </div>
                </div>
              </div>

              {/* Botão de ação */}
              <div className="flex flex-col justify-center items-center md:items-start space-y-2">
                <div className="bg-[#d4af37] hover:bg-[#c09c33] transition-colors duration-300 text-[#113457] font-bold text-center py-3 px-5 rounded-lg cursor-pointer">
                  Solicitar Simulação
                </div>
                <p className="text-[#f5f5dc]/70 text-xs text-center md:text-left">
                  Sujeito a análise e aprovação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditAdvertisement;