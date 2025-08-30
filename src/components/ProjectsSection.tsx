import { ExternalLink, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import senai80Anos from '@/assets/senai 80 anos landing page institucional.webp';
import ecomerceLedebut from '@/assets/ECOMERCE-LEDBUT.webp';
import takeovers from '@/assets/TAKEOVERS-LANDING-PAGE.webp';
import taxpay from '@/assets/taxpay-SITE-profissional-.webp';
import amsAdv from '@/assets/AMS-ADV-LANDING-PAGE.webp';
import burgerEcommerce from '@/assets/bURGUER ECOMERCE DIGITAL.webp';
import betilhas from '@/assets/BETILHAS-LANDING-PAGE.webp';
import m2Construcao from '@/assets/m2 landing page.webp';
import psicologia from '@/assets/PSICOLOGIA-LANDING-PAGE.webp';
import odontoPrime from '@/assets/odonto-prime-LANDING-PAGE.webp';

const ProjectsSection = () => {
  const allProjects = [
    {
      id: 1,
      title: 'Senai 80 Anos',
      category: 'Site Institucional',
      description: 'Página institucional desenvolvida para comemoração dos 80 anos do SENAI, destacando a história e conquistas da instituição.',
      image: senai80Anos,
      link: 'https://www.senaibahia.com.br/senai-80-anos',
      results: [
        '+200% em engajamento',
        '+150% em visitantes',
        '+90% em tempo na página'
      ],
    },
    {
      id: 2,
      title: 'Ecommerce Ledebut',
      category: 'E-commerce',
      description: 'Loja online de cosméticos com integração de pagamento completa e experiência de compra otimizada.',
      image: ecomerceLedebut,
      link: 'https://ledebut.com.br/',
      results: [
        '+300% em vendas',
        '+180% em conversão',
        '+120% em ticket médio'
      ],
    },
    {
      id: 3,
      title: 'Takeovers',
      category: 'Landing Page',
      description: 'Página de vendas especializada em inteligência artificial com foco em conversão e geração de leads.',
      image: takeovers,
      link: 'https://www.takeovers.com.br/',
      results: [
        '+400% em leads',
        '+250% em conversão',
        '+150% em ROI'
      ],
    },
    {
      id: 4,
      title: 'TaxPay',
      category: 'Site Institucional',
      description: 'Página institucional para empresa financeira com design profissional e foco em credibilidade.',
      image: taxpay,
      link: 'https://taxxpay.com.br/home',
      results: [
        '+180% em credibilidade',
        '+220% em contatos',
        '+95% em confiança'
      ],
    },
    {
      id: 5,
      title: 'AMS Advocacia',
      category: 'Site Institucional',
      description: 'Site desenvolvido para empresa de advocacia com foco em transmitir confiança e profissionalismo.',
      image: amsAdv,
      link: 'https://www.amsadvs.com.br/',
      results: [
        '+160% em clientes',
        '+200% em consultas',
        '+130% em autoridade'
      ],
    },
    {
      id: 6,
      title: 'Cardápio Online Hamburgueria',
      category: 'E-commerce',
      description: 'Cardápio online para hamburgueria com integração de pedidos direto ao WhatsApp.',
      image: burgerEcommerce,
      link: 'https://beniciodeveloper.github.io/cardapio-online',
      results: [
        '+280% em pedidos',
        '+150% em ticket médio',
        '+90% em satisfação'
      ],
    },
    {
      id: 7,
      title: 'Betilhas',
      category: 'Landing Page',
      description: 'Site desenvolvido com foco em apostas integrado com inteligência artificial para melhor experiência.',
      image: betilhas,
      link: 'https://www.betilhas.com.br/',
      results: [
        '+350% em usuários',
        '+200% em engajamento',
        '+180% em retenção'
      ],
    },
    {
      id: 8,
      title: 'M2 Construção e Reforma',
      category: 'Site Institucional',
      description: 'Site desenvolvido para construtora de engenharia com foco em projetos e credibilidade.',
      image: m2Construcao,
      link: 'https://m2construcao.com',
      results: [
        '+190% em orçamentos',
        '+250% em contatos',
        '+120% em projetos'
      ],
    },
    {
      id: 9,
      title: 'Site para Psicólogos',
      category: 'Site Institucional',
      description: 'Site desenvolvido com foco em psicólogos, priorizando confiança e acolhimento aos pacientes.',
      image: psicologia,
      link: 'https://gentle-soul-landing-page.vercel.app',
      results: [
        '+170% em consultas',
        '+200% em agendamentos',
        '+140% em confiança'
      ],
    },
    {
      id: 10,
      title: 'Odonto Prime',
      category: 'Site Institucional',
      description: 'Site para clínica odontológica com design moderno e foco na experiência do paciente.',
      image: odontoPrime,
      link: 'https://odonto-prime-web-space.vercel.app',
      results: [
        '+210% em agendamentos',
        '+180% em pacientes',
        '+160% em credibilidade'
      ],
    }
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = showAllProjects ? allProjects : allProjects.slice(0, 3);

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
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group block"
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

              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <div className="space-y-4">
            {!showAllProjects && (
              <div>
                <button
                  onClick={() => setShowAllProjects(true)}
                  className="bg-secondary text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
                >
                  Ver Mais Projetos
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
            
            <div>
              <a 
                href="https://wa.me/5571992768027?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20trabalho%20da%20CODEMARK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                </svg>
                Criar Minha Landing Page
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;