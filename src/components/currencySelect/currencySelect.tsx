import { useState } from 'react';
import { isGBPSelected } from './helpers';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import type { CurrencySelectProps } from './types';

export default function CurrencySelect({
  value,
  onChange,
  currencies,
  placeholder = "Select currency",
  loading = false,
}: CurrencySelectProps) {
  const [open, setOpen] = useState(false)
  const selectedCurrency = currencies.find(c => c.code === value);

  const selectedCurrencyText = selectedCurrency ? isGBPSelected(selectedCurrency) : placeholder

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {loading? "Loading..." : selectedCurrencyText}
          <ChevronsUpDownIcon className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder={"Search Currency"} />
          <CommandList>
            <CommandEmpty>No currency found</CommandEmpty>
            <CommandGroup>
              {currencies.map((currency) => (
                <CommandItem
                  key={currency.code}
                  onSelect={() => {
                    onChange(currency.code)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === currency.code ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {currency.name} ({currency.code})
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
