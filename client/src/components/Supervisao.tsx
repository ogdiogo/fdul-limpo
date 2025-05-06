import { ShieldCheck, Gavel, BookText, UserCheck, AlertTriangle, Scale, Lock, Briefcase, Banknote, ArrowLeft } from 'lucide-react';
import { useEffect } from "react";
import { Link } from "wouter";

const Supervisao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#081b33] text-center mb-12">
          Dever de Segredo da Autoridade de Supervisão
        </h2>

        {/* Dever de Segredo - Enquadramento */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <h3 className="text-2xl font-semibold text-[#081b33]">
            <ShieldCheck size={22} className="inline mr-2" />
            Enquadramento
          </h3>
          <p className="text-[#081b33]/90 text-justify mt-4">
          O dever de segredo da autoridade de supervisão pode ser classificado como um tipo de segredo profissional, estando este previsto no artigo 80º do Regime Geral das Instituições de Crédito e Sociedades Financeiras..
          </p>
          <p className="text-[#081b33]/90 text-justify mt-4">
          Podem ser classificados como sujeitos passivos deste dever as pessoas que exerçam ou tenham exercido funções no Banco de Portugal (Lei nº5/98, art 60º), as que lhes prestem ou tenham prestado serviços a título permanente ou ocasional e ainda as autoridades, organismos e pessoas que participem na troca de informações prevista no artigo 81º (o artigo 81º/5 refere a sujeição destas entidades ao dever de segredo).
          </p>
          <ul className="text-[#081b33]/90 text-justify mt-4 list-disc pl-6">
            <li>Factos de conhecimento público  não se encontram abrangidos pelo dever do segredo.</li>
            <li>A lei não especifica que informação é abrangida pelo segredo de supervisão. Tem-se vindo a entender que este dever abrange a informação já coberta pelo segredo bancário, ou seja, os factos e elementos respeitantes às relações da instituição com os seus clientes, assim como aqueles atinentes á vida da instituição.</li>
            <li> Assim, o segredo de supervisão abrange essencialmente os factos e elementos comunicados por instituições de crédito, ou nelas recolhidos, respeitantes em especial à sua vida interna (mas também as dos clientes).</li>
          </ul>
          <p className="text-[#081b33]/90 text-justify mt-4">
          A lei, nomeadamente o artigo 80º/3 e 4, delimita negativamente o âmbito objetivo do segredo de supervisão, ao ressalvar a “divulgação de informações confidenciais relativas a instituições de crédito no âmbito da aplicação de medidas de intervenção corretiva ou de resolução, da nomeação de uma administração provisória ou de processos de liquidação, exceto tratando-se de informações relativas a pessoas que tenham participado na recuperação ou reestruturação financeira da instituição”, assim como “informação em forma sumária ou agregada e que não permita a identificação individualizada de pessoas ou instituições”.
          </p>
          <p className="text-[#081b33]/90 text-justify mt-4">
          A conduta proibida pelo dever de Sigilo é um dever de non facere, a proibição de divulgar (o ato de transmitir a informação a terceiro) ou utilizar (o proveito próprio do sujeito passivo do dever, contraposto à vontade ou interesse do titular do segredo) a informação.          </p>
        </div>

        {/* Bem Jurídico Tutelado */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <h3 className="text-2xl font-semibold text-[#081b33]">
            <Gavel size={22} className="inline mr-2" />
            Bem Jurídico Tutelado (artigos 101º CRP e 26º CRP)
          </h3>
          <p className="text-[#081b33]/90 text-justify mt-4">
          Existem vários direitos e interesses a ser protegidos pelo Dever de Segredo da Autoridade de Supervisão, os principais e fundamentais sendo:
          </p>
          <ul className="text-[#081b33]/90 text-justify mt-4 list-disc pl-6">
            <li>O direito à reserva da intimadade da vida privada e o direito à privacidade (26º CRP)</li>
            <li>O interesse público na efetividade ou eficácia da supervisão, essencial à salvaguarda da estabilidade do sistema financeiro (101º CRP)</li>
            <li>A confiança nas instituições de crédito e financeiras</li>
          </ul>
          <p className="text-[#081b33]/90 text-justify mt-4">
            O direito à reserva da intimidade da vida privada e à privacidade é um direito fundamental, e o dever de segredo de supervisão é essencial para a não violação deste. De facto, num extrato bancário, p.e, é possível encontrar toda a informação da esfera privada da vida de alguém, nomeadamente as suas maiores despesas, preferências.
          </p>
          <p className="text-[#081b33]/90 text-justify mt-4">
          O direito à reserva da intimidade da vida privada e à privacidade é um direito fundamental, e o dever de segredo de supervisão é essencial para a não violação deste. De facto, num extrato bancário, p.e, é possível encontrar toda a informação da esfera privada da vida de alguém, nomeadamente as suas maiores despesas, preferências.
O segredo de supervisão é uma condição necessária e essencial para haver confiança no sistema.
Para o Supervisor ter o poder de exigir a prestação de todas e quaisquer informações necessárias ao exercício da supervisão, há que existir, em contrapartida, o dever de manter sigilo sobre as informações obtidas ou recolhidas.
          </p>
          <p className="text-[#081b33]/90 text-justify mt-4">
          Apenas garantindo a salvaguarda do dever de segredo do Supervisor é possível assegurar a confiança que nele detém as instituições. 
Visa-se a efetividade do exercício da sua função, tendo esta a confiança como seu pressuposto basilar.
Assim, a confiança é o principal bem jurídico tutelado, sendo esta assegurada pelo dever de segredo (entre outras coisas). Esta confiança é uma condição indispensável ao bom exercício da supervisão (bom exercíco este que tem como fim a salvaguarda da estabilidade do sistema do financeiro).
          </p>
        </div>

        {/* Exceções */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <h3 className="text-2xl font-semibold text-[#081b33]">
            <AlertTriangle size={22} className="inline mr-2" />
            Exceções
          </h3>
          <p className="text-[#081b33]/90 text-justify mt-4">
          O artigo 80º/2 refere as principais exceções ao Dever de segredo do Banco de Portugal.          </p>
          <p className="text-[#081b33]/90 text-justify mt-4">
          Não se aplicam no contexto de dever de segredo de supervisão as exceções previstas no artigo 79º.
          </p>
          <p className="text-[#081b33]/90 text-justify mt-4">
          A primeira exceção existe mediante a autorização do interessado para poder divulgar ou utilizar a informação, sendo esta transmitida ao Banco de Portugal.
A exceção por autorização do interessado existe em vários outros casos na ordem jurídica, nomeadamente em casos de administração de bens próprios do cônjuge (artigo 1678º/2/g) CC).
          </p>
          <p className="text-[#081b33]/90 text-justify mt-4">
          A segunda exceção existe nos termos previstos na lei, seja esta a lei geral tributária (artigo 63º-B da Lei Geral Tributária), a lei penal (o artigo 242º do CP, p.e) ou a lei de processo penal (artigos 135º e 182º, p.e). .
          </p>
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

export default Supervisao;
