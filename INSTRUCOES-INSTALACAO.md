# 📦 Instruções de Instalação da Biblioteca @memakingbeat/ui-library

## 🚀 Passo a Passo Completo

### 1️⃣ Primeiro, publique sua biblioteca no NPM

#### No projeto da biblioteca (este projeto):

```bash
# 1. Conecte ao GitHub (botão no topo direito do Lovable)
# 2. Clone o repositório localmente
git clone https://github.com/memakingbeat/[nome-do-repo].git
cd [nome-do-repo]

# 3. Instale as dependências
npm install

# 4. Build da biblioteca
npm run build:lib

# 5. Faça login no NPM
npm login

# 6. Configure o nome do pacote no package.lib.json
# Mude "name": "@seu-usuario/ui-library" para "@memakingbeat/ui-library"

# 7. Publique no NPM
npm publish --access public
```

### 2️⃣ Instale em seu projeto React

```bash
# No seu projeto React existente:
npm install @memakingbeat/ui-library

# Ou com yarn:
yarn add @memakingbeat/ui-library

# Ou direto do GitHub (sem publicar no NPM):
npm install github:memakingbeat/ui-library
```

### 3️⃣ Configure o Tailwind CSS

Adicione ao seu `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Adicione esta linha para incluir os componentes da biblioteca:
    "./node_modules/@memakingbeat/ui-library/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Copie as configurações de cores e animações do tailwind.config.ts deste projeto
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        // ... resto das cores
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.3s ease-out',
        // ... resto das animações
      }
    }
  }
}
```

### 4️⃣ Importe os estilos base

No seu arquivo CSS principal (geralmente `src/index.css` ou `src/globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Copie todas as variáveis CSS do arquivo src/index.css deste projeto */
:root {
  --primary: 263 90% 51%;
  --secondary: 217 91% 60%;
  --accent: 173 80% 40%;
  /* ... copie todas as variáveis ... */
}

/* Copie também as classes de gradiente e animações */
```

### 5️⃣ Use os componentes no seu projeto!

```tsx
import React, { useState } from 'react';
import { 
  Button, 
  Input, 
  Card, 
  Badge, 
  Modal,
  Select,
  HomeIcon,
  UserIcon
} from '@memakingbeat/ui-library';

function MeuApp() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Card variant="elevated">
      <h1>Meu Aplicativo</h1>
      
      <Input 
        label="Nome"
        placeholder="Digite seu nome"
        leftIcon={<UserIcon size={18} />}
      />
      
      <Button 
        variant="primary" 
        onClick={() => setModalOpen(true)}
      >
        Abrir Modal
      </Button>
      
      <Badge variant="success">Online</Badge>
      
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Exemplo"
      >
        Conteúdo do modal
      </Modal>
    </Card>
  );
}
```

## 🎯 Método Alternativo: Copiar Arquivos

Se preferir não publicar no NPM, você pode copiar diretamente:

1. **Copie estas pastas do projeto para o seu:**
   - `src/components/ui-library/` → seu projeto
   - `src/lib/icons/` → seu projeto  
   - `src/lib/utils.ts` → seu projeto

2. **Instale as dependências:**
   ```bash
   npm install class-variance-authority clsx tailwind-merge
   ```

3. **Configure Tailwind e CSS conforme explicado acima**

4. **Importe os componentes localmente:**
   ```tsx
   import { Button } from '@/components/ui-library/Button';
   import { HomeIcon } from '@/lib/icons';
   ```

## 📌 Checklist de Instalação

- [ ] Biblioteca publicada no NPM ou GitHub
- [ ] Pacote instalado no projeto (`npm install @memakingbeat/ui-library`)
- [ ] Tailwind configurado com os paths da biblioteca
- [ ] Variáveis CSS copiadas para o projeto
- [ ] Teste importando um componente simples como `Button`

## 🆘 Problemas Comuns

### Erro: "Cannot find module '@memakingbeat/ui-library'"
- Verifique se publicou corretamente no NPM
- Tente reinstalar: `npm uninstall @memakingbeat/ui-library && npm install @memakingbeat/ui-library`

### Estilos não funcionando:
- Certifique-se de copiar TODAS as variáveis CSS
- Verifique se o Tailwind está processando os arquivos da biblioteca

### TypeScript errors:
- A biblioteca já inclui tipos TypeScript
- Se houver problemas, crie um arquivo `@types/memakingbeat__ui-library.d.ts`

## 🎉 Pronto!

Agora você tem uma biblioteca de componentes reutilizável em todos seus projetos React!

Qualquer dúvida, consulte o arquivo `README-LIBRARY.md` para mais detalhes sobre cada componente.