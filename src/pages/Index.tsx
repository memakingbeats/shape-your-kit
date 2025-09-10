import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import AppWithLibrary from '@/example-app/AppWithLibrary';
import { useState } from 'react';

const Index = () => {
  const [view, setView] = useState<'showcase' | 'example'>('example');

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="p-4 border-b border-border bg-background/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex gap-4">
          <button
            onClick={() => setView('example')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              view === 'example' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            App Exemplo
          </button>
          <button
            onClick={() => setView('showcase')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              view === 'showcase' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Showcase Componentes
          </button>
        </div>
      </div>
      
      {view === 'showcase' ? <ComponentShowcase /> : <AppWithLibrary />}
    </div>
  );
};

export default Index;
