import { ExternalLink, ArrowRight } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Premium',
      category: 'Loja Virtual',
      description: 'Landing page para loja de produtos premium que aumentou as vendas em 250% nos primeiros 3 meses.',
      image: project1,
      results: [
        '+250% em vendas',
        '+180% em conversão',
        '+90% em tráfego orgânico'
      ],
      technologies: ['React', 'Tailwind CSS', 'Stripe Integration']
    },
    {
      id: 2,
      title: 'Consultoria Empresarial',
      category: 'Serviços B2B',
      description: 'Página institucional para consultoria que gerou 150+ leads qualificados em 6 meses.',
      image: project2,
      results: [
        '+150 leads qualificados',
        '+300% em contatos',
        '+85% em credibilidade'
      ],
      technologies: ['WordPress', 'Custom CSS', 'Analytics']
    },
    {
      id: 3,
      title: 'Startup Tecnológica',
      category: 'SaaS',
      description: 'Landing page para startup que captou R$ 2M em investimentos e 5.000+ usuários beta.',
      image: project3,
      results: [
        'R$ 2M captados',
        '5.000+ usuários beta',
        '+400% em engajamento'
      ],
      technologies: ['Next.js', 'TypeScript', 'Framer Motion']
    }
  ];

  return (
    <section id="projetos" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nossos Projetos de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja como transformamos ideias em landing pages que geram resultados excepcionais 
            para nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Projeto ${project.title} - ${project.category}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Resultados:</h4>
                  <div className="space-y-1">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 gradient-brand rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <a href="#contato" className="btn-brand inline-flex items-center gap-2 group">
            Criar Minha Landing Page
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;