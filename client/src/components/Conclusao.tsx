import { ShieldCheck, Gavel, BookText, UserCheck, AlertTriangle, Scale, Lock, Briefcase, Banknote } from 'lucide-react';
import { useEffect } from "react";

const Conclusao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#081b33] text-center mb-12">
        Responsabilidade
        </h2>

        {/* Art. 84.º RGICSF e Código Penal */}
        <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-[#d4af37] mb-10">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-[#d4af37]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Art. 84.º RGICSF - Violação do Dever de Sigilo Bancário</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            Do art. 84.º RGICSF, é possível extrair que a violação do dever de segredo bancário e de supervisão é punível nos termos do Código Penal, sem prejuízo de outras sanções aplicáveis. Eventual violação do dever de segredo traduz-se, destarte, num ato ilícito, violador de um bem jurídico com dignidade penal no nosso ordenamento jurídico.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            O art. 84.º do RGICSF remete para o art. 195.º do Código Penal, que tipifica o crime de violação de segredo: “Quem, sem consentimento, revelar segredo alheio de que tenha tomado conhecimento em razão do seu estado, ofício, emprego, profissão ou arte é punido com pena de prisão até 1 ano ou com pena de multa até 240 dias”. O art. 196.º CP, por sua vez, tipifica o crime de aproveitamento indevido de segredo.
          </p>
        </div>

        {/* Responsabilidade Penal */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Gavel className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Responsabilidade Penal</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            No caso do art. 195.º do Código Penal estaremos perante um crime de natureza formal, de mera atividade, enquanto, no segundo caso, a tipicidade demonstra tratar-se, apenas, de um crime de dano. Tratando-se de um crime de natureza semi-pública, para que haja lugar a responsabilidade criminal, carecerá, tal como decorre do art. 198.º CP, que o ofendido/cliente formalize a queixa crime.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            No que ao segredo bancário concerne, acresce a eventual responsabilização contraordenacional por violação do dever, considerando a infração prevista na alínea m) do art. 210.º do RGICSF.
          </p>
        </div>

        {/* Responsabilidade Civil */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Responsabilidade Civil</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            Em matéria civil, a violação da lei enquanto ato ilícito pode, causando dano, fazer incorrer o sujeito passivo do dever em responsabilidade civil (artigo 483.º do Código Civil), uma vez que a quebra do dever de segredo bancário configura uma violação ilícita do direito de outrem.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Visando o segredo bancário proteger a reserva da vida privada, direito consagrado no art. 80.º do Código Civil, a sua violação despoletará responsabilidade civil extracontratual por factos ilícitos, estando em causa o desrespeito pelo dever geral de abstenção imposto por um direito de personalidade. Por outro lado, a violação do segredo poderá também originar responsabilidade civil contratual, uma vez que o segredo bancário é, outrossim, um dever acessório de boa fé, por força do contrato bancário.
          </p>
        </div>

        {/* Responsabilidade Disciplinar e Trabalhista */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Responsabilidade Disciplinar e Trabalhista</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            Sublinhe-se que da violação do dever de segredo, poderá ainda resultar, para o trabalhador sujeito passivo do dever de segredo, responsabilização disciplinar. Em causa estará o dever do funcionário da instituição de crédito “guardar lealdade à entidade patronal”, como se depreende do artigo 121.º, n.º 1, e) do Código do Trabalho.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Acrescente-se, ainda, que o Acordo Coletivo de Trabalho do Sector Bancário impõe, expressamente, no seu artigo 34.º/1, c), aos trabalhadores das instituições de crédito “o dever de guardar sigilo profissional, de acordo com os termos e limitações legais”.
          </p>
        </div>

        {/* Responsabilidade Fiscal */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Banknote className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Responsabilidade Fiscal</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            Em matéria fiscal, cumpre referir o segredo fiscal, previsto e regulado pelo artigo 64.º da LGT. Este assegura aos contribuintes uma garantia de confidencialidade, concretizável na obrigação dos dirigentes, funcionários e agentes da administração tributária e aduaneira, a guardar sigilo sobre os dados recolhidos que digam respeito à situação tributária do contribuinte e dos elementos de natureza pessoal que obtenham no procedimento. Abrange, ainda, as informações protegidas pelo segredo bancário, que a administração tributária tenha tido acesso, tanto por via da derrogação administrativa como através de autorização judicial.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Enquanto o segredo bancário atua enquanto espécie de armadura de proteção ao leque de informações do contribuinte, enquanto primeira linha de defesa, o sigilo fiscal funciona enquanto uma garantia posterior, atuando sobre a utilização da informação previamente adquirida.
          </p>
        </div>

        {/* Sanções pela Violação do Sigilo Fiscal */}
        <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-[#dc2626]">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-[#dc2626]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Sanções pela Violação do Sigilo Fiscal</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            A consagração do segredo fiscal corresponde à extensão e reconhecimento do direito à privacidade no âmbito da atividade tributária, abrangendo os dados de natureza pessoal dos contribuintes e os dados expressivos da sua situação tributária, os quais só podem ser revelados a terceiros nos casos expressamente previstos na lei, destinados a intervir por motivo social imperioso, estritamente na medida do necessário para satisfazer o equilíbrio dos interesses em causa.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            A sua violação dolosa encontra-se prevista e punida enquanto crime tributário comum, pelo artigo 91.º do RGIT. Esta sanção será agravada no caso do infrator revelar a informação protegida pelo segredo com o intuito de obter para si ou para outrem um benefício ilegítimo ou de causar prejuízo ao interesse público, ao sistema de segurança social ou a terceiros, conduta que culmina na aplicação de uma pena de prisão até três anos ou multa até 360 dias.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            A sua violação, a título de negligência, está prevista no artigo 115.º do RGIT, culminando na aplicação ao infrator de uma coima entre 75 a 1500 euros.
          </p>
        </div>

        <p className="text-sm text-center text-[#6b7280] mt-12">
          Última atualização: 1 de maio de 2025
        </p>
      </div>
    </section>
  );
};

export default Conclusao;
