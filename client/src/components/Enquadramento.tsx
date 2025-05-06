import { ShieldCheck, Gavel, BookText, UserCheck, AlertTriangle, Scale, Lock, Briefcase, Banknote, ArrowLeft } from 'lucide-react';
import { useEffect } from "react";
import { Link } from "wouter";

const Enquadramento = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#081b33] text-center mb-12">
          Sigilo Bancário
        </h2>

        {/* Noção */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-[#d4af37]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Noção</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
          O Sigilo Bancário corresponde a uma obrigação de confidencialidade, pressupondo, naturalmente, um dever de não revelar certas informações, (art.78º RGIC e art.354º CVM), ao qual estão sujeitos os membros dos órgãos de administração e fiscalização das instituições de crédito e sociedades financeiras, incluindo todos os respetivos colaboradores e outras entidades que lhes prestem serviços (art.304º/4 CVM). “Trata-se de um dever de non facere” (Cordeiro A. M., 2014). A essência do sigilo bancário, em grande parte suportada pelo direito fundamental à privacidade (art.26º CRP), tem também como base o princípio da boa fé, correspondendo, assim, a uma tutela de confiança.          </p>
        </div>

        {/* Concretizações do dever de Sigilo ao longo da História */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Gavel className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Concretizações do dever de Sigilo ao longo da História</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
          Historicamente é possível precisar algumas manifestações deste dever, tanto na Grécia antiga, como a nível do direito romano, quer mesmo no que toca ao segredo de confissão dos sacerdotes. Na antiguidade clássica, o juramento de Hipócrates é um claro exemplo de uma formulação tanto ou quanto rudimentar deste sigilo, obrigando os médicos a um dever de confidencialidade profissional relativamente às informações obtidas no exercício da sua atividade. No Direito romano, embora este dever não tenha atualmente a mesma expressão, a boa-fé e a tutela da confiança eram exigidas no trato entre advogado e cliente. O sigilo sacramental, desenvolvido no Cristianismo, e reforçado pelo IV Concílio de Latrão (1215) garantia que o conteúdo das confissões permanecesse secreto, sob pena de suspensão do sacerdócio.            </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Verificamos assim que o dever de sigilo se perpetua ao longo da história, passando não só por uma exigência contratual, como também por uma exigência de dimensão pública, necessária para o bom funcionamento de várias entidades.          </p>
        </div>

        {/* O quadro europeu do sigilo bancário */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <BookText className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">O quadro europeu do sigilo bancário</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
          O Sigilo Bancário representa um dos pilares fundamentais na relação de segurança entre as instituições financeiras e os seus clientes, tal como já foi possível verificar anteriormente. Importa, contudo, mencionar  que o grau de proteção conferido a este dever pode, naturalmente, variar de acordo com o ordenamento jurídico em causa, pelo que a comparação entre os diferentes regimes jurídicos se mostra relevante.            </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Desta forma, no quadro europeu, nomeadamente na Alemanha, a obrigação de sigilo tem um maior peso contratual, assentando na tutela da confiança formalmente consagrada pela Constituição e apoiada pelo art.2º/1 das cláusulas contratuais dos bancos, com a particularidade de uma maior flexibilidade em matéria fiscal e penal.           </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          No Luxemburgo, o sigilo bancário é elencado no art.41º da Lei de 5 de abril de 1993 sobre o setor financeiro, impondo aos profissionais deste setor um dever de confidencialidade, comparável ao do sigilo profissional. A aplicação deste dever era tradicionalmente muito ampla e rigorosa, tendo, atualmente, sido verificada uma atenuação pelas diretivas fiscais da UE com a adesão ao Common Reporting Standard (CRS). No mesmo âmbito, a Suíça, apresenta uma moldura extremamente apertada, sendo considerado um regime de difícil levantamento e de grande proteção, consagrado nos termos do art.47º da Lei Bancária Suíça.          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Já no Reino Unido, o sigilo bancário apresenta-se como uma obrigação de origem contratual e jurisprudencial, com base no famoso caso Tournier v National Provincial and Union Bank of England (1924)” It is an implied term of the contract between a banker and his customer that the banker will not divulge to third persons, without the consent of the customer express or implied, either the state of the customer's account, or any of his transactions with the bank, or any information relating to the customer acquired through the keeping of his account (…)” (TOURNIER v. NATIONAL PROVINCIAL AND UNION BANK OF ENGLAND, 1923), sendo caracterizada pela sua flexibilidade, pelo que não se encontra expressamente previsto, assentando quase que num dever contratual implícito.          </p>
        </div>

        {/* Caso Português: A evolução do Sigilo */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Caso Português: A evolução do Sigilo</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
          No caso português, a obrigação de confidencialidade postulada hoje em dia no RGIC, encontra sustento no domínio comercial que remonta ao século XVIII, tendo, no entanto, apenas sido concretizada com o aparecimento dos Bancos. O Regulamento Administrativo do Banco de Portugal, de 28 de janeiro de 1847, representa uma das primeiras manifestações do sigilo bancário na ordem jurídica portuguesa, podendo, à época, ser verificadas obrigações de confidencialidade no que concerne aos trabalhadores e membros da administração do Banco de Portugal, nomeadamente na redação do art. 83º “As operações do Banco, e os depósitos particulares, são objecto de segredo. O Empregado que o revelar será repreendido, se da revelação não resultar damno; resultando será despedido.”           </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          O regime do RGIC constitui atualmente o principal diploma legal que regula a matéria do sigilo bancário em Portugal, tendo surgido da necessidade de afirmar e assegurar uma boa conduta no exercício da atividade bancária, cujo funcionamento se mostrou, de certa forma, condicionado pela crescente popularização da Banca. Num contexto em que a relação entre banqueiro e cliente se pautava por uma maior proximidade institucional, não existia, naturalmente, uma preocupação crescente com a manutenção do segredo. No entanto, com a massificação da atividade bancária, o vínculo outrora próximo, estabelecido entre banqueiro e cliente, deu lugar a uma comunicação burocratizada e a um acesso mais restrito à informação, mostrando-se, por isso, essencial a criação de um diploma de âmbito geral que regularia esta matéria.          </p>
        </div>

        {/* A dicotomia do âmbito do sigilo */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">A dicotomia do âmbito do sigilo</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
          De uma forma geral, com a concretização e solidificação dos termos regulatórios do sigilo e as suas respetivas manifestações, emerge também uma dicotomia entre o aprofundamento do âmbito do sigilo com fundamento na privacidade e defesa do consumidor, e a sua redução com base no combate ao branqueamento de capitais, financiamento do terrorismo e evasão fiscal, tendo como fim último a segurança e bem estar da comunidade.          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Nas últimas décadas, a perceção internacional sobre o sigilo sofreu grandes alterações, fortemente motivadas pela preocupação crescente com a segurança global, justiça fiscal e integridade financeira. Por outro lado, coloca-se também a questão da preocupação com a privacidade e segurança do consumidor e a sua salvaguarda contra abusos, discriminações e riscos de exclusão económica, de forma a alcançar um maior equilíbrio na relação, por si só, naturalmente assimétrica, entre o cliente e a instituição financeira.          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Esta oposição reflete um dos principais eixos de debate no atual regime do sigilo bancário, colocando-se de um lado, a necessidade de garantir um ambiente bancário que assegure a proteção de direitos fundamentais, e do outro, a urgência de implementar mecanismos eficazes de “compliance” como resposta aos desafios da crescente criminalidade financeira global.           </p>
        </div>
          

        {/* Voltar Button */}
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

export default Enquadramento;
