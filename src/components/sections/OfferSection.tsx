import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { CheckCircle, Users, BookOpen, FileText, Target, Shield, DollarSign } from "lucide-react";

export const OfferSection = () => {
  const offers = [
    {
      number: "1",
      icon: Users,
      title: "Mentoria Individual e Personalizada",
      subtitle: "3 Horas",
      items: [
        "Aulas e assessoria individual ao vivo com a Dani",
        "2 encontros agendados diretamente via WhatsApp",
        "Total flexibilidade de horários"
      ],
      color: "text-primary"
    },
    {
      number: "2",
      icon: Target,
      title: "Plano de Ação e Montagem de Carteira",
      subtitle: "Carteira Inconfiscável",
      items: [
        "Diagnóstico completo do seu perfil",
        "Plano de investimentos personalizado",
        "Carteira diversificada e segura",
        "Bitcoin, ouro e dólar"
      ],
      color: "text-cyan-400"
    },
    {
      number: "3",
      icon: Shield,
      title: "Domínio da Autocustódia",
      subtitle: "Segurança Máxima",
      items: [
        "Configurar e testar carteiras digitais",
        "Guardar ativos de forma 100% segura",
        "Torne-se seu próprio banco",
        "Proteção contra bloqueios e confiscos"
      ],
      color: "text-emerald-400"
    },
    {
      number: "4",
      icon: DollarSign,
      title: "Estratégias de Investimento",
      subtitle: "Multiplicação de Patrimônio",
      items: [
        "Melhores práticas de longo prazo",
        "Como comprar e vender eficientemente",
        "Potencializar seus ganhos",
        "Bitcoin como reserva contra inflação"
      ],
      color: "text-bitcoin"
    },
    {
      number: "5",
      icon: BookOpen,
      title: "Finanças Descentralizadas (DeFi)",
      subtitle: "Na Prática",
      items: [
        "Usar a rede de criptomoedas",
        "Otimizar suas finanças",
        "Fazer pagamentos descentralizados",
        "Reduzir dependência bancária"
      ],
      color: "text-purple-400"
    },
    {
      number: "6",
      icon: FileText,
      title: "SUPORTE PREMIUM",
      subtitle: "Acompanhamento Contínuo",
      items: [
        "1 ano de suporte individual via WhatsApp",
        "Tirar dúvidas diretamente com a Dani",
        "Análises personalizadas",
        "Orientação contínua"
      ],
      color: "text-rose-400"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold mb-4 sm:mb-6 px-2">
            Detalhes da{" "}
            <span className="text-gradient-bitcoin">Oferta Completa</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Mentoria individual + curso online + materiais exclusivos para blindar seu patrimônio
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
          {offers.map((offer, index) => (
            <GlassCard 
              key={index} 
              className={`p-4 sm:p-6 lg:p-8 animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                {/* Number and Icon */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-background/50 flex items-center justify-center mx-auto lg:mx-0 mb-3 sm:mb-4 ${offer.color}`}>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-space-grotesk font-bold">{offer.number}</span>
                  </div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-background/30 flex items-center justify-center mx-auto lg:mx-0 ${offer.color}`}>
                    <offer.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-space-grotesk font-bold mb-2 text-center lg:text-left">
                      {offer.title}
                    </h3>
                    <p className={`text-base sm:text-lg font-medium ${offer.color} text-center lg:text-left`}>
                      {offer.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {offer.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Pricing */}
        <div className="text-center animate-fade-in-up stagger-4">
          <GlassCard className="p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-space-grotesk font-semibold mb-3 sm:mb-4">
                Investimento Total
              </h3>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold text-gradient-bitcoin">
                  R$ 2.997,99
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                  ou 12x de <span className="text-primary font-semibold">R$ 310,06</span>
                </div>
              </div>
            </div>
            
            <div className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
              <p>💳 Aceitamos todos os cartões de crédito</p>
              <p>🔒 Pagamento 100% seguro</p>
              <p>⚡ Acesso imediato após confirmação</p>
            </div>
          </GlassCard>
          
          <Button 
            size="lg" 
            className="btn-bitcoin text-base sm:text-lg px-6 sm:px-12 py-4 sm:py-6 animate-pulse-slow w-full sm:w-auto"
          >
            Quero acessar todos os bônus agora
          </Button>
          
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            🎯 Garanta sua vaga por tempo limitado
          </p>
        </div>
      </div>
    </section>
  );
};