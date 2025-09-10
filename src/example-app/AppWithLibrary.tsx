// EXEMPLO DE USO DA BIBLIOTECA
// Este arquivo demonstra como usar a biblioteca após instalação via NPM/GitHub

import React, { useState } from 'react';

// APÓS INSTALAR A BIBLIOTECA, IMPORTE ASSIM:
// import { 
//   Button, 
//   Input, 
//   Card, 
//   Badge, 
//   Modal,
//   Select,
//   HomeIcon,
//   UserIcon,
//   SettingsIcon,
//   SearchIcon
// } from '@memakingbeat/ui-library';

// POR ENQUANTO, USANDO IMPORTS LOCAIS:
import { Button } from '../components/ui-library/Button';
import { Input } from '../components/ui-library/Input';
import { Card } from '../components/ui-library/Card';
import { Badge } from '../components/ui-library/Badge';
import { Modal } from '../components/ui-library/Modal';
import { Select } from '../components/ui-library/Select';
import { 
  HomeIcon, 
  UserIcon, 
  SettingsIcon, 
  SearchIcon 
} from '../lib/icons';

function AppWithLibrary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: ''
  });

  const planOptions = [
    { value: 'basic', label: 'Plano Básico' },
    { value: 'pro', label: 'Plano Pro' },
    { value: 'enterprise', label: 'Plano Enterprise' }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header */}
      <header className="mb-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HomeIcon size={24} />
            <h1 className="text-2xl font-bold">Meu App com @memakingbeat/ui-library</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <UserIcon size={18} />
              Perfil
            </Button>
            <Button variant="ghost" size="sm">
              <SettingsIcon size={18} />
              Config
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <Card variant="gradient" className="mb-8">
          <div className="text-center py-12">
            <h2 className="text-4xl font-bold mb-4">Bem-vindo ao App Exemplo</h2>
            <p className="text-xl mb-6">Demonstrando os componentes da biblioteca</p>
            <div className="flex gap-4 justify-center">
              <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
                Abrir Modal
              </Button>
              <Button variant="outline" size="lg">
                Saiba Mais
              </Button>
            </div>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card variant="elevated" padding="md">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="success">Novo</Badge>
              <h3 className="text-lg font-semibold">Feature 1</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Descrição da primeira feature usando componentes customizados.
            </p>
            <Button variant="secondary" size="sm" className="w-full">
              Explorar
            </Button>
          </Card>

          <Card variant="elevated" padding="md">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="warning">Beta</Badge>
              <h3 className="text-lg font-semibold">Feature 2</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Segunda feature com status diferente e ações.
            </p>
            <Button variant="secondary" size="sm" className="w-full">
              Testar
            </Button>
          </Card>

          <Card variant="elevated" padding="md">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="gradient">Premium</Badge>
              <h3 className="text-lg font-semibold">Feature 3</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Feature premium com visual destacado.
            </p>
            <Button variant="primary" size="sm" className="w-full">
              Upgrade
            </Button>
          </Card>
        </div>

        {/* Form Section */}
        <Card variant="default" padding="lg">
          <h3 className="text-2xl font-bold mb-6">Formulário de Exemplo</h3>
          <div className="space-y-4">
            <Input
              label="Nome Completo"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              leftIcon={<UserIcon size={18} />}
            />
            
            <Input
              label="Email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              helper="Usaremos seu email para contato"
            />

            <Select
              label="Escolha seu Plano"
              options={planOptions}
              value={formData.plan}
              onChange={(value) => setFormData({...formData, plan: value})}
              placeholder="Selecione um plano"
            />

            <div className="flex gap-3 pt-4">
              <Button variant="primary" size="md">
                Enviar Formulário
              </Button>
              <Button variant="outline" size="md">
                Cancelar
              </Button>
            </div>
          </div>
        </Card>

        {/* Search Bar Example */}
        <Card variant="ghost" className="mt-8">
          <Input
            placeholder="Buscar no aplicativo..."
            leftIcon={<SearchIcon size={20} />}
            size="lg"
          />
        </Card>
      </main>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modal de Exemplo"
        size="md"
        footer={
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirmar
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <p>Este é um modal usando a biblioteca de componentes.</p>
          <div className="flex gap-2">
            <Badge variant="default">Tag 1</Badge>
            <Badge variant="secondary">Tag 2</Badge>
            <Badge variant="success">Tag 3</Badge>
          </div>
          <Input
            placeholder="Digite algo no modal..."
            size="sm"
          />
        </div>
      </Modal>
    </div>
  );
}

export default AppWithLibrary;