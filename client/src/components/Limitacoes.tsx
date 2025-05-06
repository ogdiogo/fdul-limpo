import { ShieldCheck, Gavel, BookText, UserCheck, AlertTriangle, Scale, Lock, Briefcase, Banknote, ArrowLeft } from 'lucide-react';
import { useEffect } from "react";
import { Link } from "wouter";

const Limitacoes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#081b33] text-center mb-12">
          Limitações
        </h2>

        {/* Limitações ao Segredo Bancário */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-[#ffc107]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Limitações ao Segredo Bancário</h3>
          </div>


          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Gavel className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">Introdução</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
          Esta obrigação de não revelar determinados conhecimentos ou informações de um cliente tem, todavia, as suas exceções, que se justificam naturalmente apenas por razões de força maior, como no processo executivo, no caso dos sucessores ou credores do cliente, bem como, no direito fiscal, em casos de branqueamento de capitais ou fuga fiscal, e ainda com o consentimento do próprio cliente (conforme os artigos 79 nº1 e 80º nº2 do RGICSF). 
                   </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Por se tratar de situações excecionais, que envolvem um conflito de interesses entre o direito de acesso à justiça e a tutela efetiva que este pretende acautelar, em oposição à proteção da esfera privada dos cidadãos (neste caso os clientes), o processo dessa quebra de sigilo é também naturalmente delicado, como demonstra o art. 135º CPP, ressalvando que no nº3 do mesmo artigo, onde refere “segundo o princípio da prevalência do interesse preponderante”, esse interesse tem de estar subjacente a um crime grave para poder ser levantado o sigilo bancário. 
         </p>
        </div>




        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Gavel className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">APLICAÇÃO PRÁTICA: ANÁLISE ao Acórdão do Tribunal da Relação de Évora</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
          Tomemos por análise o seguinte Acórdão do Tribunal da Relação de Évora, n.º 283/23T8ELV-B.E1, que comprova que, para além de outros, o dinheiro é um dos principais motes para brigas entre casais, e que se não existissem estas limitações ao sigilo bancário, uma das partes sairia altamente prejudicada e desfavorecida. Tendo em conta a matéria factual, a autora vem peticionar o levantamento do sigilo bancário, alegando que ambos casaram em comunhão geral de bens, e que o marido (o réu) teria se apoderado de bens comuns, fechando contas tituladas por ambos no banco, transferindo os valores para uma conta exclusivamente titulada em seu nome, extraviando o património comum do casal. Sucede que foi pedido ao Banco de Portugal para identificar todas as contas bancárias e aplicações financeiras tituladas pela requerente e pelo requerido, invocando o Banco o segredo bancário para não prestar tais informações.         
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          O Tribunal decidiu por levantar o segredo bancário, reconhecendo que a confidencialidade bancária tem um papel central no funcionamento regular da atividade financeira e na proteção de direitos pessoais como o bom nome e a privacidade, mas sublinhando que essa proteção pode ser superada sempre que estejam em causa interesses superiores, nomeadamente a tutela jurisdicional efetiva e a prevenção de lesões patrimoniais graves e de difícil reparação, sendo que esta ponderação, baseada no princípio da proporcionalidade, encontra apoio na jurisprudência do Tribunal Constitucional, que tem reiteradamente afirmado que o segredo bancário pode ser restringido quando necessário para a salvaguarda de outros direitos fundamentais. Para além disso, o Tribunal ainda sustentou que a obtenção dos dados bancários se revela indispensável para assegurar a utilidade da providência cautelar, argumentando que não se trata de uma devassa da intimidade, mas apenas de acompanhar certos movimentos financeiros concretos. Assim, ainda que a análise bancária permita inferir aspetos da vida pessoal, relações interpessoais ou hábitos de consumo que extravasam o mero interesse patrimonial, para esta causa em concreto, seria imprescindível (e por isso de uma forma excecional) que esse segredo fosse levantado, pois existe uma prevalência do interesse público da administração da justiça sobre o segredo bancário.
         </p>
        </div>



        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Gavel className="text-[#081b33]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">O Branqueamento de Capitais e a sua concretização num prisma internacional</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
          Por outro lado, somando às razões que constatam que o segredo bancário não é absoluto, encontra-se as questões de branqueamento de capitais, este traduz-se na forma de como os banqueiros dissimulam a origem criminosa de obtenção de fundos. O nosso artigo 368º -A do CP consagra o tipo deste crime, que numa era cada vez mais digital como em que vivemos, vai ganhado mais relevo se não for controlado, e o sigilo bancário seria um obstáculo a esse controlo. Da mesma forma, outros países, também dentro da União Europeia pela harmonização entre os ordenamentos, punem este tipo de tipo de crime, como no caso da Alemanha no parágrafo 261 do seu Código Penal, ou ainda a França no artigo 324.º do seu Código Penal, bem como a Itália nos artigos 648.º-bis e 648.º-ter também do seu Código Penal, entre outros. Podendo se observar uma forte coesão no combate a este crime.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Na União Europeia a Diretriz n° 91/308, de 10 de junho, foi alterada pela Diretriz n° 2001/97/CEE, de 4 de dezembro, e posteriormente transposta pela Lei n° 11/2004, de 27 de março, que estabelece o tal regime de prevenção e repressão do branqueamento de vantagens de proveniência ilícita, e além disso, a Diretriz n° 2005/60/CE, de 26 de outubro, que se refere à prevenção da utilização do sistema financeiro para efeitos de branqueamento de capitais e de financiamento do terrorismo, prevendo um dever dos Estados-Membros de prevenir o branqueamento do dinheiro, através da “vigilância da clientela” (8.°/l), e a Diretriz n° 2006/70/CE, de 1 de agosto, ambas transpostas pela Lei nº 25/2008/CE, de 5 de junho, que sofreu várias alterações, e hoje no nosso ordenamento jurídico temos a Lei n.º 83/2017, de 18 de agosto, que consagra medidas de combate ao branqueamento de capitais e ao financiamento do terrorismo, e impõe deveres preventivos às instituições financeiras, aos profissionais liberais, aos notários e a outras entidades, obrigando à adoção de mecanismos internos de controlo e à denúncia de operações que possam configurar indícios de branqueamento.         </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
          Acrescentando, num prisma internacional, a luta contra o branqueamento de capitais tem sido uma das prioridades, dando origem à adoção de instrumentos legislativos e mecanismos de cooperação cada vez mais exigentes, onde organizações como o GAFI (Grupo de Ação Financeira Internacional) têm vindo a estabelecer normas e recomendações que os Estados são instados a cumprir, sob pena de sanções ou restrições ao acesso ao sistema financeiro internacional.
Assim se o Sigilo Bancário fosse irrestrito não daria para controlar a forma como a criminalidade e o terrorismo são bancados, sendo também essencial, nestas situações, o seu levantamento.
</p>
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

export default Limitacoes;
