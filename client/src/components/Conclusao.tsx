import { ShieldCheck, Gavel, BookText, UserCheck, AlertTriangle, Scale, Lock, Briefcase, Banknote, ArrowLeft } from 'lucide-react';
import { useEffect } from "react";
import { Link } from "wouter";

const Conclusao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#081b33] text-center mb-12">
          Conclusão
        </h2>

        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-[#d4af37]" />
            <h3 className="text-2xl font-semibold text-[#081b33]">O Sigilo Bancário</h3>
          </div>
          <p className="text-[#081b33]/90 text-justify">
            O segredo bancário é fundamental na relação estabelecida entre a Instituição de Crédito e o seu Cliente, que deve prezar e salvaguardar a privacidade do cliente e pautar-se pela confiança entre as partes.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            O sigilo constitui uma vertente do direito Fundamental à reserva da vida privada, abrangendo a esfera pessoal do indivíduo e a sua esfera económica e respetivos aspetos da vida patrimonial.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Encontrando-se expressamente previsto e disciplinado no RGICSF, o segredo bancário apresenta-se não enquanto um direito absoluto, mas sim como um direito relativo que, destarte, comporta exceções, permitindo a revelação a terceiros dos elementos protegidos.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            Constata-se que, atualmente, caminhamos no sentido da flexibilização das circunstâncias em que o sigilo bancário pode ser afastado pela administração fiscal ou por meios administrativos, sempre que em causa se convoquem situações de suspeita de fraude ou evasão fiscal, lesivas do interesse público na arrecadação de receitas, necessárias à satisfação das necessidades coletivas do Estado, acrescidas do princípio da igualdade fiscal e do dever fundamental de pagar impostos.
          </p>
          <p className="text-[#081b33]/90 mt-4 text-justify">
            De facto, conceder à Administração a possibilidade de aceder, sem prévio controlo judicial, a tudo quanto respeite aos cidadãos, sem o seu consentimento, seria um retrocesso significativo no conceito de Estado de Direito Democrático e do princípio da separação de poderes. A defesa dos direitos de personalidade e dos direitos fundamentais requererá, sempre, lei expressa e via jurisdicional, como modo de limitar determinados direitos, entre os quais o sigilo bancário e aquilo que ele representa.
          </p>
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

export default Conclusao;
