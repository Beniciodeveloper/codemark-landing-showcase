import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl md:text-3xl font-bold">
                CODE<span className="text-accent">MARK</span>
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Especialistas em criação de landing pages de alta conversão. 
              Transformamos sua presença online com páginas que geram resultados reais.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span className="text-white/80">(71) 99276-8027</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span className="text-white/80">Salvador, BA - Brasil</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Landing Pages E-commerce
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Captação de Leads
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Páginas Institucionais
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Lançamento de Produtos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Manutenção e Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#importancia" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Por que Landing Pages?
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Nossos Projetos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} CODEMARK. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;