import { Input, TextInput } from "@mantine/core";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useDebouncedValue, useHotkeys } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";

interface InputSearchProps {
  onChange: (value: string) => void;
}

export const InputSearch = (props: InputSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");

  const [debounced] = useDebouncedValue(value, 600);

  const inputFocus = () => {
    inputRef.current && inputRef.current.focus();
  };

  useEffect(() => {
    props.onChange(debounced);
  }, [debounced]);

  useHotkeys([["mod+F", () => inputFocus()]]);

  return (
    <TextInput
      ref={inputRef}
      icon={<MagnifyingGlassIcon />}
      placeholder="Buscar"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
};
