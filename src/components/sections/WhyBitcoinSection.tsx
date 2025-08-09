import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Globe, Zap } from "lucide-react";

export const WhyBitcoinSection = () => {
  const priceTimeline = [
    { year: "2009", btc: "$0,01", real: "R$1,00" },
    { year: "2017", btc: "$20.000", real: "R$0,60" },
    { year: "2021", btc: "$69.000", real: "R$0,40" },
    { year: "2024", btc: "$43.000", real: "R$0,20" }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "+1.000.000%",
      label: "Valorização desde 2009",
      color: "text-emerald-400"
    },
    {
      icon: Shield,
      value: "21M",
      label: "Oferta limitada",
      color: "text-primary"
    },
    {
      icon: Globe,
      value: "40%",
      label: "Do dinheiro global impresso desde 2020",
      color: "text-red-400"
    }
  ];

  const comparison = [
    {
      bitcoin: "↗ +1.000.000%",
      real: "↘ -80%",
      category: "Performance"
    },
    {
      bitcoin: "✓ Escassez Limitada",
      real: "✗ Escassez Inflacionária",
      category: "Oferta"
    },
    {
      bitcoin: "✓ Proteção contra Inflação",
      real: "✗ Vulnerável à Inflação",
      category: "Inflação"
    },
    {
      bitcoin: "✓ Impossível de Confiscar",
      real: "✗ Possível de Confiscar",
      category: "Segurança"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-6">
            Por que{" "}
            <span className="text-gradient-bitcoin">Bitcoin?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os dados não mentem: enquanto moedas tradicionais perdem valor, 
            o Bitcoin se consolida como reserva de valor global
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <GlassCard 
              key={index} 
              className={`p-8 text-center animate-fade-in-up stagger-${index + 1}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-background/50 flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className={`text-3xl md:text-4xl font-space-grotesk font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-muted-foreground">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16 animate-fade-in-up stagger-4">
          <GlassCard className="overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-center mb-8">
                Comparativo Detalhado
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4">Aspecto</th>
                      <th className="text-center py-4 px-4 text-primary">Bitcoin</th>
                      <th className="text-center py-4 px-4 text-red-400">Real Brasileiro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className="border-b border-white/5">
                        <td className="py-4 px-4 font-medium">{item.category}</td>
                        <td className="py-4 px-4 text-center text-emerald-400">{item.bitcoin}</td>
                        <td className="py-4 px-4 text-center text-red-400">{item.real}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Price Timeline */}
        <div className="mb-16 animate-fade-in-up stagger-5">
          <h3 className="text-2xl font-space-grotesk font-bold text-center mb-8">
            Evolução de Preços
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {priceTimeline.map((item, index) => (
              <GlassCard 
                key={index} 
                className={`p-6 text-center animate-scale-in stagger-${index + 6}`}
              >
                <div className="text-2xl font-space-grotesk font-bold text-primary mb-2">
                  {item.year}
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">BTC: </span>
                    <span className="font-semibold text-emerald-400">{item.btc}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Real: </span>
                    <span className="font-semibold text-red-400">{item.real}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <GlassCard className="p-8 animate-fade-in-up stagger-10">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-space-grotesk font-semibold mb-4">
              Escassez Digital
            </h3>
            <p className="text-muted-foreground">
              Apenas 21 milhões de Bitcoins existirão. Enquanto governos imprimem 
              dinheiro infinitamente, o Bitcoin mantém sua escassez programada, 
              protegendo seu valor ao longo do tempo.
            </p>
          </GlassCard>

          <GlassCard className="p-8 animate-fade-in-up stagger-11">
            <Globe className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-space-grotesk font-semibold mb-4">
              Adoção Mundial
            </h3>
            <p className="text-muted-foreground">
              Países como El Salvador adotaram Bitcoin como moeda oficial. 
              Grandes empresas como Tesla e MicroStrategy acumulam Bitcoin 
              como reserva de valor corporativa.
            </p>
          </GlassCard>
        </div>

        <div className="text-center animate-fade-in-up stagger-12">
          <GlassCard className="p-8 max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-space-grotesk font-semibold mb-4">
              A Conclusão é Simples
            </h3>
            <p className="text-lg text-muted-foreground">
              Enquanto o Real perde 80% do valor em 15 anos, o Bitcoin se valoriza 
              1.000.000%. Não é questão de opinião, são{" "}
              <span className="text-primary font-semibold">fatos históricos</span>.
            </p>
          </GlassCard>
          
          <Button 
            size="lg" 
            className="btn-bitcoin text-lg px-10 py-6"
          >
            Quero proteger meu dinheiro agora
          </Button>
        </div>
      </div>
    </section>
  );
};