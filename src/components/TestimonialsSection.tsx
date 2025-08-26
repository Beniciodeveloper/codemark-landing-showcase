import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'Silva & Associados',
      role: 'CEO',
      content: 'A CODEMARK transformou completamente nossa presença online. Nossa nova landing page gerou 300% mais leads nos primeiros dois meses. O profissionalismo e atenção aos detalhes são excepcionais.',
      rating: 5,
      result: '+300% em leads'
    },
    {
      name: 'João Santos',
      company: 'TechStart Brasil',
      role: 'Founder',
      content: 'Trabalhar com a CODEMARK foi um divisor de águas para nossa startup. A landing page criada nos ajudou a captar nosso primeiro round de investimentos. Design impecável e resultados surpreendentes.',
      rating: 5,
      result: 'R$ 2M captados'
    },
    {
      name: 'Ana Costa',
      company: 'Boutique Premium',
      role: 'Proprietária',
      content: 'Desde o lançamento da nossa nova landing page, as vendas online triplicaram. A CODEMARK entendeu perfeitamente nosso público-alvo e criou uma experiência de compra excepcional.',
      rating: 5,
      result: '+250% em vendas'
    },
    {
      name: 'Carlos Mendes',
      company: 'Consultoria Estratégica',
      role: 'Diretor',
      content: 'A credibilidade que nossa empresa ganhou com a nova landing page é impressionante. Clientes comentam sobre o profissionalismo do site antes mesmo de falar sobre nossos serviços.',
      rating: 5,
      result: '+180% em credibilidade'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja os depoimentos reais de empresários que transformaram seus resultados 
            com nossas landing pages profissionais.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in">
            <Quote className="text-accent w-12 h-12 mb-6" />
            
            <div className="mb-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-primary">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-accent">
                  {testimonials[currentTestimonial].result}
                </div>
                <div className="text-sm text-muted-foreground">
                  Resultado obtido
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-accent' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 animate-fade-in-up">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-accent mb-2">150+</div>
            <div className="text-muted-foreground">Projetos Entregues</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação dos Clientes</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-accent mb-2">300%</div>
            <div className="text-muted-foreground">Aumento Médio em Conversões</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-accent mb-2">24h</div>
            <div className="text-muted-foreground">Tempo de Resposta</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;