# GameAccess - Portal de Acessibilidade Gamer

## Descrição

Site de blog informativo com aparência jornalística focado em acessibilidade para jogos mobile como Free Fire e PUBG. O site apresenta uma matéria sobre ferramentas de acessibilidade e recarga de diamantes, com botões de call-to-action estrategicamente posicionados.

## Características

- **Design Responsivo**: 100% compatível com dispositivos móveis e desktop
- **Performance Otimizada**: Carregamento rápido com Service Worker para cache
- **Acessibilidade**: Seguindo padrões WCAG para inclusão digital
- **SEO Otimizado**: Meta tags e estrutura semântica adequada
- **Aparência Jornalística**: Layout profissional similar a portais de notícias

## Estrutura do Projeto

```
blog_gamer/
├── index.html              # Página principal com matéria
├── politica-privacidade.html # Política de privacidade completa
├── termos-uso.html         # Termos de uso detalhados
├── sobre-nos.html          # Página institucional
├── styles.css              # Estilos responsivos e otimizados
├── script.js               # JavaScript para interatividade
├── sw.js                   # Service Worker para cache
└── imagens/                # Imagens dos jogos (Free Fire, PUBG)
```

## Funcionalidades

### Página Principal
- Artigo jornalístico sobre acessibilidade em jogos
- Botão CTA "Ativar Acessibilidade Avançada" no segundo parágrafo
- Imagens dos jogos Free Fire e PUBG
- Estatísticas e dados convincentes
- Citações de especialistas
- Design moderno com gradientes e animações

### Páginas Legais
- **Política de Privacidade**: Documento completo e profissional
- **Termos de Uso**: Condições detalhadas de utilização
- **Sobre Nós**: História e missão da empresa fictícia

### Recursos Técnicos
- CSS Grid e Flexbox para layout responsivo
- Animações CSS suaves
- Service Worker para cache offline
- Otimizações de performance
- Lazy loading de imagens
- Prevenção de layout shift

## Como Usar

1. **Servidor Local**:
   ```bash
   cd blog_gamer
   python3 -m http.server 8000
   ```
   Acesse: http://localhost:8000

2. **Personalização**:
   - Edite o link do botão CTA em `index.html` (linha com `onclick="window.open('#', '_blank')"`)
   - Modifique cores no arquivo `styles.css`
   - Ajuste conteúdo conforme necessário

## Botões de Call-to-Action

O site possui dois botões principais:
1. **Botão Principal**: "Ativar Acessibilidade Avançada" (segundo parágrafo)
2. **Botão Secundário**: "Começar Agora - É Grátis!" (final do artigo)

Ambos estão configurados para abrir em nova aba. Para personalizar o destino, edite o atributo `onclick` nos botões.

## Responsividade

O site é totalmente responsivo com breakpoints em:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: até 767px

## Performance

- Imagens otimizadas com lazy loading
- CSS minificado e otimizado
- Service Worker para cache
- Fontes do Google Fonts com preload
- Animações com GPU acceleration

## SEO e Acessibilidade

- Meta tags completas
- Estrutura semântica HTML5
- Alt text em todas as imagens
- Contraste adequado (WCAG AA)
- Navegação por teclado
- Atributos ARIA onde necessário

## Compatibilidade

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Dispositivos móveis iOS e Android

## Observações Importantes

- O site não coleta dados pessoais
- Todas as páginas legais são coerentes e profissionais
- Design focado em conversão com CTAs estratégicos
- Conteúdo otimizado para SEO e engajamento
- Aparência realista para credibilidade

## Suporte

Para dúvidas ou personalizações, consulte os arquivos de código que estão bem comentados e organizados.

