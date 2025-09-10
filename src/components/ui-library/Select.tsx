import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, CheckIcon } from '@/lib/icons';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  helper?: string;
  disabled?: boolean;
  className?: string;
  variant?: 'default' | 'filled' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  error,
  helper,
  disabled,
  className,
  variant = 'default',
  size = 'md',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === selectedValue);

  const variantStyles = {
    default: 'border border-input hover:border-primary focus:border-primary focus:ring-2 focus:ring-ring/20',
    filled: 'bg-muted border border-transparent hover:border-primary focus:border-primary focus:bg-background',
    ghost: 'border-none bg-transparent hover:bg-muted focus:bg-muted',
  };

  const sizeStyles = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-5 text-lg',
  };

  const stateStyles = error ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : '';

  return (
    <div className="w-full" ref={selectRef}>
      {label && (
        <label className="mb-2 block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      
      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            'flex w-full items-center justify-between rounded-lg bg-background text-foreground transition-all duration-200',
            'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            variantStyles[variant],
            sizeStyles[size],
            stateStyles,
            className
          )}
        >
          <span className={cn(!selectedOption && 'text-muted-foreground')}>
            {selectedOption?.label || placeholder}
          </span>
          <ChevronDownIcon
            size={16}
            className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-1 w-full animate-fade-in rounded-lg border border-border bg-popover p-1 shadow-lg">
            <div className="max-h-60 overflow-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  disabled={option.disabled}
                  className={cn(
                    'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors',
                    'hover:bg-muted focus:bg-muted focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                    selectedValue === option.value && 'bg-muted font-medium'
                  )}
                >
                  <span>{option.label}</span>
                  {selectedValue === option.value && (
                    <CheckIcon size={16} className="text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-destructive">{error}</p>
      )}
      {helper && !error && (
        <p className="mt-1 text-sm text-muted-foreground">{helper}</p>
      )}
    </div>
  );
};

export { Select };