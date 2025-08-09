import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Shield, CheckCircle, Users, Heart } from "lucide-react";

export const GuaranteeSection = () => {
  const steps = [
    {
      number: "1",
      title: "Participe da mentoria",
      description: "Complete os 2 encontros individuais e acesse todo o conteúdo"
    },
    {
      number: "2", 
      title: "Avalie os resultados por 30 dias",
      description: "Aplique o conhecimento e veja se faz sentido para sua família"
    },
    {
      number: "3",
      title: "100% Satisfeito ou seu dinheiro de volta",
      description: "Se não estiver completamente confiante, devolvemos tudo"
    }
  ];

  const reasons = [
    {
      icon: CheckCircle,
      text: "Confiamos 100% no nosso método",
      color: "text-emerald-400"
    },
    {
      icon: Users,
      text: "Mais de 500 famílias já comprovaram",
      color: "text-primary"
    },
    {
      icon: Heart,
      text: "Sua tranquilidade é nossa prioridade",
      color: "text-pink-400"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-4 mb-6">
            <Shield className="w-16 h-16 text-emerald-400" />
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold">
              <span className="text-gradient-bitcoin">GARANTIA TOTAL:</span>
              <br />
              Risco Zero Para Você
            </h2>
            <Shield className="w-16 h-16 text-emerald-400" />
          </div>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Se ao final da mentoria você não se sentir 100% confiante para investir 
            e proteger seu patrimônio com segurança, devolvemos todo o seu investimento. 
            Sem perguntas, sem burocracia.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center animate-fade-in-up stagger-${index + 1}`}
            >
              <GlassCard className="p-8 h-full">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-space-grotesk font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-space-grotesk font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </GlassCard>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary/50"></div>
                  <div className="w-0 h-0 border-l-4 border-r-0 border-b-2 border-t-2 border-l-primary border-t-transparent border-b-transparent ml-8 -mt-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="mb-12 animate-fade-in-up stagger-4">
          <GlassCard className="p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-space-grotesk font-semibold text-center mb-8">
              Por que oferecemos essa garantia?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-4">
                  <reason.icon className={`w-8 h-8 ${reason.color}`} />
                  <span className="font-medium">{reason.text}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Risk Reversal */}
        <div className="text-center animate-fade-in-up stagger-5">
          <GlassCard className="p-8 max-w-3xl mx-auto mb-8 bg-emerald-500/5 border-emerald-400/20">
            <h3 className="text-2xl font-space-grotesk font-semibold mb-4 text-emerald-400">
              O Risco É Nosso, O Sucesso É Seu
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Assumimos 100% do risco financeiro. Você só precisa se comprometer com 
              seu próprio sucesso e o futuro da sua família.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>30 dias para testar todo o conteúdo</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Devolução 100% garantida</span>
                </p>
              </div>
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Sem letras miúdas ou pegadinhas</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Suporte durante todo o período</span>
                </p>
              </div>
            </div>
          </GlassCard>
          
          <Button 
            size="lg" 
            className="btn-bitcoin text-xl px-16 py-8 animate-glow"
          >
            Sim, quero garantir minha vaga na mentoria agora!
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            🛡️ Garantia incondicional de 30 dias
          </p>
        </div>
      </div>
    </section>
  );
};