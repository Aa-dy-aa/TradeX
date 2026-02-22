"use client";

import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

const CountrySelectField = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  // Get country data from react-select-country-list
  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value ? value.label : "Select country..."}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandEmpty>No country found.</CommandEmpty>

            <CommandGroup>
              {options.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.label}
                  onSelect={() => {
                    setValue(country);
                    setOpen(false);
                  }}
                >
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CountrySelectField;