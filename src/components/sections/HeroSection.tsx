import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Check, Shield, Users } from "lucide-react";
export const HeroSection = () => {
  return <section className="min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-space-grotesk font-bold leading-tight text-center lg:text-left">
                Descubra como{" "}
                <span className="text-gradient-bitcoin">blindar o seu dinheiro</span>{" "}
                da inflação e criar uma{" "}
                <span className="text-gradient-bitcoin">reserva sólida</span>,{" "}
                sem depender de bancos ou governo.
              </h1>
              
              
              
              <p className="text-base sm:text-lg text-foreground/80 text-center lg:text-left">A cada ano, o real perde poder de compra e o custo de vida dispara. O Bitcoin é a forma mais segura e descentralizada de proteger seu dinheiro e garantir a segurança da sua família.</p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 sm:space-y-6">
              <Button size="lg" className="btn-bitcoin text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 animate-glow w-full lg:w-auto">
                Quero blindar meu patrimônio agora
              </Button>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Shield className="w-4 h-4" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>Garantia 30 dias</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Users className="w-4 h-4" />
                  <span>Suporte total</span>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <button className="text-primary hover:text-primary/80 transition-colors underline">
                  Assista o vídeo completo
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - VSL Video */}
          <div className="animate-fade-in-up stagger-2 order-1 lg:order-2">
            <GlassCard className="p-4 sm:p-6 lg:p-8">
              <div className="aspect-video bg-gradient-dark rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <div className="w-0 h-0 border-l-[12px] border-r-0 border-b-[8px] border-t-[8px] border-l-primary border-t-transparent border-b-transparent ml-1"></div>
                    </div>
                    <p className="text-foreground/60">Video Sales Letter</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Descubra como proteger seu patrimônio em 15 minutos
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>;
};