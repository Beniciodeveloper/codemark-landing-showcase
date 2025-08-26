import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero background showing professional web development workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme sua presença online com páginas que{' '}
              <span className="gradient-brand bg-clip-text text-transparent">
                convertem e impactam!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              A CODEMARK cria landing pages profissionais que geram resultados reais 
              e transmitem credibilidade para o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contato" className="btn-brand inline-flex items-center gap-2 group">
                Solicite sua Landing Page
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#projetos" className="btn-outline-brand">
                Ver Nossos Projetos
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <span className="text-white/90">Design Profissional</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <span className="text-white/90">Alta Conversão</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <span className="text-white/90">Totalmente Responsivo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <span className="text-white/90">SEO Otimizado</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 gradient-brand rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Por que escolher a CODEMARK?
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={18} />
                    <span>Organização perfeita das informações</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={18} />
                    <span>Design que passa profissionalismo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={18} />
                    <span>Atração e conversão de clientes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={18} />
                    <span>Resultados mensuráveis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;