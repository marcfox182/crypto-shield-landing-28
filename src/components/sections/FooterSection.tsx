import { GlassCard } from "@/components/ui/glass-card";
import { Mail, Phone, MapPin, Shield, FileText, Lock, ExternalLink } from "lucide-react";

export const FooterSection = () => {
  const services = [
    "Mentoria Bitcoin",
    "Curso Online",
    "Consultoria Individual",
    "Materiais Exclusivos"
  ];

  const resources = [
    "Blog",
    "FAQ",
    "Guias Gratuitos",
    "Webinars"
  ];

  const support = [
    "Central de Ajuda",
    "Contato",
    "Suporte Técnico",
    "Comunidade"
  ];

  const legal = [
    { name: "Política de Privacidade", icon: Lock },
    { name: "Termos de Uso", icon: FileText },
    { name: "Aviso Legal", icon: Shield }
  ];

  return (
    <footer className="py-20 bg-gradient-to-t from-background/50 to-background">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-space-grotesk font-bold text-gradient-bitcoin mb-4">
                Bitcoin Mentoria
              </h3>
              <p className="text-muted-foreground">
                Protegendo o futuro de famílias brasileiras através da educação 
                e mentoria em Bitcoin.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@bitcoinmentoria.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+55 11 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-space-grotesk font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-space-grotesk font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-space-grotesk font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mb-12">
          <GlassCard className="p-6">
            <h4 className="font-space-grotesk font-semibold text-center mb-6">
              Pagamento 100% Seguro
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
              <div className="bg-muted/20 rounded-lg p-3 text-center">
                <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <span className="text-xs">SSL 256-bit</span>
              </div>
              <div className="bg-muted/20 rounded-lg p-3 text-center">
                <Lock className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <span className="text-xs">PCI Compliant</span>
              </div>
              <div className="bg-muted/20 rounded-lg p-3 text-center">
                <FileText className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <span className="text-xs">LGPD</span>
              </div>
              <div className="bg-muted/20 rounded-lg p-3 text-center">
                <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <span className="text-xs">Garantia 30d</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {legal.map((item, index) => (
            <a 
              key={index}
              href="#" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.name}
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Bitcoin Mentoria. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Este site não faz parte nem é endossado pelo Facebook, Google ou qualquer empresa de redes sociais. 
              Bitcoin é um investimento de risco. Invista apenas o que você pode perder.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8">
          <GlassCard className="p-6">
            <h5 className="font-semibold mb-3 text-sm">Aviso Importante:</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              O conteúdo apresentado neste site tem caráter educacional e informativo. 
              Investimentos em criptomoedas envolvem riscos e podem resultar em perdas. 
              As informações não constituem recomendação de investimento. 
              Consulte sempre um profissional qualificado antes de tomar decisões financeiras. 
              Resultados passados não garantem resultados futuros.
            </p>
          </GlassCard>
        </div>
      </div>
    </footer>
  );
};