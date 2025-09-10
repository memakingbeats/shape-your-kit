# 📚 UI Library - Guia de Instalação e Uso

## 🚀 Como Usar em Seus Projetos React

### Opção 1: Publicar como Pacote NPM (Recomendado)

#### 1. Clone este repositório
```bash
git clone [URL-DO-SEU-REPOSITORIO]
cd ui-library
```

#### 2. Prepare para publicação
```bash
# Instale as dependências
npm install

# Build da biblioteca
npm run build:lib

# Faça login no npm (se ainda não estiver logado)
npm login

# Publique o pacote
npm publish --access public
```

#### 3. Instale em seu projeto React
```bash
# No seu projeto React existente
npm install @seu-usuario/ui-library

# Ou com yarn
yarn add @seu-usuario/ui-library
```

#### 4. Configure o Tailwind CSS
Adicione ao seu `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    // ... suas outras configurações
    "./node_modules/@seu-usuario/ui-library/**/*.{js,ts,jsx,tsx}",
  ],
  // Copie as configurações de tema do arquivo tailwind.config.ts deste projeto
}
```

#### 5. Importe os estilos base
No seu arquivo CSS principal:
```css
/* Copie os estilos do arquivo src/index.css deste projeto */
```

#### 6. Use os componentes
```tsx
import { Button, Input, Card, Modal } from '@seu-usuario/ui-library';

function App() {
  return (
    <Card variant="elevated">
      <h1>Meu App</h1>
      <Input placeholder="Digite algo..." />
      <Button variant="primary">Clique aqui</Button>
    </Card>
  );
}
```

---

### Opção 2: Copiar Arquivos Diretamente

#### 1. Copie estas pastas para seu projeto:
```
seu-projeto/
├── src/
│   ├── components/
│   │   └── ui-library/    (copie toda esta pasta)
│   └── lib/
│       ├── icons/          (copie toda esta pasta)
│       ├── utils.ts        (copie este arquivo)
│       └── index.ts        (copie este arquivo)
```

#### 2. Instale as dependências necessárias:
```bash
npm install class-variance-authority clsx tailwind-merge
```

#### 3. Configure o Tailwind e CSS
- Copie as configurações do `tailwind.config.ts`
- Copie os estilos do `src/index.css`

#### 4. Importe e use:
```tsx
import { Button } from '@/components/ui-library/Button';
import { HomeIcon } from '@/lib/icons';
```

---

### Opção 3: Usar via GitHub (Submodule ou Package)

#### Como submodule:
```bash
# No seu projeto
git submodule add https://github.com/seu-usuario/ui-library.git src/ui-library
```

#### Como dependência do GitHub:
```json
// package.json
{
  "dependencies": {
    "@seu-usuario/ui-library": "github:seu-usuario/ui-library"
  }
}
```

---

## 📦 Componentes Disponíveis

### Button
```tsx
import { Button } from '@seu-usuario/ui-library';

<Button variant="primary" size="md" loading={false}>
  Click me
</Button>
```

### Input
```tsx
import { Input } from '@seu-usuario/ui-library';

<Input 
  label="Email"
  placeholder="seu@email.com"
  error="Campo obrigatório"
/>
```

### Select
```tsx
import { Select } from '@seu-usuario/ui-library';

<Select
  options={[
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' }
  ]}
  onChange={(value) => console.log(value)}
/>
```

### Card
```tsx
import { Card } from '@seu-usuario/ui-library';

<Card variant="elevated" padding="md">
  Conteúdo do card
</Card>
```

### Modal
```tsx
import { Modal } from '@seu-usuario/ui-library';

<Modal
  isOpen={true}
  onClose={() => {}}
  title="Título"
>
  Conteúdo do modal
</Modal>
```

### Badge
```tsx
import { Badge } from '@seu-usuario/ui-library';

<Badge variant="success">Ativo</Badge>
```

### Tooltip
```tsx
import { Tooltip } from '@seu-usuario/ui-library';

<Tooltip content="Informação adicional">
  <button>Hover me</button>
</Tooltip>
```

### Icons
```tsx
import { 
  HomeIcon, 
  SearchIcon, 
  SettingsIcon,
  CloseIcon,
  CheckIcon,
  AlertIcon,
  ArrowRightIcon,
  CopyIcon,
  ChevronDownIcon,
  UserIcon,
  SpinnerIcon
} from '@seu-usuario/ui-library';

<HomeIcon size={24} color="currentColor" />
```

---

## 🎨 Customização

### Cores do Tema
Edite as variáveis CSS no seu projeto:
```css
:root {
  --primary: 263 90% 51%;
  --secondary: 217 91% 60%;
  --accent: 173 80% 40%;
  /* ... outras cores */
}
```

### Extend dos Componentes
```tsx
// Crie seu próprio componente baseado nos existentes
import { Button } from '@seu-usuario/ui-library';

export const MyButton = (props) => (
  <Button 
    variant="primary" 
    className="custom-class"
    {...props}
  />
);
```

---

## 📋 Requisitos

- React 18+
- Tailwind CSS 3+
- TypeScript (opcional mas recomendado)

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

MIT - Fique à vontade para usar em projetos comerciais e pessoais!

---

## 🆘 Suporte

- Issues: [GitHub Issues](https://github.com/seu-usuario/ui-library/issues)
- Documentação: [Ver showcase online](https://seu-projeto.lovable.app)

---

## 🔧 Scripts Úteis

```bash
# Desenvolvimento
npm run dev

# Build da biblioteca
npm run build:lib

# Build do projeto
npm run build

# Preview
npm run preview
```