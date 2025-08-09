import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { AlertTriangle, TrendingDown, Building, DollarSign, Banknote } from "lucide-react";
export const AlertSection = () => {
  const alerts = [{
    icon: TrendingDown,
    title: "Inflação destrutiva",
    description: "O real perdeu mais de 80% do seu valor (IBGE)",
    color: "text-red-400"
  }, {
    icon: Building,
    title: "INSS falido",
    description: "Projeções indicam déficit bilionário até 2030",
    color: "text-orange-400"
  }, {
    icon: DollarSign,
    title: "Custo de vida disparando",
    description: "Educação infantil subiu 200% desde 2010 (IPEA)",
    color: "text-yellow-400"
  }, {
    icon: Banknote,
    title: "Bancos abusivos",
    description: "Podem confiscar seu dinheiro em crises",
    color: "text-red-500"
  }];
  return <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold text-red-500">
              ALERTA URGENTE
            </h2>
            <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
          </div>
          
          <h3 className="text-2xl md:text-4xl font-space-grotesk font-semibold mb-6">
            Seu dinheiro está{" "}
            <span className="text-gradient-pink">desprotegido</span>{" "}
            — e o sistema não vai te salvar
          </h3>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inflação, INSS falido e bancos que podem confiscar seus fundos: 
            a verdade que ninguém te conta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {alerts.map((alert, index) => <GlassCard key={index} className={`p-6 animate-fade-in-up stagger-${index + 1}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-background/50 ${alert.color}`}>
                  <alert.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-space-grotesk font-semibold mb-2">
                    {alert.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {alert.description}
                  </p>
                </div>
              </div>
            </GlassCard>)}
        </div>

        <div className="text-center animate-fade-in-up stagger-5">
          <GlassCard className="p-8 max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl font-semibold mb-6">
              Você trabalha mais para comprar menos — e o ciclo se repete com seus filhos.
            </p>
            <div className="text-lg text-muted-foreground">
              Enquanto você guarda dinheiro no banco, a inflação devora seu poder de compra. 
              Seus filhos herdarão um país com moeda ainda mais desvalorizada.
            </div>
          </GlassCard>
          
          <Button size="lg" className="btn-teal text-lg px-10 py-6">Quero proteger minha família</Button>
        </div>
      </div>
    </section>;
};