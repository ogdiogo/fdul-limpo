import { Book } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'wouter';

const Bibliografia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-[#081b33] text-center mb-12 flex items-center justify-center gap-3">
          <Book size={24} className="text-[#081b33]" />
          Bibliografia
        </h2>

        <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-[#6366f1]">
          <ul className="list-disc pl-6 space-y-6 text-[#081b33]/90 text-justify leading-relaxed">
            <li>
              Barbosa, P. E. H. (2005). <i>Do valor do sigilo — O sigilo bancário, sua evolução, limites: em especial o sigilo bancário no domínio fiscal — A reforma fiscal.</i> <b>Revista da Faculdade de Direito da Universidade de Lisboa</b>, 46(2), 1229–1292. Coimbra Editora.
            </li>
            <li>
              Centro de Estudos Judiciários. (2015). <i>Direito bancário</i> [E-book]. Coleção de Formação Contínua. Lisboa: Centro de Estudos Judiciários. Disponível em: <a href="http://www.cej.mj.pt/cej/recursos/ebooks/civil/Direito_Bancario.pdf" target="_blank" className="text-blue-600 underline">cej.mj.pt</a>
            </li>
            <li>
              Cordeiro, A. M. (2014). <i>Direito Bancário.</i> Coimbra: Almedina.
            </li>
            <li>
              Saraiva, R. (2015). <i>Direito dos Mercados Financeiros.</i> Lisboa: AAFDL.
            </li>
            <li>
              Raquel Ferreira Coelho, Vanessa (Porto, 30 de Novembro de 2012). <i>O Sigilo Bancário: Problemas Fiscais e Constitucionais</i>: Dissertação de Mestrado em Direito Fiscal.
            </li>
            <li>
              Tribunal da Relação de Évora. (2022, 21 de abril). <i>Acórdão do Tribunal da Relação de Évora, Processo n.º 207/21.0T9VDL.E1</i> [Acórdão]. DGSI. Disponível em: <a href="https://www.dgsi.pt/jtre.nsf/134973db04f39bf2802579bf005f080b/636767b13573b57080258a27002f511c?OpenDocument" target="_blank" className="text-blue-600 underline">dgsi.pt</a>
            </li>
          </ul>
        </div>

        <p className="text-sm text-center text-[#6b7280] mt-12">
          Última atualização: 1 de maio de 2025
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/banking-privacy-login">
            <a className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#081b33] text-white text-sm font-medium rounded-2xl shadow hover:bg-[#0a274d] transition">
              <ArrowLeft size={18} />
              Voltar
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bibliografia;
