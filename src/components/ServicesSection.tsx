import { ShoppingCart, Building2, Rocket, Users, Zap, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'Landing Pages para E-commerce',
      description: 'Páginas otimizadas para venda de produtos físicos e digitais, com foco em conversão e experiência do usuário.',
      features: ['Integração com gateways de pagamento', 'Catálogo de produtos responsivo', 'Carrinho de compras otimizado', 'SEO para produtos'],
      price: 'A partir de R$ 2.500'
    },
    {
      icon: Users,
      title: 'Captação de Leads',
      description: 'Páginas específicas para capturar leads qualificados e construir sua base de contatos estratégicos.',
      features: ['Formulários otimizados', 'Integração com CRM', 'Ímãs digitais atrativos', 'Analytics avançado'],
      price: 'A partir de R$ 1.800'
    },
    {
      icon: Building2,
      title: 'Páginas Institucionais',
      description: 'Apresente sua empresa de forma profissional e transmita credibilidade para seus clientes e parceiros.',
      features: ['Design corporativo', 'Seções sobre a empresa', 'Equipe e valores', 'Cases de sucesso'],
      price: 'A partir de R$ 2.200'
    },
    {
      icon: Rocket,
      title: 'Lançamento de Produtos',
      description: 'Páginas especiais para lançamentos que geram expectativa e maximizam as vendas desde o primeiro dia.',
      features: ['Countdown timer', 'Pré-venda otimizada', 'Depoimentos sociais', 'Urgência e escassez'],
      price: 'A partir de R$ 3.000'
    },
    {
      icon: Zap,
      title: 'Páginas de Conversão',
      description: 'Focadas exclusivamente em converter visitantes em clientes, com técnicas avançadas de persuasão.',
      features: ['Copy persuasiva', 'Testes A/B inclusos', 'Otimização contínua', 'Relatórios detalhados'],
      price: 'A partir de R$ 2.800'
    },
    {
      icon: Shield,
      title: 'Manutenção e Suporte',
      description: 'Mantenha sua landing page sempre atualizada e funcionando perfeitamente com nosso suporte técnico.',
      features: ['Updates mensais', 'Backup automático', 'Suporte técnico 24/7', 'Monitoramento contínuo'],
      price: 'A partir de R$ 500/mês'
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
                <div className="text-2xl font-bold text-accent mb-3">
                  {service.price}
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
                  Solicitar Orçamento
                </button>
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