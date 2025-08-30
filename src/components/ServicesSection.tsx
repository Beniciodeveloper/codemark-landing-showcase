import { ShoppingCart, Building2, Rocket, Users, Zap, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'Landing Pages para E-commerce',
      description: 'Páginas otimizadas para venda de produtos físicos e digitais, com foco em conversão e experiência do usuário.',
      features: ['Integração com gateways de pagamento', 'Catálogo de produtos responsivo', 'Carrinho de compras otimizado', 'SEO para produtos'],
    },
    {
      icon: Users,
      title: 'Captação de Leads',
      description: 'Páginas específicas para capturar leads qualificados e construir sua base de contatos estratégicos.',
      features: ['Formulários otimizados', 'Integração com CRM', 'Ímãs digitais atrativos', 'Analytics avançado'],
    },
    {
      icon: Building2,
      title: 'Páginas Institucionais',
      description: 'Apresente sua empresa de forma profissional e transmita credibilidade para seus clientes e parceiros.',
      features: ['Design corporativo', 'Seções sobre a empresa', 'Equipe e valores', 'Cases de sucesso'],
    },
    {
      icon: Rocket,
      title: 'Lançamento de Produtos',
      description: 'Páginas especiais para lançamentos que geram expectativa e maximizam as vendas desde o primeiro dia.',
      features: ['Countdown timer', 'Pré-venda otimizada', 'Depoimentos sociais', 'Urgência e escassez'],
    },
    {
      icon: Zap,
      title: 'Páginas de Conversão',
      description: 'Focadas exclusivamente em converter visitantes em clientes, com técnicas avançadas de persuasão.',
      features: ['Copy persuasiva', 'Testes A/B inclusos', 'Otimização contínua', 'Relatórios detalhados'],
    },
    {
      icon: Shield,
      title: 'Manutenção e Suporte',
      description: 'Mantenha sua landing page sempre atualizada e funcionando perfeitamente com nosso suporte técnico.',
      features: ['Updates mensais', 'Backup automático', 'Suporte técnico 24/7', 'Monitoramento contínuo'],
    }
  ];

  return (
    <section id="servicos" className="section-padding gradient-section">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos diferentes tipos de landing pages, cada uma otimizada para objetivos 
            específicos do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 gradient-brand rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-2">Incluso:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 gradient-brand rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-4">
                <a 
                  href="https://wa.me/5571992768027?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20trabalho%20da%20CODEMARK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                  </svg>
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in-up">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Processo de Desenvolvimento
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 gradient-brand rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  1
                </div>
                <h4 className="font-semibold text-primary mb-2">Briefing</h4>
                <p className="text-sm text-muted-foreground">Entendemos suas necessidades e objetivos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-brand rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  2
                </div>
                <h4 className="font-semibold text-primary mb-2">Planejamento</h4>
                <p className="text-sm text-muted-foreground">Criamos a estratégia e wireframes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-brand rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  3
                </div>
                <h4 className="font-semibold text-primary mb-2">Desenvolvimento</h4>
                <p className="text-sm text-muted-foreground">Codificamos sua landing page</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-brand rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  4
                </div>
                <h4 className="font-semibold text-primary mb-2">Entrega</h4>
                <p className="text-sm text-muted-foreground">Lançamos e otimizamos os resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;