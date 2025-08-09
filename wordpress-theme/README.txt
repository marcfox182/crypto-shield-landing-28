# Bitcoin Protection WordPress Theme

## Instalação

1. Copie todos os arquivos para a pasta `/wp-content/themes/bitcoin-theme/` do seu WordPress
2. Ative o tema no painel administrativo
3. Configure os menus em Aparência > Menus
4. Personalize em Aparência > Personalizar

## Arquivos incluídos

- `style.css` - Estilos principais do tema
- `index.php` - Template principal (homepage + blog)
- `header.php` - Cabeçalho do site
- `footer.php` - Rodapé do site
- `functions.php` - Funcionalidades do tema
- `single.php` - Template para posts individuais
- `page.php` - Template para páginas
- `README.txt` - Este arquivo

## Funcionalidades

### Design System
- Cores semânticas usando CSS variables
- Gradientes personalizados para Bitcoin
- Efeito glass-card com backdrop-blur
- Typography responsiva (Inter + Space Grotesk)
- Animations suaves (fade-in-up)

### Custom Post Types
- **Depoimentos** (`testimonials`)
  - Campos: Nome do autor, cargo, avaliação (1-5 estrelas)
  - Shortcode: `[testimonials limit="3"]`
  
- **Cursos** (`courses`)
  - Campos: Preço, duração, nível
  - Archive automático em `/courses/`

### Shortcodes Disponíveis
- `[testimonials limit="3"]` - Exibe depoimentos
- `[bitcoin_price]` - Exibe preço atual do Bitcoin

### Menus
- Menu Principal (main_menu)
- Menu do Footer (footer_menu)

### Features WordPress
- Suporte a post thumbnails
- Suporte a title-tag
- Suporte a HTML5
- Navigation menus
- Custom fields para depoimentos e cursos

## Personalização

### Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary: 47.9 95.8% 53.1%;
    --background: 222.2 84% 4.9%;
    /* ... outras cores */
}
```

### Gradientes
```css
--gradient-bitcoin: linear-gradient(135deg, hsl(var(--primary)), #ff6b35);
--gradient-dark: linear-gradient(135deg, hsl(var(--background)), hsl(var(--secondary)));
```

## Responsive Design

- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Menu mobile com toggle
- Grid responsivo para todos os componentes

## SEO Otimizado

- Semantic HTML5
- Meta tags automáticas
- Structured data ready
- Alt attributes para imagens
- Clean URLs

## Performance

- CSS minificado
- Lazy loading ready
- Optimized images
- Minimal JavaScript

## Suporte

- WordPress 5.0+
- PHP 7.4+
- Browsers modernos

## Customização Avançada

### Adicionar nova seção na homepage
Edite `index.php` e adicione sua seção antes do `<?php get_footer(); ?>`

### Modificar formulários
Use plugins como Contact Form 7 ou Gravity Forms

### Analytics
Adicione seu código no `footer.php` antes do `</body>`

### Schema Markup
Implemente JSON-LD no `header.php` ou usando plugins

## Troubleshooting

### Menu não aparece
1. Vá em Aparência > Menus
2. Crie um novo menu
3. Atribua à localização "Menu Principal"

### Fontes não carregam
Verifique se o Google Fonts está acessível ou use fontes locais

### Responsive quebrado
Verifique se não há CSS conflitante de plugins

## Licença

Tema livre para uso pessoal e comercial.