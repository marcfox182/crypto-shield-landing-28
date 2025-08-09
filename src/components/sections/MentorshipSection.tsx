import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Target, DollarSign, Shield } from "lucide-react";
export const MentorshipSection = () => {
  const benefits = [{
    icon: Target,
    title: "Estratégia personalizada",
    description: "Plano único baseado no seu perfil e objetivos familiares.",
    color: "text-primary"
  }, {
    icon: DollarSign,
    title: "Aportes a partir de R$200/mês",
    description: "Comece pequeno e construa uma reserva sólida gradualmente.",
    color: "text-emerald-400"
  }, {
    icon: Shield,
    title: "Blindagem total",
    description: "Proteja-se contra confisco e bloqueios bancários.",
    color: "text-cyan-400"
  }];
  return <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-6">
            Uma mentoria prática para te ensinar a{" "}
            <span className="text-gradient-bitcoin">proteger e multiplicar</span>{" "}
            seu patrimônio
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Aprenda a usar Bitcoin como poupança para o futuro da sua família — 
            com acompanhamento individual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => <GlassCard key={index} className={`p-8 text-center animate-fade-in-up stagger-${index + 1} group hover:scale-105 transition-all duration-300`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-background/50 group-hover:bg-background/80 transition-colors ${benefit.color}`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-space-grotesk font-semibold mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </GlassCard>)}
        </div>

        <div className="text-center animate-fade-in-up stagger-4">
          <GlassCard className="p-8 max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-space-grotesk font-semibold mb-4">
              Por que escolher nossa mentoria?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Acompanhamento individual e personalizado</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Estratégias testadas e aprovadas por 500+ famílias</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Foco total na segurança e proteção do patrimônio</span>
                </p>
              </div>
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Linguagem simples, sem termos técnicos complicados</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Suporte contínuo durante toda a jornada</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Garantia de satisfação de 30 dias</span>
                </p>
              </div>
            </div>
          </GlassCard>
          
          <Button size="lg" className="btn-bitcoin text-lg px-10 py-6 animate-glow">Acessar a Mentoria Agora</Button>
        </div>
      </div>
    </section>;
};