import { GlassCard } from "@/components/ui/glass-card";
import { CheckCircle, BookOpen, FileText, Gift } from "lucide-react";

export const BonusSection = () => {
  const bonuses = [
    {
      number: "BÔNUS 1",
      icon: BookOpen,
      title: "Curso Online",
      subtitle: "Bônus Exclusivo",
      items: [
        "Fundamentos do Bitcoin: O que é, como surgiu e por que ele é tão importante",
        "Oportunidade de Proteção e Crescimento: Como pessoas comuns estão protegendo e construindo riqueza",
        "Torne-se Seu Próprio Banco: Guardar e movimentar sem burocracia",
        "Mentalidade Financeira e Abundância: Liberte-se da escassez",
        "Bitcoin como Poupança para o Futuro: Estratégia para aposentadoria e segurança dos filhos"
      ],
      color: "text-cyan-400"
    },
    {
      number: "BÔNUS 2",
      icon: FileText,
      title: "Checklists e Recursos Exclusivos",
      subtitle: "Materiais de Apoio",
      items: [
        "Checklist Anti-Golpes",
        "Lista de corretoras seguras",
        "Planilhas de acompanhamento"
      ],
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gift className="w-8 h-8 text-bitcoin" />
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold">
              Bônus{" "}
              <span className="text-gradient-bitcoin">Exclusivos</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Materiais complementares para acelerar seu aprendizado e garantir sua segurança
          </p>
          <p className="text-lg text-bitcoin font-semibold mt-4">
            Tudo isso e muito mais!
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <GlassCard 
              key={index} 
              className={`p-8 animate-fade-in-up stagger-${index + 1} border-2 border-bitcoin/20`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Number and Icon */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className={`w-24 h-24 rounded-2xl bg-bitcoin/10 border-2 border-bitcoin/30 flex items-center justify-center mx-auto lg:mx-0 mb-4 ${bonus.color}`}>
                    <span className="text-sm font-space-grotesk font-bold">{bonus.number}</span>
                  </div>
                  <div className={`w-16 h-16 rounded-xl bg-background/30 flex items-center justify-center mx-auto lg:mx-0 ${bonus.color}`}>
                    <bonus.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-space-grotesk font-bold mb-2">
                      {bonus.title}
                    </h3>
                    <p className={`text-lg font-medium ${bonus.color}`}>
                      {bonus.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {bonus.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};