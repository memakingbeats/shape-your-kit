import React, { useState } from 'react';
import { Button } from '../ui-library/Button';
import { Input } from '../ui-library/Input';
import { Select } from '../ui-library/Select';
import { Card } from '../ui-library/Card';
import { Modal } from '../ui-library/Modal';
import { Badge } from '../ui-library/Badge';
import { Tooltip } from '../ui-library/Tooltip';
import { CopyIcon, CheckIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded-lg bg-background/80 p-2 transition-colors hover:bg-background"
      >
        {copied ? <CheckIcon size={16} className="text-success" /> : <CopyIcon size={16} />}
      </button>
    </div>
  );
};

interface ShowcaseSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  title,
  description,
  children,
  code,
}) => {
  return (
    <Card variant="elevated" className="mb-8">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
      
      <div className="mb-6 rounded-lg border border-border bg-background p-6">
        {children}
      </div>
      
      <details className="group">
        <summary className="cursor-pointer text-sm font-medium text-primary hover:underline">
          View Code
        </summary>
        <div className="mt-4">
          <CodeBlock code={code} />
        </div>
      </details>
    </Card>
  );
};

export const ComponentShowcase: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4 (Disabled)', disabled: true },
  ];

  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 bg-gradient-primary bg-clip-text text-5xl font-bold text-transparent">
          UI Component Library
        </h1>
        <p className="text-xl text-muted-foreground">
          A modern and customizable design system for React applications
        </p>
      </div>

      <ShowcaseSection
        title="Buttons"
        description="Various button styles and states for different use cases"
        code={`import { Button } from '@/components/ui-library/Button';

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button loading>Loading</Button>`}
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button loading>Loading</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button variant="primary" rounded="full">Rounded</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Input Fields"
        description="Customizable input components with validation states"
        code={`import { Input } from '@/components/ui-library/Input';

<Input placeholder="Default input" />
<Input variant="filled" placeholder="Filled input" />
<Input variant="underline" placeholder="Underline input" />
<Input label="With Label" placeholder="Enter text..." />
<Input error="This field is required" />`}
      >
        <div className="space-y-4">
          <Input
            placeholder="Default input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input variant="filled" placeholder="Filled input" />
          <Input variant="ghost" placeholder="Ghost input" />
          <Input variant="underline" placeholder="Underline input" />
          <Input
            label="With Label"
            placeholder="Enter text..."
            helper="This is a helper text"
          />
          <Input
            label="Error State"
            placeholder="Enter text..."
            error="This field is required"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Select Dropdown"
        description="Accessible dropdown select component"
        code={`import { Select } from '@/components/ui-library/Select';

<Select
  options={options}
  placeholder="Choose an option"
  value={value}
  onChange={setValue}
/>`}
      >
        <div className="space-y-4">
          <Select
            options={selectOptions}
            placeholder="Choose an option"
            value={selectValue}
            onChange={setSelectValue}
          />
          <Select
            options={selectOptions}
            label="With Label"
            helper="Select your preferred option"
            variant="filled"
          />
          <Select
            options={selectOptions}
            label="Error State"
            error="Please select an option"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Cards"
        description="Container components with multiple variants"
        code={`import { Card } from '@/components/ui-library/Card';

<Card variant="default">Default Card</Card>
<Card variant="elevated">Elevated Card</Card>
<Card variant="gradient">Gradient Card</Card>
<Card variant="outline">Outline Card</Card>`}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h4 className="mb-2 font-semibold">Default Card</h4>
            <p className="text-sm text-muted-foreground">
              This is a default card with standard styling.
            </p>
          </Card>
          <Card variant="elevated">
            <h4 className="mb-2 font-semibold">Elevated Card</h4>
            <p className="text-sm text-muted-foreground">
              This card has elevation with shadow effects.
            </p>
          </Card>
          <Card variant="gradient">
            <h4 className="mb-2 font-semibold">Gradient Card</h4>
            <p className="text-sm text-muted-foreground">
              This card has a gradient mesh background.
            </p>
          </Card>
          <Card variant="outline">
            <h4 className="mb-2 font-semibold">Outline Card</h4>
            <p className="text-sm text-muted-foreground">
              This card has a colored outline border.
            </p>
          </Card>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Badges"
        description="Small status indicators and labels"
        code={`import { Badge } from '@/components/ui-library/Badge';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Error</Badge>`}
      >
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Error</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="gradient">Gradient</Badge>
          <Badge size="sm">Small</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Modal Dialog"
        description="Accessible modal component for dialogs and forms"
        code={`import { Modal } from '@/components/ui-library/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  Modal content goes here
</Modal>`}
      >
        <div>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Example Modal"
            footer={
              <>
                <Button variant="ghost" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setModalOpen(false)}>
                  Confirm
                </Button>
              </>
            }
          >
            <p className="text-muted-foreground">
              This is an example modal dialog. You can add any content here including forms,
              images, or other components.
            </p>
          </Modal>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Tooltips"
        description="Contextual information on hover"
        code={`import { Tooltip } from '@/components/ui-library/Tooltip';

<Tooltip content="Tooltip text">
  <Button>Hover me</Button>
</Tooltip>`}
      >
        <div className="flex flex-wrap gap-4">
          <Tooltip content="Top tooltip" position="top">
            <Button variant="outline">Top</Button>
          </Tooltip>
          <Tooltip content="Bottom tooltip" position="bottom">
            <Button variant="outline">Bottom</Button>
          </Tooltip>
          <Tooltip content="Left tooltip" position="left">
            <Button variant="outline">Left</Button>
          </Tooltip>
          <Tooltip content="Right tooltip" position="right">
            <Button variant="outline">Right</Button>
          </Tooltip>
        </div>
      </ShowcaseSection>
    </div>
  );
};