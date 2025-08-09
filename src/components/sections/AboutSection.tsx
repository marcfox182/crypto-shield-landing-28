import { GlassCard } from "@/components/ui/glass-card";
import { TrendingUp, Users, Calendar } from "lucide-react";

export const AboutSection = () => {
  const timeline = [
    {
      year: "2021",
      event: "Descobriu que guardar em real não protegia",
      description: "Percebeu que trabalhar mais e guardar em real não garantia o futuro da família"
    },
    {
      year: "2022",
      event: "Estudou e aplicou estratégias de Bitcoin",
      description: "Mergulhou no mundo do Bitcoin e aplicou estratégias seguras"
    },
    {
      year: "2023-2024",
      event: "Criou reserva sólida e plano de aposentadoria",
      description: "Construiu um patrimônio protegido e planejou o futuro da afilhada"
    },
    {
      year: "Hoje",
      event: "Ajuda famílias a replicarem o mesmo sucesso",
      description: "Compartilha conhecimento para transformar a vida de outras famílias"
    }
  ];

  const badges = [
    {
      icon: TrendingUp,
      value: "+300%",
      label: "Retorno médio",
      color: "text-emerald-400"
    },
    {
      icon: Users,
      value: "500+",
      label: "Famílias ajudadas",
      color: "text-primary"
    },
    {
      icon: Calendar,
      value: "3",
      label: "Anos de experiência",
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-6">
            Quem vai te guiar nessa{" "}
            <span className="text-gradient-bitcoin">jornada?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Photo */}
          <div className="animate-fade-in-up stagger-1">
            <GlassCard className="p-8">
              <div className="aspect-square bg-gradient-dark rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/e852636a-b015-4929-ba64-5990e487b02c.png"
                  alt="Daniela Alves Spitaletti"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-space-grotesk font-bold mb-2">
                  Daniela Alves Spitaletti
                </h3>
                <p className="text-primary font-medium">
                  Mentora Bitcoin & Educadora Financeira
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-fade-in-up stagger-2">
            <GlassCard className="p-8">
              <h3 className="text-xl font-space-grotesk font-semibold mb-4">
                Minha História
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                "Sou Daniela Alves Spitaletti. Em 2021 percebi que trabalhar mais e 
                guardar em real não garantia o futuro da minha família. Estudei Bitcoin, 
                apliquei e mudei minha realidade: hoje tenho uma reserva sólida e um 
                plano para aposentadoria e para minha afilhada. Agora ajudo pais e mães 
                a fazerem o mesmo, mesmo começando do zero."
              </p>
            </GlassCard>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <GlassCard 
                  key={index} 
                  className={`p-4 text-center animate-scale-in stagger-${index + 3}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center mx-auto mb-3 ${badge.color}`}>
                    <badge.icon className="w-6 h-6" />
                  </div>
                  <div className={`text-2xl font-space-grotesk font-bold ${badge.color}`}>
                    {badge.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {badge.label}
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Timeline */}
            <GlassCard className="p-8">
              <h3 className="text-xl font-space-grotesk font-semibold mb-6">
                Linha do Tempo
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-4 animate-fade-in-up stagger-${index + 6}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-space-grotesk font-bold text-sm">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.event}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2 text-emerald-400">
                <span>✓</span>
                <span>100% Transparência</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span>✓</span>
                <span>24/7 Suporte</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span>✓</span>
                <span>Zero enrolação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};