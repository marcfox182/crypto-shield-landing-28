import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Investi com segurança mesmo começando com R$200.",
      author: "Patricia R.",
      role: "Enfermeira",
      avatar: "/lovable-uploads/ec703549-c10b-404b-84f9-fcfa1f176a2e.png"
    },
    {
      text: "Morria de medo de golpe. Agora tenho minha carteira segura.",
      author: "Maria S.",
      role: "Mãe de 2 filhos",
      avatar: "/lovable-uploads/c6c2afff-0ccf-4589-b86b-fb5f975adefd.png"
    },
    {
      text: "A Dani explica de forma simples. Em 2 encontros entendi tudo.",
      author: "João P.",
      role: "Pai e empresário",
      avatar: "/lovable-uploads/9a7eb53f-db4f-4e92-b944-0ec1c25eb893.png"
    },
    {
      text: "Já comecei minha reserva para os filhos.",
      author: "Ana L.",
      role: "Professora",
      avatar: "/lovable-uploads/3cea0ac3-2998-48f8-ada0-f43176a8f260.png"
    },
    {
      text: "As checklists são ouro puro.",
      author: "Carlos M.",
      role: "Contador",
      avatar: "/lovable-uploads/0dbd84a1-da06-45e9-915b-64848a848567.png"
    },
    {
      text: "Aprendi a tirar da corretora e guardar com segurança.",
      author: "Roberto F.",
      role: "Engenheiro",
      avatar: "/lovable-uploads/e852636a-b015-4929-ba64-5990e487b02c.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-6">
            O que nossos{" "}
            <span className="text-gradient-bitcoin">alunos dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500 famílias já transformaram suas vidas financeiras
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <GlassCard className="p-8 md:p-12 text-center animate-fade-in-up stagger-1">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-dark">
                  <img 
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="text-left">
                  <div className="font-space-grotesk font-semibold">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary scale-125" 
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <GlassCard 
              key={index} 
              className={`p-6 animate-fade-in-up stagger-${index + 2}`}
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-dark">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center animate-fade-in-up stagger-5">
          <p className="text-sm text-muted-foreground mb-6">
            "Mantemos o sigilo dos alunos por segurança."
          </p>
          
          <Button 
            size="lg" 
            className="btn-bitcoin text-lg px-10 py-6"
          >
            Quero ter a mesma transformação que esses alunos
          </Button>
        </div>
      </div>
    </section>
  );
};