import { Gavel, Scale, Banknote, ArrowLeft } from 'lucide-react';
import { useEffect } from "react";
import { Link } from "wouter";


const Integracao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionStyle = "bg-white rounded-2xl shadow-md p-8 mb-10 border-l-4";
  const textStyle = "text-[#081b33]/90 text-justify";
  const headingStyle = "text-2xl font-semibold text-[#081b33]";
  const iconContainer = "flex items-center gap-3 mb-4";

  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#081b33] text-center mb-12">
          Integração
        </h2>

        {/* Direito Penal e Processual Penal */}
        <div className={`${sectionStyle} border-[#d4af37]`}>
          <div className={iconContainer}>
            <Gavel className="text-[#d4af37] w-6 h-6" />
            <h3 className={headingStyle}>
              O Sigilo Bancário no Direito Penal e Processual Penal
            </h3>
          </div>
          <p className={textStyle}>
          No campo do Direito Penal, o sigilo bancário é igualmente protegido, existindo, no entanto algumas exceções que permitem a quebra do mesmo, principalmente no que diz respeito à comprovação de crimes. O art. 195º CP trata a violação do sigilo bancário como crime semi-público, dependendo da queixa do ofendido para que possa proceder. Essa tipificacção demonstra a proteção do sigilo bancário como um direito fundamental com a possibilidade de ser flexibilizado para atender a interesses relevantes e superiores. As causas de exclusão da ilicitude previstas no Código Penal permitem  a quebra do sigilo bancário em duas ocasiões principais:           </p>

          <h4 className="text-lg font-semibold text-[#081b33] flex items-center gap-2 mt-6">
            <Gavel className="w-4 h-4 text-[#d4af37]" />
            Consentimento do titular da informação
          </h4>
          <p className={textStyle}>
          Mediante autorização expressa do cliente, a divulgação de certas informações torna-se legítima pela quebra do sigilo, demonstrando, desta forma, o caráter disponível do sigilo, na medida em que o cliente tem o direito de decidir sobre tal divulgação.           </p>

          <h4 className="text-lg font-semibold text-[#081b33] flex items-center gap-2 mt-6">
            <Gavel className="w-4 h-4 text-[#d4af37]" />
            Ordem Judicial
          </h4>
          <p className={textStyle}>
          A quebra do sigilo pode também ocorrer mediante a decisão de um juiz, que, após ponderar o valor do sigilo bancário e o interesse público ou o interesse da justiça, decide pela sua violação para garantir o bom seguimento do processo penal. Este procedimento exige que a ordem seja emitida por uma autoridade judicial superior, o que visa conferir uma análise imparcial e justa da situação.           </p>

          <div className="border-t border-gray-200 my-6"></div>

          <p className={`${textStyle} mt-4`}>
          Além disso, o artigo 135º CPP  estabelece que  quebra de sigilo bancário pode ser necessária quando se procura a comprovação de determinados atos criminosos. A legislação processual penal autoriza também a apreensão de documentos e registos bancários mediante suspeitas fundadas de envolvimento em atividades criminosas, como fraude fiscal ou lavagem de dinheiro.           </p>
          <p className={`${textStyle} mt-4`}>
          A Lei nº 5/2002, de 11 de Janeiro, ampliou as exceções ao sigilo bancário, introduzindo a possibilidade de acesso a informações bancárias relacionadas com atividades ilícitas, como o terrorismo e o tráfico de estupefacientes. Esta alteração foi impulsionada pela necessidade de alinhamento com várias normas internacionais, no seguimento do ataque terrorista de 11 de setembro de 2001 em Nova York, refletindo assim a crescente importância do combate à criminalidade transnacional, mediante a monitorização de transações financeiras suspeitas. </p>        
          </div>

        {/* Direito Civil e Processual Civil */}
        <div className={sectionStyle}>
          <div className={iconContainer}>
            <Scale className="text-[#081b33] w-6 h-6" />
            <h3 className={headingStyle}>
              O Sigilo Bancário no Direito Civil e Processual Civil
            </h3>
          </div>
          <p className={textStyle}>
            O sigilo bancário também encontra regulamentação no Direito Civil, onde é considerado uma forma de proteção da privacidade e da confiança entre o cliente e a instituição financeira. No entanto, o Código Civil (artigo 340º) prevê uma exceção fundamental: a autorização do ofendido. Ou seja, se o titular da informação consentir na quebra do sigilo, a divulgação da informação torna-se lícita.
          </p>

          <h4 className="text-lg font-semibold text-[#081b33] flex items-center gap-2 mt-6">
            <Scale className="w-4 h-4 text-[#081b33]" />
            Consentimento no Direito Civil
          </h4>
          <p className={textStyle}>
          O sigilo bancário encontra também regulação no Direito Civil, onde é considerado uma forma de proteção da privacidade e da confiança entre o cliente e a instituição financeira.  O art. 340º CC prevê, contudo, uma exceção fundamental: a autorização do ofendido, isto é, mediante consentimento do titular da informação relativamente à quebra do sigilo, a divulgação da informação torna-se lícita, o que sem a mesma, configura um ato ilícito, podendo resultar em responsabilidade civil e, por sua vez, no dever de indemnizar por danos patrimoniais ou morais, dependendo das consequências da violação do sigilo.           </p>

          <div className="border-t border-gray-200 my-6"></div>

          <p className={`${textStyle} mt-4`}>
          O sigilo bancário encontra também regulação no Direito Civil, onde é considerado uma forma de proteção da privacidade e da confiança entre o cliente e a instituição financeira.  O art. 340º CC prevê, contudo, uma exceção fundamental: a autorização do ofendido, isto é, mediante consentimento do titular da informação relativamente à quebra do sigilo, a divulgação da informação torna-se lícita, o que sem a mesma, configura um ato ilícito, podendo resultar em responsabilidade civil e, por sua vez, no dever de indemnizar por danos patrimoniais ou morais, dependendo das consequências da violação do sigilo.           </p>
        </div>

        {/* Direito Fiscal */}
        <div className={sectionStyle}>
          <div className={iconContainer}>
            <Banknote className="text-[#081b33] w-6 h-6" />
            <h3 className={headingStyle}>
              O Sigilo Bancário e o Direito Fiscal
            </h3>
          </div>
          <p className={textStyle}>
          A questão do sigilo bancário torna-se particularmente relevante no contexto do Direito Fiscal. A legislação fiscal portuguesa reconhece a importância do acesso a informações bancárias para garantir uma tributação justa e eficaz, especialmente no combate à fraude fiscal e à evasão de impostos. A CRP, nos artigos 101º a 107º estabelece que a administração fiscal tem como objetivo primordial garantir a prosperidade económica e a justiça social, tendo como princípio fundamental a boa tributação. O acesso às informações bancárias pode permitir uma melhor fiscalização dos rendimentos e lucros das empresas, possibilitando então uma tributação mais justa, eficiente e equilibrada. 
          </p>
          <h4 className="text-lg font-semibold text-[#081b33] flex items-center gap-2 mt-6">
            <Banknote className="w-4 h-4 text-[#081b33]" />
            Acesso para Tributação
          </h4>
          <p className={textStyle}>
          A CRP, nos artigos 101º a 107º estabelece que a administração fiscal tem como objetivo primordial garantir a prosperidade económica e a justiça social, tendo como princípio fundamental a boa tributação. O acesso às informações bancárias pode permitir uma melhor fiscalização dos rendimentos e lucros das empresas, possibilitando então uma tributação mais justa, eficiente e equilibrada.           </p>

          <div className="border-t border-gray-200 my-6"></div>

          <p className={`${textStyle} mt-4`}>
          A derrogação do sigilo bancário em nome da Administração Fiscal é uma medida legítima para assegurar que o sistema tributário funcione de maneira eficiente e que todos os contribuintes paguem os impostos de acordo com sua capacidade contributiva. O artigo 103º da CRP estabelece que o sistema fiscal deve garantir uma distribuição justa da riqueza e que, para tal, é necessário que o estado tenha acesso a informações precisas sobre os rendimentos dos cidadãos e das pessoas coletivas.           </p>
          <p className={`${textStyle} mt-4`}>
          Contudo, essa flexibilização do sigilo bancário para fins fiscais levanta questões sobre o equilíbrio entre a privacidade económica e a necessidade de justiça tributária. A quebra do sigilo bancário, ao permitir que a administração fiscal tenha acesso aos dados financeiros, está a expor aspetos da vida privada dos cidadãos e das empresas. A Constituição também procura, por outro lado, garantir a proteção da vida privada, e a legislação fiscal deve assegurar que o uso dessas informações seja restrito e protegido contra abusos.          </p>
          <p className={`${textStyle} mt-4`}>
          A informação bancária deve ser tratada com o maior cuidado, para que se evite a violação dos direitos fundamentais. Além disso, a administração fiscal tem a obrigação legal de tratar essas informações de forma confidencial e de utilizá-las apenas para os fins a que se destinam, sem extrapolar o seu uso ou comprometê-lo de forma indevida.           </p>
          
        </div>

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

export default Integracao;
