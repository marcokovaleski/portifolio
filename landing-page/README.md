# Portfolio Isabela Pellegrini

Portfolio pessoal desenvolvido em React + TypeScript + Vite para apresentar projetos acadêmicos e habilidades em arquitetura.

## 🏗️ Sobre o Projeto

Este é um portfolio responsivo desenvolvido para Isabela Pellegrini, estudante de Arquitetura e Urbanismo. O projeto apresenta:

- **Seção Hero**: Apresentação pessoal e profissional
- **Projetos Acadêmicos**: Galeria de projetos desenvolvidos durante o curso
- **Habilidades**: Carrossel interativo com ferramentas de arquitetura (AutoCAD, SketchUp, Revit)
- **Contato**: Formulário funcional para envio de mensagens

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Icons** - Biblioteca de ícones
- **CSS Modules** - Estilização modular

## 📦 Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 🎨 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.tsx      # Botão customizado
│   ├── ProjectCard.tsx # Card de projeto
│   └── CarouselCard.tsx # Card do carrossel
├── pages/              # Páginas da aplicação
│   └── Home.tsx        # Página principal
├── styles/             # Arquivos CSS
│   ├── index.css       # Estilos globais
│   ├── header.css      # Estilos do cabeçalho
│   ├── hero.css        # Estilos da seção hero
│   ├── projetos.css    # Estilos dos projetos
│   ├── habilidades.css # Estilos das habilidades
│   ├── contact.css     # Estilos do contato
│   ├── footer.css      # Estilos do rodapé
│   ├── buttons.css     # Estilos dos botões
│   └── utility.css     # Classes utilitárias
└── assets/             # Imagens e ícones
```

## 🔧 Configurações

### Vite

- Proxy configurado para API de contato
- Plugin React para Fast Refresh
- Build otimizado para produção

### TypeScript

- Configuração estrita para qualidade de código
- Separação entre configurações de app e node
- Linting integrado com ESLint

### ESLint

- Regras recomendadas para React e TypeScript
- Plugin para React Hooks
- Plugin para React Refresh

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile**: < 580px
- **Tablet**: 580px - 1280px
- **Desktop**: > 1280px

## 🎯 Funcionalidades

- **Menu Mobile**: Navegação hambúrguer para dispositivos móveis
- **Carrossel Animado**: Seção de habilidades com animação contínua
- **Formulário de Contato**: Integração com API para envio de mensagens
- **Scroll Suave**: Navegação interna com scroll animado
- **Design System**: Variáveis CSS para consistência visual

## 🌐 Deploy

O projeto está configurado para deploy em qualquer plataforma que suporte aplicações React estáticas (Vercel, Netlify, GitHub Pages, etc.).

## 📄 Licença

Este projeto é privado e desenvolvido especificamente para Isabela Pellegrini.
