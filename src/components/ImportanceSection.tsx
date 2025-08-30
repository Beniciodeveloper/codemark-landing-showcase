import { Target, Users, TrendingUp, Award } from 'lucide-react';

const ImportanceSection = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Organização de Informações',
      description: 'Uma boa organização de conteúdo passa confiança e profissionalismo, mostrando que sua empresa é séria e competente.',
    },
    {
      icon: Users,
      title: 'Atração de Clientes',
      description: 'Design moderno e funcional atrai mais visitantes e aumenta significativamente as chances de conversão em clientes.',
    },
    {
      icon: TrendingUp,
      title: 'Aumento de Conversões',
      description: 'Landing pages otimizadas podem aumentar suas conversões em até 300%, gerando mais resultados para seu negócio.',
    },
    {
      icon: Award,
      title: 'Credibilidade Profissional',
      description: 'Um site bem estruturado transmite credibilidade e confiança, diferenciando sua marca da concorrência.',
    },
  ];

  return (
    <section id="importancia" className="section-padding gradient-section">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            A Importância de uma Landing Page Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra como uma landing page bem estruturada pode transformar sua presença online 
            e gerar mais resultados para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Por que investir em uma Landing Page?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 gradient-brand rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-primary">Primeiro Impacto:</strong> Sua landing page é frequentemente 
                    o primeiro contato do cliente com sua marca.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 gradient-brand rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-primary">Conversão Focada:</strong> Páginas específicas convertem 
                    até 5x mais que sites genéricos.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 gradient-brand rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-primary">Mensuração de Resultados:</strong> Acompanhe o desempenho 
                    e otimize continuamente seus resultados.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-4">Estatísticas que Impressionam</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-accent">68%</div>
                  <div className="text-sm text-white/80">dos visitantes deixam sites mal estruturados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">3x</div>
                  <div className="text-sm text-white/80">mais conversões com design profissional</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">94%</div>
                  <div className="text-sm text-white/80">das primeiras impressões são sobre design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;