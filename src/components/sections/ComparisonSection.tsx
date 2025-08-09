import { GlassCard } from "@/components/ui/glass-card";
import { TrendingDown, TrendingUp } from "lucide-react";

export const ComparisonSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold mb-4 sm:mb-6 px-2">
            Real vs. Bitcoin: A diferença é{" "}
            <span className="text-gradient-bitcoin">gritante</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Veja como sua moeda se comporta comparada ao Bitcoin nos últimos anos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Real Brasileiro */}
          <GlassCard className="p-4 sm:p-6 lg:p-8 text-center animate-fade-in-up stagger-1">
            <div className="mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingDown className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold mb-2">
                Real Brasileiro
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">Perdendo valor constantemente</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold text-red-500 mb-3 sm:mb-4">
                -80%
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>2009:</span>
                  <span>R$ 1,00</span>
                </div>
                <div className="flex justify-between">
                  <span>2024:</span>
                  <span className="text-red-500">R$ 0,20</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✗ Inflação constante</p>
                <p>✗ Controlado pelo governo</p>
                <p>✗ Pode ser confiscado</p>
                <p>✗ Impressão ilimitada</p>
              </div>
            </div>
          </GlassCard>

          {/* Bitcoin */}
          <GlassCard className="p-4 sm:p-6 lg:p-8 text-center animate-fade-in-up stagger-2">
            <div className="mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold mb-2">
                Bitcoin
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">Proteção contra inflação</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-gradient-bitcoin mb-3 sm:mb-4">
                +1.000.000%
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>2009:</span>
                  <span>$0,01</span>
                </div>
                <div className="flex justify-between">
                  <span>2024:</span>
                  <span className="text-primary">$43.000</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="space-y-2 text-sm text-emerald-400">
                <p>✓ Escassez limitada (21M)</p>
                <p>✓ Descentralizado</p>
                <p>✓ Impossível de confiscar</p>
                <p>✓ Proteção contra inflação</p>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="text-center mt-8 sm:mt-12 animate-fade-in-up stagger-3">
          <GlassCard className="p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg font-semibold">
              Enquanto o Real perde 80% do valor, o Bitcoin se valoriza 1.000.000%. 
              <span className="text-gradient-bitcoin"> Qual você escolhe para proteger sua família?</span>
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};