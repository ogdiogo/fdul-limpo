import { Lock, Gavel, Scale, Banknote, AlertTriangle } from 'lucide-react';
import { useEffect } from "react";

const Integracao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#081b33] text-center mb-12">
          Sigilo Bancário
        </h2>

        {/* Direito Penal e Processual Penal */}
        <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-[#d4af37] mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Gavel className="text-[#d4af37]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">O Sigilo Bancário no Direito Penal e Processual Penal</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            No campo do Direito Penal, o sigilo bancário é igualmente protegido, mas há exceções que permitem sua quebra, principalmente para a comprovação de crimes. O Código Penal (artigo 195º) trata a violação do sigilo bancário como crime semi-público, ou seja, depende de queixa do ofendido para ser perseguido. Essa tipificação demonstra a proteção do sigilo bancário como um direito fundamental, mas com a possibilidade de ser flexibilizado para atender a interesses superiores.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            As causas de exclusão de ilicitude previstas no Código Penal permitem a quebra do sigilo bancário em dois casos principais:
            <br />1. Consentimento do titular da informação: Se o cliente autorizar expressamente a divulgação das informações, a quebra do sigilo torna-se legítima. Isso demonstra o caráter disponível do sigilo, ou seja, o cliente tem o direito de decidir sobre a divulgação das suas informações financeiras.
            <br />2. Ordem judicial: A quebra do sigilo também pode ocorrer mediante decisão de um juiz, que, após ponderar o valor do sigilo bancário e o interesse público ou o interesse da justiça, decide pela sua violação para garantir o bom andamento do processo penal. Este procedimento exige que a ordem seja emitida por uma autoridade judicial superior, o que visa conferir uma análise imparcial e justa da situação.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Além disso, o Código de Processo Penal (artigo 135º) regula que a quebra de sigilo bancário pode ser necessária quando se busca a comprovação de um ato criminoso. A legislação processual penal também autoriza a apreensão de documentos bancários ou registros de contas bancárias se houver suspeitas fundadas de envolvimento em atividades criminosas, como fraude fiscal ou lavagem de dinheiro.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            A Lei nº 5/2002, de 11 de Janeiro, ampliou as exceções ao sigilo bancário, introduzindo a possibilidade de acesso a informações bancárias relacionadas com atividades ilícitas, como terrorismo e tráfico de estupefacientes. Esta mudança foi impulsionada pela necessidade de alinhamento com normas internacionais após o ataque terrorista de 11 de setembro de 2001, refletindo a crescente importância de se combater atividades criminosas por meio do acesso a informações financeiras.
          </p>
        </div>

        {/* Direito Civil e Processual Civil */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">O Sigilo Bancário no Direito Civil e Processual Civil</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            O sigilo bancário também encontra regulamentação no Direito Civil, onde é considerado uma forma de proteção da privacidade e da confiança entre o cliente e a instituição financeira. No entanto, o Código Civil (artigo 340º) prevê uma exceção fundamental: a autorização do ofendido. Ou seja, se o titular da informação consentir na quebra do sigilo, a divulgação da informação torna-se lícita.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Sem esse consentimento, a quebra de sigilo bancário configura um ilícito civil, podendo resultar em responsabilidade civil. O cliente poderá exigir indemnização por danos patrimoniais ou morais, dependendo das consequências da violação do sigilo.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            O Código de Processo Civil, por sua vez, contempla situações em que a quebra de sigilo bancário é necessária para garantir a busca da verdade material no âmbito de litígios civis. Nos processos executivos e providências cautelares, por exemplo, as instituições bancárias podem ser obrigadas a fornecer informações sobre os saldos bancários ou operações financeiras de uma pessoa ou empresa para assegurar que a justiça seja feita.
          </p>
        </div>

        {/* Direito Fiscal */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Banknote className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">O Sigilo Bancário e o Direito Fiscal</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            A questão do sigilo bancário torna-se particularmente relevante no contexto do Direito Fiscal. A legislação fiscal portuguesa reconhece a importância do acesso a informações bancárias para garantir uma tributação justa e eficaz, especialmente no combate à fraude fiscal e à evasão de impostos.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            A Constituição da República Portuguesa (artigos 101º a 107º) estabelece que a administração fiscal tem como objetivo primordial garantir a prosperidade económica e a justiça social, sendo a boa tributação um princípio fundamental. O acesso a informações bancárias pode permitir uma melhor fiscalização dos rendimentos e dos lucros das empresas, possibilitando uma tributação mais justa e eficiente.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            A derrogação do sigilo bancário em nome da Administração Fiscal é, portanto, uma medida legítima para assegurar que o sistema tributário funcione de maneira eficiente e que os contribuintes paguem os impostos de acordo com sua capacidade contributiva. O artigo 103º da CRP estabelece que o sistema fiscal deve garantir a distribuição justa da riqueza e que, para tanto, é necessário que o estado tenha acesso a informações precisas sobre os rendimentos dos cidadãos e empresas.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Contudo, essa flexibilização do sigilo bancário para fins fiscais levanta questões sobre o equilíbrio entre a privacidade econômica e a necessidade de justiça tributária. A quebra do sigilo bancário, ao permitir que a administração fiscal tenha acesso a dados financeiros, pode expor aspectos da vida privada de indivíduos e empresas. No entanto, a Constituição também garante a proteção da vida privada, e a legislação fiscal deve assegurar que o uso dessas informações seja restrito e protegido contra abusos.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            A informação bancária deve ser tratada com o maior cuidado, para que se evite a violação de direitos fundamentais. Além disso, a administração fiscal tem a obrigação legal de tratar essas informações de forma confidencial e de utilizá-las apenas para os fins a que se destinam, sem extrapolar o seu uso ou comprometê-lo de forma indevida.
          </p>
        </div>

        {/* Apreciação Crítica */}
        <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-[#2563eb]">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-[#2563eb]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Apreciação Crítica</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            O sigilo bancário, enquanto proteção legal das informações pessoais e financeiras dos cidadãos, é uma pedra angular do sistema financeiro moderno. Sua função principal é garantir a confiança no sistema bancário e proteger a privacidade dos indivíduos. Contudo, as exceções previstas pela legislação – como o consentimento do titular da informação ou ordens judiciais – demonstram a necessidade de um equilíbrio entre a proteção da privacidade e a promoção de outros interesses legítimos, como a administração da justiça e a aplicação das normas fiscais.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Por um lado, o sigilo bancário é essencial para a estabilidade econômica e a preservação dos direitos dos indivíduos. Sua quebra deve ser considerada uma medida excepcional e justificada por razões de interesse público, como a investigação de crimes ou o cumprimento das obrigações fiscais. Por outro lado, a flexibilização desse sigilo, especialmente em contextos fiscais, exige uma análise crítica constante para garantir que o direito à privacidade não seja desproporcionalmente comprometido.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            A crescente interdependência entre o sigilo bancário e as necessidades do sistema fiscal e da administração pública coloca questões delicadas sobre a proteção dos dados pessoais em um mundo cada vez mais digitalizado e interconectado. A transparência fiscal e o combate à fraude são objetivos legítimos, mas não podem ser alcançados à custa de uma invasão excessiva da privacidade dos cidadãos. A legislação deve ser constantemente revisada para assegurar que o sigilo bancário continue a ser uma proteção eficaz, sem deixar de atender às necessidades de controle social e fiscal.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Em suma, o sigilo bancário deve ser visto como um direito fundamental, mas também como um conceito flexível, que pode ser limitado em situações excepcionais, sempre com a devida justificação legal e em conformidade com os princípios constitucionais de justiça, igualdade e proteção da privacidade.
          </p>
        </div>

        <p className="text-sm text-center text-[#6b7280] mt-12">
          Última atualização: 2 de maio de 2025
        </p>
      </div>
    </section>
  );
};

export default Integracao;
