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

        {/* Limitações ao Segredo Bancário */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-[#ffc107]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Limitações ao Segredo Bancário</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            Esta obrigação de não revelar determinados conhecimentos ou informações de um cliente tem, todavia, as suas exceções, que se justificam naturalmente apenas por razões de força maior, como no processo executivo, no caso dos sucessores ou credores do cliente, bem como, no direito fiscal, em casos de branqueamento de capitais ou fuga fiscal, e ainda com o consentimento do próprio cliente (conforme os artigos 79 nº1 e 80 nº2 do RGICSF).
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Por se tratar de situações excecionais, que envolvem um conflito de interesses entre o direito de acesso à justiça e a tutela efetiva que este pretende acautelar, em oposição à proteção da esfera privada dos cidadãos (neste caso os clientes), o processo dessa quebra de sigilo é também naturalmente delicado, como demonstra o art. 135o CPP, ressalvando que no no3 do mesmo artigo, onde refere “segundo o princípio da prevalência do interesse preponderante”, esse interesse tem de estar subjacente a um crime grave para poder ser levantado o sigilo bancário.           </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Tomemos por análise o seguinte Acórdão do Tribunal da Relação de Évora, n.º 283/23T8ELV-B.E1, que comprova que, para além de outros, o dinheiro é um dos principais motes para brigas entre casais, e que se não existissem estas limitações ao sigilo bancário, uma das partes sairia altamente prejudicada e desfavorecida. Tendo em conta a matéria factual, a autora vem peticionar o levantamento do sigilo bancário, alegando que ambos casaram em comunhão geral de bens, e que o marido (o réu) teria se apoderado de bens comuns, fechando contas tituladas por ambos no banco, transferindo os valores para uma conta exclusivamente titulada em seu nome, extraviando o património comum do casal. Sucede que foi pedido ao Banco de Portugal para identificar todas as contas bancárias e aplicações financeiras tituladas pela requerente e pelo requerido, invocando o Banco o segredo bancário para não prestar tais informações. </p>
            <p className="text-[#081b33]/90 mt-4 text-justify">
            O Tribunal decidiu por levantar o segredo bancário, reconhecendo que a confidencialidade bancária tem um papel central no funcionamento regular da atividade financeira e na proteção de direitos pessoais como o bom nome e a privacidade, mas sublinhando que essa proteção pode ser superada sempre que estejam em causa interesses superiores, nomeadamente a tutela jurisdicional efetiva e a prevenção de lesões patrimoniais graves e de difícil reparação, sendo que esta ponderação, baseada no princípio da proporcionalidade, encontra apoio na jurisprudência do Tribunal Constitucional, que tem reiteradamente afirmado que o segredo bancário pode ser restringido quando necessário para a salvaguarda de outros direitos fundamentais. Para além disso, o Tribunal ainda sustentou que a obtenção dos dados bancários se revela indispensável para 
            assegurar a utilidade da providência cautelar, argumentando que não se trata de uma devassa da intimidade, mas apenas de acompanhar certos movimentos financeiros concretos. Assim, ainda que a análise bancária permita inferir aspetos da vida pessoal, relações interpessoais ou hábitos de consumo que extravasam o mero interesse patrimonial, para esta causa em concreto, seria imprescindível (e por isso de uma forma excecional) que esse segredo fosse levantado, pois existe uma prevalência do interesse público da administração da justiça sobre o segredo bancário. </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Por outro lado, somando às razões que constatam que o segredo bancário não é absoluto, encontra-se as questões de branqueamento de capitais, este traduz-se na forma de como os banqueiros dissimulam a origem criminosa de obtenção de fundos. O nosso artigo 368o -A do CP consagra o tipo deste crime, que numa era cada vez mais digital como em que vivemos, vai ganhado mais relevo se não for controlado, e o sigilo bancário seria um obstáculo a esse controlo. Da mesma forma, outros países, também dentro da União Europeia pela harmonização entre os ordenamentos, punem este tipo de tipo de crime, como no caso da Alemanha no parágrafo 261 do seu Código Penal, ou ainda a França no artigo 324.o do seu Código Penal, bem como a Itália nos artigos 648.o-bis e 648.o-ter também do seu Código Penal, entre outros. Podendo se observar uma forte coesão no combate a este crime.           </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Na União Europeia a Diretriz n° 91/308, de 10 de junho, foi alterada pela Diretriz n° 2001/97/CEE, de 4 de dezembro, e posteriormente transposta pela Lei n° 11/2004, de 27 de março, que estabelece o tal regime de prevenção e repressão do branqueamento de vantagens de proveniência ilícita, e além disso, a Diretriz n° 2005/60/CE, de 26 de outubro, que se refere à prevenção da utilização do sistema financeiro para efeitos de branqueamento de capitais e de financiamento do terrorismo, prevendo um dever dos Estados-Membros de prevenir o branqueamento do dinheiro, através da “vigilância da clientela” (8.°/l), e a Diretriz n° 2006/70/CE, de 1 de agosto, ambas transpostas pela Lei no 25/2008/CE, de 5 de junho, que sofreu várias alterações, e hoje no nosso ordenamento jurídico temos a Lei n.o 83/2017, de 18 de agosto, que consagra medidas de combate ao branqueamento de capitais e ao financiamento do terrorismo, e impõe deveres preventivos às instituições financeiras, aos profissionais liberais, aos notários e a outras entidades, obrigando à adoção de mecanismos internos de controlo e à denúncia de operações que possam configurar indícios de branqueamento.           </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Acrescentando, num prisma internacional, a luta contra o branqueamento de capitais tem sido uma das prioridades, dando origem à adoção de instrumentos legislativos e mecanismos de cooperação cada vez mais exigentes, onde organizações como o GAFI (Grupo de Ação Financeira Internacional) têm vindo a 
          estabelecer normas e recomendações que os Estados são instados a cumprir, sob pena de sanções ou restrições ao acesso ao sistema financeiro internacional. 
          Assim se o Sigilo Bancário fosse irrestrito não daria para controlar a forma como a criminalidade e o terrorismo são bancados, sendo também essencial, nestas situações, o seu levantamento. 
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Por fim, importa ainda referir um outro ponto que pode exigir a quebra do sigilo fiscal que é o da fiscalização tributária. Primeiramente, há que entender que a fiscalização tributária desempenha um papel central no funcionamento do sistema fiscal, constituindo-se como um instrumento essencial para assegurar o cumprimento voluntário das obrigações fiscais e para combater fenómenos como a evasão e a fraude fiscal, sendo que esta atividade, levada a cabo pelas autoridades tributárias, visa controlar a veracidade das declarações prestadas pelos contribuintes, bem como verificar o correto cumprimento das normas legais em matéria de impostos, garantindo que todos contribuem de forma justa para o financiamento das funções do Estado, a fiscalização protege a justiça fiscal e promove a confiança no sistema.           </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Logo, apenas em casos muito excecionais a Administração e a Fiscalização Tributárias têm acesso a elementos bancários ou similares dos contribuintes, por se tratar de um dos direitos fundamentais como o da inviolabilidade do domicilio e da correspondência (artigo 34o CRP), o interesse para que a AT possa ter esse acesso tem de ser superior e controlado, por isso apenas é permitido quando ordenado pela autoridade judicial competente em pedido fundamentado pelo respetivo funcionário da fiscalização tributária, conforme o artigo 34o no3 do Decreto-Lei n° 363/78, de 28 de novembro, confirmado ainda pelo artigo 63o no2 da Lei Geral Tributária, aprovada pelo Decreto-Lei n° 398/98, de 17 de dezembro, que só permite a quebra do sigilo bancário pelas autoridades fiscais mediante prévia autorização judicial. Todavia o artigo 63o -B LGT, prevê a derrogação dessa autorização nas situações elencadas do artigo, como por exemplo quando existam indícios da prática de crime em matéria tributária, ou quando se verifiquem indícios da falta de veracidade do declarado ou esteja em falta declaração legalmente exigível, entre outros. Embora a constitucionalidade desta medida ainda seja contestável, por violar o artigo 26°no1CRP (direito à reserva da intimidade da vida privada), trata-se de hipóteses muito excecionais e de pouca aplicação, e como afirma o professor Menezes Cordeiro “prevalecerá o bom senso da Administração Tributária”, como deve prevalecer sempre em tudo.           </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Por isso, se por um lado a fiscalização tributária tem uma função preventiva e pedagógica, na medida em que contribui para dissuadir comportamentos ilícitos e para reforçar a perceção da inevitabilidade do cumprimento fiscal, sendo fundamental para a consolidação de uma cultura fiscal, sobretudo num contexto em que a complexidade das relações económicas e a mobilidade dos capitais favorecem estratégias sofisticadas de planeamento fiscal agressivo e de ocultação de rendimentos, por outro, deve ser exercida com equilíbrio e discernimento, garantindo que o objetivo da eficiência fiscal não compromete os direitos fundamentais dos cidadãos, para assim poder existir uma relação de confiança entre o fisco e os contribuintes, condição necessária para a estabilidade e legitimidade do sistema tributário.           </p>
          </div>       

          
        {/* Voltar Button */}
        <div className="mt-10 flex justify-center">
          <Link href="/">
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
